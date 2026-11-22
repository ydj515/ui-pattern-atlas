import { useEffect, useRef, useState } from "react";

import { VirtualizedList } from "@/shared/ui/patterns/virtualized-list/VirtualizedList";

const COUNT = 10_000;

export function VirtualizedListDemo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(0);

  // Count the rows actually in the page after each paint, to show how few are drawn.
  function countRows() {
    requestAnimationFrame(() => setRendered(wrapRef.current?.querySelectorAll("li").length ?? 0));
  }

  useEffect(countRows, []);

  return (
    <div className="w-full max-w-xs space-y-2">
      <div ref={wrapRef} onScrollCapture={countRows}>
        <VirtualizedList
          label={`주문 ${COUNT.toLocaleString("ko-KR")}건`}
          count={COUNT}
          rowHeight={36}
          height={252}
          renderRow={(index) => (
            <span className="flex w-full justify-between">
              주문 {index + 1}
              <span className="text-xs text-slate-400 tabular-nums">
                #{String(index + 1).padStart(5, "0")}
              </span>
            </span>
          )}
        />
      </div>
      <p className="text-center text-xs text-slate-500">
        {COUNT.toLocaleString("ko-KR")}건 중 화면에 그린 행 {rendered}개
      </p>
    </div>
  );
}
