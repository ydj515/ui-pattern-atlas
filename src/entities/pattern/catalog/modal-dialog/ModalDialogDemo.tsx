import { useState } from "react";

import { ModalDialog } from "@/shared/ui/patterns/modal-dialog/ModalDialog";

export function ModalDialogDemo() {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        삭제하기
      </button>
      <p role="status" className="min-h-5 text-xs text-slate-500">
        {deleted ? "프로젝트를 삭제했어요." : ""}
      </p>

      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="프로젝트를 삭제할까요?"
        description="삭제한 프로젝트와 파일은 복구할 수 없어요."
      >
        <div className="flex justify-end gap-2">
          {/* The safe action receives initial focus. */}
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              setDeleted(true);
              setOpen(false);
            }}
            className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            삭제
          </button>
        </div>
      </ModalDialog>
    </div>
  );
}
