import { useEffect, useId, useRef, type ReactNode } from "react";

export interface ModalDialogProps {
  /** Whether the dialog is shown. The parent owns this state. */
  readonly open: boolean;
  /** Called when the user asks to close the dialog (Escape, backdrop click, or an action). */
  readonly onClose: () => void;
  readonly title: string;
  readonly description?: string;
  /** Body content and actions. Put the safest action first and give it `autoFocus`. */
  readonly children?: ReactNode;
  /** Close when the backdrop is clicked. Disable for flows that must not be dismissed by accident. */
  readonly dismissOnBackdrop?: boolean;
}

/**
 * Modal dialog built on the native `<dialog>` element.
 *
 * `showModal()` gives focus trapping, the top layer, an inert background and
 * focus restoration for free, so the component only syncs the `open` prop.
 */
export function ModalDialog({
  open,
  onClose,
  title,
  description,
  children,
  dismissOnBackdrop = true,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

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
      aria-describedby={description ? descriptionId : undefined}
      onCancel={(event) => {
        // Keep the parent as the single source of truth for Escape.
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        if (open) onClose();
      }}
      onClick={(event) => {
        if (dismissOnBackdrop && event.target === event.currentTarget) onClose();
      }}
      className="m-auto w-[min(26rem,calc(100%-2rem))] rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/50 backdrop:backdrop-blur-[2px]"
    >
      <div className="p-6">
        <h2 id={titleId} className="text-lg font-semibold">
          {title}
        </h2>
        {description ? (
          <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </dialog>
  );
}
