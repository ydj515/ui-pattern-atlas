import { useState } from "react";
import { BulletChart } from "@/shared/ui/patterns/bullet-chart/BulletChart";

const METRICS = [
  { label: "매출 달성률", target: 90 },
  { label: "신규 가입", target: 90 },
  { label: "재구매율", target: 75 },
];
const MONTHS = {
  this: { label: "이번 달", values: [82, 95, 64] },
  last: { label: "지난달", values: [74, 88, 70] },
};

export function BulletChartDemo() {
  const [month, setMonth] = useState<keyof typeof MONTHS>("this");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기간</legend>
        {(Object.keys(MONTHS) as (keyof typeof MONTHS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="bullet-month"
              className="sr-only"
              checked={month === id}
              onChange={() => setMonth(id)}
            />
            {MONTHS[id].label}
          </label>
        ))}
      </fieldset>
      <div className="grid gap-3">
        {METRICS.map((metric, index) => (
          <BulletChart
            key={metric.label}
            label={metric.label}
            value={MONTHS[month].values[index] ?? 0}
            target={metric.target}
            max={100}
            bands={[60, 80]}
            format={(value) => `${value}%`}
            targetLabel={(target) => `목표 ${target}`}
          />
        ))}
      </div>
      <p className="text-xs text-slate-500">회색 띠: 60% 미만 · 60~80% · 80% 이상</p>
    </section>
  );
}
