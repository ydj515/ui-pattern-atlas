import { useState } from "react";

import { List } from "@/shared/ui/patterns/list/List";

const file = (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
    <path d="M6 2.5h6l3.5 3.5v11H6a1 1 0 0 1-1-1v-12.5a1 1 0 0 1 1-1Zm6 0V6h3.5" />
  </svg>
);

const FILES = [
  { id: "minutes", title: "회의록.pdf", meta: "2.1MB · 김하늘", trailing: "어제", leading: file },
  {
    id: "plan",
    title: "출시 계획.docx",
    meta: "540KB · 이도윤",
    trailing: "월요일",
    leading: file,
  },
  {
    id: "budget",
    title: "예산표.xlsx",
    meta: "88KB · 박서준",
    trailing: "11월 20일",
    leading: file,
  },
] as const;

export function ListDemo() {
  const [opened, setOpened] = useState("");
  return (
    <div className="w-full max-w-xs space-y-2">
      <List
        label="최근 파일"
        items={FILES}
        onSelect={(id) => setOpened(FILES.find((item) => item.id === id)?.title ?? "")}
      />
      <p role="status" className="min-h-4 text-center text-xs text-slate-600">
        {opened ? `${opened}을(를) 열었어요` : ""}
      </p>
    </div>
  );
}
