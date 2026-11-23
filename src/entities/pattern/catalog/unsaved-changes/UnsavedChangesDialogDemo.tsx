import { useState } from "react";
import { UnsavedChangesDialog } from "@/shared/ui/patterns/unsaved-changes/UnsavedChangesDialog";

const SAVED = "망원동에 사는 사진 찍는 사람";

export function UnsavedChangesDialogDemo() {
  const [saved, setSaved] = useState(SAVED);
  const [draft, setDraft] = useState(SAVED);
  const [asking, setAsking] = useState(false);
  const [result, setResult] = useState("");
  const leave = (message: string) => {
    setAsking(false);
    setResult(message);
  };

  return (
    <section className="relative grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            if (draft === saved) leave("목록으로 나갔어요");
            else setAsking(true);
          }}
          className="rounded-lg border border-slate-300 px-2 py-1 text-xs text-slate-700"
        >
          ‹ 뒤로
        </button>
        <h3 className="font-semibold text-slate-900">프로필 편집</h3>
      </div>
      <label className="grid gap-1 text-slate-700">
        소개
        <input
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            setResult("");
          }}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
        />
      </label>
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {result}
      </p>
      <div className="absolute inset-x-4 top-12">
        <UnsavedChangesDialog
          open={asking}
          onSave={() => {
            setSaved(draft);
            leave("소개를 저장하고 목록으로 나갔어요");
          }}
          onDiscard={() => {
            setDraft(saved);
            leave("바꾼 소개 없이 목록으로 나갔어요");
          }}
          onCancel={() => setAsking(false)}
          labels={{
            title: "저장하지 않은 내용이 있어요",
            body: "나가면 바꾼 소개가 사라져요",
            save: "저장하고 나가기",
            discard: "저장하지 않고 나가기",
            cancel: "계속 편집",
          }}
        />
      </div>
    </section>
  );
}
