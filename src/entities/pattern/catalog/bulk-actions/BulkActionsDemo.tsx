import { useState } from "react";
import { BulkActions, type BulkItem } from "@/shared/ui/patterns/bulk-actions/BulkActions";

const FILES: readonly BulkItem[] = [
  { id: "march", name: "영수증_3월.pdf", detail: "1.2MB" },
  { id: "april", name: "영수증_4월.pdf", detail: "980KB" },
  { id: "contract", name: "계약서.pdf", detail: "3.4MB" },
  { id: "quote", name: "견적서.xlsx", detail: "64KB" },
];

export function BulkActionsDemo() {
  const [files, setFiles] = useState(FILES);
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [last, setLast] = useState<{ verb: string; files: readonly BulkItem[] } | null>(null);

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <BulkActions
        items={files}
        selected={selected}
        onSelectedChange={setSelected}
        onAction={(action, ids) => {
          setLast({
            verb: action === "delete" ? "지웠어요" : "보관했어요",
            files: files.filter((file) => ids.includes(file.id)),
          });
          setFiles((current) => current.filter((file) => !ids.includes(file.id)));
          setSelected(new Set());
        }}
        labels={{
          count: (count) => `${count}개 선택`,
          archive: "보관",
          delete: "삭제",
          clear: "선택 해제",
          toolbar: "선택한 파일 작업",
        }}
      />
      <div role="status" className="min-h-8">
        {last ? (
          <p className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs text-white">
            <span className="flex-1">
              파일 {last.files.length}개를 {last.verb}
            </span>
            <button
              type="button"
              onClick={() => {
                setFiles(FILES.filter((file) => files.includes(file) || last.files.includes(file)));
                setLast(null);
              }}
              className="font-semibold text-sky-300"
            >
              되돌리기
            </button>
          </p>
        ) : null}
      </div>
    </section>
  );
}
