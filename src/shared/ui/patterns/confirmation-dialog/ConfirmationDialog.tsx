import {
  createContext,
  use,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface ConfirmOptions {
  readonly title: string;
  readonly description?: string;
  /** Verb for the action, e.g. "나가기". Avoid a bare "확인". */
  readonly confirmLabel: string;
  readonly cancelLabel?: string;
  /** `danger` styles the confirm button for destructive actions. */
  readonly tone?: "default" | "danger";
}

/** Asks the user and resolves `true` when they confirm, `false` when they cancel or dismiss. */
type Confirm = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<Confirm | null>(null);

/** Returns `confirm(options)`. Must be used inside `ConfirmationDialogProvider`. */
export function useConfirm(): Confirm {
  const confirm = use(ConfirmContext);
  if (!confirm) throw new Error("useConfirm must be used within a ConfirmationDialogProvider");
  return confirm;
}

interface PendingRequest {
  readonly options: ConfirmOptions;
  readonly resolve: (confirmed: boolean) => void;
}

const toneClasses = {
  default: "bg-slate-900 hover:bg-slate-700",
  danger: "bg-rose-600 hover:bg-rose-700",
} as const;

/**
 * Promise-based confirmation: `if (await confirm({ ... })) leave();`.
 *
 * One native modal dialog serves the whole app. The cancel button comes first and gets
 * focus, so pressing Enter by habit never runs the action; Escape and a backdrop click
 * resolve `false`.
 */
export function ConfirmationDialogProvider({ children }: { readonly children: ReactNode }) {
  const [request, setRequest] = useState<PendingRequest | null>(null);
  // Mirrors `request` so a newer call or unmount can settle the one still waiting.
  const pendingRef = useRef<PendingRequest | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const confirm = useCallback<Confirm>(
    (options) =>
      new Promise<boolean>((resolve) => {
        // Only one question at a time: an unanswered earlier one counts as cancelled.
        pendingRef.current?.resolve(false);
        const next = { options, resolve };
        pendingRef.current = next;
        setRequest(next);
      }),
    [],
  );

  useEffect(() => () => pendingRef.current?.resolve(false), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (request && !dialog.open) {
      dialog.showModal();
      cancelRef.current?.focus();
    }
    if (!request && dialog.open) dialog.close();
  }, [request]);

  function settle(confirmed: boolean) {
    pendingRef.current?.resolve(confirmed);
    pendingRef.current = null;
    setRequest(null);
  }

  const options = request?.options;

  return (
    <ConfirmContext value={confirm}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={options?.description ? descriptionId : undefined}
        onCancel={(event) => {
          event.preventDefault();
          settle(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) settle(false);
        }}
        className="m-auto w-[min(24rem,calc(100%-2rem))] rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/50"
      >
        {options ? (
          <div className="p-6">
            <h2 id={titleId} className="text-lg font-semibold">
              {options.title}
            </h2>
            {options.description ? (
              <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-600">
                {options.description}
              </p>
            ) : null}
            <div className="mt-6 flex justify-end gap-2">
              <button
                ref={cancelRef}
                type="button"
                onClick={() => settle(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {options.cancelLabel ?? "취소"}
              </button>
              <button
                type="button"
                onClick={() => settle(true)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold text-white ${toneClasses[options.tone ?? "default"]}`}
              >
                {options.confirmLabel}
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </ConfirmContext>
  );
}
