import { useEffect, useId, useRef, type ReactNode } from "react";

const sideClasses = {
  right: "mr-0 ml-auto rounded-l-2xl",
  left: "mr-auto ml-0 rounded-r-2xl",
} as const;

export interface DrawerProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly side?: keyof typeof sideClasses;
  readonly children: ReactNode;
  /** Sticky footer, usually the primary and secondary actions. */
  readonly footer?: ReactNode;
}

/**
 * Side panel built on the native modal `<dialog>`.
 *
 * Use it for tasks that need more room than a modal (filters, forms, details)
 * while keeping the page underneath in place.
 */
export function Drawer({ open, onClose, title, side = "right", children, footer }: DrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        if (open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`my-0 h-dvh max-h-dvh w-[min(24rem,100%)] max-w-full bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/40 ${sideClasses[side]}`}
    >
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 id={titleId} className="text-base font-semibold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-9 place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
              <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z" />
            </svg>
          </button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer ? <footer className="border-t border-slate-200 px-5 py-4">{footer}</footer> : null}
      </div>
    </dialog>
  );
}
