import { useEffect, useId, useRef, type ReactNode } from "react";

export interface AlertDialogProps {
  readonly open: boolean;
  readonly title: string;
  readonly description: string;
  /** The response the situation asks for, e.g. "로그인 유지". Receives initial focus. */
  readonly actionLabel: string;
  readonly onAction: () => void;
  /** Optional second response, e.g. "로그아웃". Escape triggers it when provided. */
  readonly cancelLabel?: string;
  readonly onCancel?: () => void;
  /** Extra live content such as a countdown. */
  readonly children?: ReactNode;
}

/**
 * Urgent message that interrupts the user and needs a response (role="alertdialog").
 *
 * Unlike a regular modal it is usually opened by the system, not by a click, and it
 * cannot be dismissed by clicking the backdrop. Escape runs the cancel response when
 * there is one; otherwise the user must pick the action.
 */
export function AlertDialog({
  open,
  title,
  description,
  actionLabel,
  onAction,
  cancelLabel,
  onCancel,
  children,
}: AlertDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      actionRef.current?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        onCancel?.();
      }}
      className="m-auto w-[min(24rem,calc(100%-2rem))] rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60"
    >
      <div className="p-6">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-100 text-base font-bold text-amber-700"
          >
            !
          </span>
          <div>
            <h2 id={titleId} className="text-lg font-semibold">
              {title}
            </h2>
            <p id={descriptionId} className="mt-1.5 text-sm leading-6 text-slate-600">
              {description}
            </p>
            {children ? <div className="mt-3">{children}</div> : null}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          {cancelLabel ? (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {cancelLabel}
            </button>
          ) : null}
          <button
            ref={actionRef}
            type="button"
            onClick={onAction}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </dialog>
  );
}
