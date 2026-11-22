import { useState } from "react";

import {
  ConfirmationDialogProvider,
  useConfirm,
} from "@/shared/ui/patterns/confirmation-dialog/ConfirmationDialog";

const DRAFT = "다음 주 출시 일정 정리";

function NoteEditor() {
  const confirm = useConfirm();
  const [view, setView] = useState<"edit" | "list">("edit");
  const [text, setText] = useState(DRAFT);
  const [savedText, setSavedText] = useState("");
  const [message, setMessage] = useState("");
  const hasUnsavedChanges = text !== savedText;

  async function goToList() {
    if (hasUnsavedChanges) {
      const leave = await confirm({
        title: "저장하지 않고 나갈까요?",
        description: "작성 중인 내용이 사라져요.",
        confirmLabel: "나가기",
        cancelLabel: "계속 작성",
        tone: "danger",
      });
      if (!leave) return;
      setText(savedText);
    }
    setMessage("");
    setView("list");
  }

  if (view === "list") {
    return (
      <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">회의록 목록</p>
        <p className="mt-2 text-xs text-slate-500">{savedText || "저장된 회의록이 없어요"}</p>
        <button
          type="button"
          onClick={() => {
            setText(savedText || DRAFT);
            setView("edit");
          }}
          className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          새로 작성
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <label htmlFor="confirmation-demo-note" className="text-sm font-semibold text-slate-900">
          회의록
        </label>
        <textarea
          id="confirmation-demo-note"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={2}
          className="mt-2 block w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={goToList}
            className="flex-1 rounded-lg border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            목록으로
          </button>
          <button
            type="button"
            onClick={() => {
              setSavedText(text);
              setMessage("저장했어요");
            }}
            className="flex-1 rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            저장
          </button>
        </div>
      </div>
      <p role="status" className="min-h-5 text-center text-xs text-slate-500">
        {message}
      </p>
    </div>
  );
}

export function ConfirmationDialogDemo() {
  return (
    <ConfirmationDialogProvider>
      <NoteEditor />
    </ConfirmationDialogProvider>
  );
}
