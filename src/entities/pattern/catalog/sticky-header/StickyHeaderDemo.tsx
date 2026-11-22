import { useRef } from "react";

import { StickyHeader, useScrolled } from "@/shared/ui/patterns/sticky-header/StickyHeader";

const ORDERS = Array.from({ length: 14 }, (_, index) => `주문 ${2026 - index}번 · 배송 완료`);

export function StickyHeaderDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrolled = useScrolled(scrollRef);

  return (
    <div
      ref={scrollRef}
      tabIndex={0}
      className="h-64 w-full max-w-xs overflow-y-auto rounded-xl border border-slate-200 bg-white focus:outline-none"
    >
      <StickyHeader
        title="주문 내역"
        scrolled={scrolled}
        action={
          <button type="button" className="text-xs text-slate-600 underline">
            필터
          </button>
        }
      />
      <ul className="divide-y divide-slate-100 text-sm">
        {ORDERS.map((order) => (
          <li key={order} className="px-4 py-3 text-slate-700">
            {order}
          </li>
        ))}
      </ul>
    </div>
  );
}
