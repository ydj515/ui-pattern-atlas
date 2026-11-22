import { useRef } from "react";

import { ScrollProgress } from "@/shared/ui/patterns/scroll-progress/ScrollProgress";

const PARAGRAPHS = [
  "버튼 문구는 누르면 일어날 일을 동사로 씁니다.",
  "확인, 예 같은 말보다 저장, 보내기처럼 결과가 드러나는 말이 좋습니다.",
  "같은 화면에서 같은 행동은 같은 말로 부릅니다.",
  "취소는 되돌리는 동작에만 쓰고, 삭제와 헷갈리지 않게 합니다.",
  "버튼이 여러 개라면 가장 중요한 하나만 강조합니다.",
  "마지막으로, 문구를 소리 내어 읽어 보고 어색한 곳을 고칩니다.",
];

export function ScrollProgressDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 bg-white">
      <ScrollProgress scrollRef={scrollRef} className="absolute inset-x-0 top-0 z-10" />
      <div
        ref={scrollRef}
        tabIndex={0}
        className="h-60 space-y-4 overflow-y-auto p-4 pt-5 text-sm leading-6 text-slate-700 focus:outline-none"
      >
        <h3 className="text-base font-semibold text-slate-900">버튼 문구 쓰는 법</h3>
        {PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
