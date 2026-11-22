import { useRef } from "react";

import { BackToTop } from "@/shared/ui/patterns/back-to-top/BackToTop";

export function BackToTopDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="relative h-72 w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div ref={scrollRef} className="h-full overflow-y-auto">
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="px-4 pt-4 text-sm font-semibold text-slate-900 focus:outline-none"
        >
          공지사항
        </h3>
        <ul className="divide-y divide-slate-100 pb-16 text-sm">
          {Array.from({ length: 30 }, (_, index) => (
            <li key={index} className="px-4 py-3 text-slate-700">
              공지 {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <BackToTop
        scrollRef={scrollRef}
        focusRef={headingRef}
        threshold={200}
        label="맨 위로"
        className="absolute right-4 bottom-4"
      />
    </div>
  );
}
