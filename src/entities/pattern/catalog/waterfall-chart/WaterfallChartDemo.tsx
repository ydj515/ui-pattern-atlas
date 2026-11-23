import { useState } from "react";
import { WaterfallChart } from "@/shared/ui/patterns/waterfall-chart/WaterfallChart";

const MONTHS = {
  october: { label: "10월", sales: 1000, steps: [-420, -300, -220, 20] },
  november: { label: "11월", sales: 1200, steps: [-480, -300, -150, 60] },
};
const STEPS = ["원가", "인건비", "광고", "기타 수익"];

export function WaterfallChartDemo() {
  const [month, setMonth] = useState<keyof typeof MONTHS>("november");
  const current = MONTHS[month];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">달</legend>
        {(Object.keys(MONTHS) as (keyof typeof MONTHS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="waterfall-month"
              className="sr-only"
              checked={month === id}
              onChange={() => setMonth(id)}
            />
            {MONTHS[id].label}
          </label>
        ))}
      </fieldset>
      <WaterfallChart
        title={`${current.label} 손익(만 원)`}
        start={{ label: "매출", value: current.sales }}
        steps={STEPS.map((label, index) => ({ label, value: current.steps[index] ?? 0 }))}
        endLabel="순이익"
        legend={{ up: "늘어남", down: "줄어듦", total: "합계" }}
        tableLabel="표로 보기"
      />
    </section>
  );
}
