import { useState } from "react";

import { Badge } from "@/shared/ui/patterns/badge/Badge";

export function BadgeDemo() {
  const [count, setCount] = useState(3);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        aria-label={count > 0 ? `장바구니, 상품 ${count}개` : "장바구니"}
        className="relative grid size-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-700"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          className="size-6"
        >
          <path d="M3 4h2l2.4 11h10.2L20 7H7" strokeLinejoin="round" />
          <circle cx="9.5" cy="19" r="1.3" />
          <circle cx="17" cy="19" r="1.3" />
        </svg>
        <Badge count={count} max={99} className="absolute -top-1 -right-1" />
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button
          type="button"
          onClick={() => setCount((value) => Math.max(0, value - 1))}
          className="rounded-md border border-slate-300 px-2.5 py-1"
        >
          빼기
        </button>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="rounded-md border border-slate-300 px-2.5 py-1"
        >
          담기
        </button>
        <button
          type="button"
          onClick={() => setCount(120)}
          className="rounded-md border border-slate-300 px-2.5 py-1"
        >
          120개
        </button>
      </div>
    </div>
  );
}
