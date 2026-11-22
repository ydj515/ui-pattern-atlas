import { useState } from "react";

import { ResponsiveGrid } from "@/shared/ui/patterns/responsive-grid/ResponsiveGrid";

const ITEMS = ["커피", "차", "주스", "케이크", "쿠키", "샌드위치"] as const;

export function ResponsiveGridDemo() {
  const [width, setWidth] = useState(360);

  return (
    <div className="space-y-3">
      <label className="flex items-center justify-center gap-2 text-xs text-slate-600">
        화면 폭
        <input
          type="range"
          min={200}
          max={440}
          step={20}
          value={width}
          onChange={(event) => setWidth(Number(event.target.value))}
        />
        <span className="w-12 tabular-nums">{width}px</span>
      </label>
      <div className="mx-auto rounded-xl border border-slate-200 bg-white p-2" style={{ width }}>
        <ResponsiveGrid label="메뉴" minColumn={96}>
          {ITEMS.map((item) => (
            <li
              key={item}
              className="grid h-14 place-items-center rounded-lg bg-slate-100 text-sm text-slate-700"
            >
              {item}
            </li>
          ))}
        </ResponsiveGrid>
      </div>
    </div>
  );
}
