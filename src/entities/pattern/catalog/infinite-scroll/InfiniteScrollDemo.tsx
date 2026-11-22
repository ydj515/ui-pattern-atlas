import { useEffect, useRef, useState } from "react";

import { InfiniteScroll } from "@/shared/ui/patterns/infinite-scroll/InfiniteScroll";

const PAGE_SIZE = 10;
const TOTAL = 40;
const LOAD_MS = 600;

export function InfiniteScrollDemo() {
  const [count, setCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function loadMore() {
    setLoading(true);
    timerRef.current = window.setTimeout(() => {
      setCount((value) => Math.min(TOTAL, value + PAGE_SIZE));
      setLoading(false);
    }, LOAD_MS);
  }

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 bg-white">
      <InfiniteScroll
        label="새 소식"
        height={280}
        hasMore={count < TOTAL}
        loading={loading}
        onLoadMore={loadMore}
        loadingText="더 불러오는 중"
        endText="마지막 소식이에요"
        moreLabel="더 불러오기"
      >
        <ul className="divide-y divide-slate-100 text-sm">
          {Array.from({ length: count }, (_, index) => (
            <li key={index} className="px-4 py-3 text-slate-700">
              소식 {index + 1}
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
