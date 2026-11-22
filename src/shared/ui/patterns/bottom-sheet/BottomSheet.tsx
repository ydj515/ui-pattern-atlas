import { useEffect, useId, useRef, type ReactNode } from "react";

interface BottomSheetProps {
  readonly open: boolean;
  readonly title: string;
  readonly onClose: () => void;
  readonly children: ReactNode;
  readonly closeLabel?: string;
}

export function BottomSheet({
  open,
  title,
  onClose,
  children,
  closeLabel = "닫기",
}: BottomSheetProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-x-0 top-auto bottom-0 mx-auto mb-0 max-h-[80dvh] w-full max-w-md overflow-y-auto rounded-t-2xl border-0 bg-white p-0 text-slate-900 transition-transform duration-200 backdrop:bg-slate-900/50 motion-reduce:transition-none starting:translate-y-full"
    >
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 id={titleId} className="font-semibold">
            {title}
          </h2>
          <button
            type="button"
            className="rounded-md border border-slate-200 px-3 py-1 text-sm"
            onClick={onClose}
          >
            {closeLabel}
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
