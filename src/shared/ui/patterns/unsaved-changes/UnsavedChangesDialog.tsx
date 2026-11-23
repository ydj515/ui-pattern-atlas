import { useEffect, useId, useRef } from "react";

export interface UnsavedChangesDialogProps {
  readonly open: boolean;
  readonly onSave: () => void;
  readonly onDiscard: () => void;
  readonly onCancel: () => void;
  readonly labels?: {
    readonly title: string;
    readonly body: string;
    readonly save: string;
    readonly discard: string;
    readonly cancel: string;
  };
}

const DEFAULT_LABELS = {
  title: "저장하지 않은 내용이 있어요",
  body: "나가면 바꾼 내용이 사라져요",
  save: "저장하고 나가기",
  discard: "저장하지 않고 나가기",
  cancel: "계속 편집",
};

/**
 * Asked only when leaving with unsaved edits. Three plain choices name their result:
 * save and leave, leave without saving, or keep editing (the safe default, focused first).
 */
export function UnsavedChangesDialog({
  open,
  onSave,
  onDiscard,
  onCancel,
  labels = DEFAULT_LABELS,
}: UnsavedChangesDialogProps) {
  const id = useId();
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) cancelRef.current?.focus();
  }, [open]);

  if (!open) return null;
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-body`}
      onKeyDown={(event) => {
        if (event.key === "Escape") onCancel();
      }}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-lg"
    >
      <h3 id={`${id}-title`} className="font-semibold text-slate-900">
        {labels.title}
      </h3>
      <p id={`${id}-body`} className="text-slate-600">
        {labels.body}
      </p>
      <div className="grid gap-2">
        <button
          type="button"
          onClick={onSave}
          className="rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
        >
          {labels.save}
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-rose-600"
        >
          {labels.discard}
        </button>
        <button
          ref={cancelRef}
          type="button"
          onClick={onCancel}
          className="rounded-lg px-3 py-2 font-medium text-slate-700"
        >
          {labels.cancel}
        </button>
      </div>
    </div>
  );
}
