import { useState } from "react";

import { DashboardLayout } from "@/shared/ui/patterns/dashboard-layout/DashboardLayout";

const DATA = {
  week: {
    metrics: [
      ["방문", "4,210", "+8%", true],
      ["주문", "312", "+3%", true],
      ["환불", "9", "-2%", false],
    ],
    bars: [40, 55, 48, 70, 62, 80, 75],
  },
  month: {
    metrics: [
      ["방문", "18,940", "+12%", true],
      ["주문", "1,284", "+6%", true],
      ["환불", "41", "+4%", false],
    ],
    bars: [50, 62, 58, 66, 74, 70, 88],
  },
} as const;

export function DashboardLayoutDemo() {
  const [period, setPeriod] = useState<keyof typeof DATA>("week");
  const data = DATA[period];

  return (
    <div className="w-full max-w-sm">
      <DashboardLayout
        toolbar={
          <div role="group" aria-label="기간" className="flex gap-1 text-xs">
            {[
              ["week", "이번 주"],
              ["month", "이번 달"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={period === value}
                onClick={() => setPeriod(value as keyof typeof DATA)}
                className="rounded-md border border-slate-300 px-2 py-1 aria-pressed:bg-slate-900 aria-pressed:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        }
        metrics={data.metrics.map(([label, value, change, positive]) => ({
          label,
          value,
          change: `${change} ${positive ? "증가" : "감소"}`,
          positive,
        }))}
        chart={
          <figure>
            <figcaption className="text-xs text-slate-500">일별 방문</figcaption>
            <div aria-hidden="true" className="mt-2 flex h-16 items-end gap-1.5">
              {data.bars.map((bar, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t bg-blue-500"
                  style={{ height: `${bar}%` }}
                />
              ))}
            </div>
          </figure>
        }
        detail={<p className="px-3 py-2 text-xs text-slate-600">가장 많이 본 상품: 린넨 셔츠</p>}
      />
    </div>
  );
}
