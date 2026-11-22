import { useRef } from "react";

import { TableOfContents } from "@/shared/ui/patterns/table-of-contents/TableOfContents";

const SECTIONS = [
  { id: "toc-start", label: "시작하기" },
  { id: "toc-install", label: "설치" },
  { id: "toc-usage", label: "사용법" },
  { id: "toc-faq", label: "자주 묻는 질문" },
] as const;

export function TableOfContentsDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-72 w-full max-w-md gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="w-28 shrink-0">
        <TableOfContents label="목차" items={SECTIONS} scrollRef={scrollRef} offset={8} />
      </div>
      <div
        ref={scrollRef}
        tabIndex={0}
        className="flex-1 space-y-6 overflow-y-auto pr-2 text-sm leading-6 text-slate-600 focus:outline-none"
      >
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="scroll-mt-2"
          >
            <h3 id={`${section.id}-title`} className="font-semibold text-slate-900">
              {section.label}
            </h3>
            <p>
              {section.label}에 대한 설명이에요. 스크롤하면 왼쪽 목차가 지금 읽는 부분을 따라가요.
            </p>
            <p>목차를 누르면 그 부분으로 바로 이동해요.</p>
          </section>
        ))}
      </div>
    </div>
  );
}
