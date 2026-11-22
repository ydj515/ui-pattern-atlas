import { useState } from "react";

import { MasonryGrid } from "@/shared/ui/patterns/masonry-grid/MasonryGrid";

const PINS = [
  { title: "거실 식물 배치", height: "h-24", tone: "bg-emerald-200" },
  { title: "작은 주방 수납", height: "h-16", tone: "bg-amber-200" },
  { title: "침실 조명", height: "h-20", tone: "bg-indigo-200" },
  { title: "현관 꾸미기", height: "h-28", tone: "bg-rose-200" },
  { title: "책상 정리", height: "h-14", tone: "bg-sky-200" },
  { title: "욕실 타일", height: "h-20", tone: "bg-slate-200" },
] as const;

export function MasonryGridDemo() {
  const [columns, setColumns] = useState(3);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div role="group" aria-label="열 수" className="flex justify-end gap-1 text-xs">
        {[2, 3].map((count) => (
          <button
            key={count}
            type="button"
            aria-pressed={columns === count}
            onClick={() => setColumns(count)}
            className="rounded-md border border-slate-300 px-2 py-1 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {count}열
          </button>
        ))}
      </div>
      <MasonryGrid label="인테리어 아이디어" columns={columns}>
        {PINS.map((pin) => (
          <li
            key={pin.title}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <div aria-hidden="true" className={`${pin.height} ${pin.tone}`} />
            <p className="px-2 py-1.5 text-xs text-slate-700">{pin.title}</p>
          </li>
        ))}
      </MasonryGrid>
    </div>
  );
}
