import {
  createContext,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const DEFAULT_DURATION_MS = 4000;

const toneClasses = {
  neutral: "bg-slate-900 text-white",
  success: "bg-emerald-700 text-white",
  error: "bg-rose-700 text-white",
} as const;

export type ToastTone = keyof typeof toneClasses;

export interface ToastAction {
  readonly label: string;
  readonly onAction: () => void;
}

export interface ToastOptions {
  readonly tone?: ToastTone;
  readonly action?: ToastAction;
  readonly durationMs?: number;
}

interface ToastItem extends Required<Omit<ToastOptions, "action">> {
  readonly id: number;
  readonly message: string;
  readonly action?: ToastAction;
}

type ShowToast = (message: string, options?: ToastOptions) => void;

const ToastContext = createContext<ShowToast | null>(null);

/** Returns `showToast(message, options)`. Must be used inside `ToastProvider`. */
export function useToast(): ShowToast {
  const showToast = use(ToastContext);
  if (!showToast) throw new Error("useToast must be used within a ToastProvider");
  return showToast;
}

/**
 * Provides `useToast` and renders a polite live region at the bottom of the viewport.
 * The live region is always mounted so screen readers announce new messages.
 */
export function ToastProvider({ children }: { readonly children: ReactNode }) {
  const [toasts, setToasts] = useState<readonly ToastItem[]>([]);
  const nextIdRef = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback<ShowToast>((message, options = {}) => {
    nextIdRef.current += 1;
    const toast: ToastItem = {
      id: nextIdRef.current,
      message,
      tone: options.tone ?? "neutral",
      durationMs: options.durationMs ?? DEFAULT_DURATION_MS,
      action: options.action,
    };
    // Keep the stack short so older messages do not pile up.
    setToasts((current) => [...current.slice(-2), toast]);
  }, []);

  return (
    <ToastContext value={showToast}>
      {children}
      <div
        role="region"
        aria-label="Notifications"
        aria-live="polite"
        aria-relevant="additions"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4"
      >
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext>
  );
}

function ToastMessage({
  toast,
  onDismiss,
}: {
  readonly toast: ToastItem;
  readonly onDismiss: (id: number) => void;
}) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => onDismiss(toast.id), toast.durationMs);
    return () => window.clearTimeout(timer);
  }, [paused, toast.id, toast.durationMs, onDismiss]);

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl px-4 py-3 text-sm shadow-lg ${toneClasses[toast.tone]}`}
    >
      <p className="flex-1">{toast.message}</p>
      {toast.action ? (
        <button
          type="button"
          onClick={() => {
            toast.action?.onAction();
            onDismiss(toast.id);
          }}
          className="shrink-0 rounded-md px-2 py-1 font-semibold underline-offset-2 hover:underline"
        >
          {toast.action.label}
        </button>
      ) : null}
    </div>
  );
}
