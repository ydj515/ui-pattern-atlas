import { useState } from "react";

import { ContextMenu } from "@/shared/ui/patterns/context-menu/ContextMenu";

const FILES = ["사진.png", "회의록.pdf", "예산.xlsx"] as const;

const RESULTS: Record<string, (file: string) => string> = {
  open: (file) => `${file} 파일을 열었어요`,
  download: (file) => `${file} 파일을 다운로드했어요`,
  link: (file) => `${file} 링크를 복사했어요`,
  delete: (file) => `${file} 파일을 삭제했어요`,
};

export function ContextMenuDemo() {
  const [result, setResult] = useState("");

  return (
    <div className="w-full max-w-sm space-y-3">
      <p className="text-center text-xs text-slate-500">
        파일을 우클릭하거나 길게 눌러 보세요. 키보드는 Shift+F10.
      </p>
      <ul className="grid grid-cols-3 gap-2">
        {FILES.map((file) => (
          <li key={file}>
            <ContextMenu
              label={`${file} 메뉴`}
              items={[
                { id: "open", label: "열기" },
                { id: "download", label: "다운로드" },
                { id: "link", label: "링크 복사" },
                { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
              ]}
              onSelect={(id) => setResult(RESULTS[id]?.(file) ?? "")}
            >
              <button
                type="button"
                className="flex w-full flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-4 text-xs text-slate-700 hover:border-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500"
                >
                  ▤
                </span>
                {file}
              </button>
            </ContextMenu>
          </li>
        ))}
      </ul>
      <p role="status" className="min-h-5 text-center text-xs text-slate-500">
        {result}
      </p>
    </div>
  );
}
