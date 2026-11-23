import { useState } from "react";
import { KpiCard } from "@/shared/ui/patterns/kpi-card/KpiCard";

const PERIODS = {
  week: {
    label: "이번 주",
    comparison: "지난주 대비",
    sales: { value: "1,240만 원", change: 0.12 },
    returns: { value: "2.1%", change: -0.08 },
  },
  month: {
    label: "이번 달",
    comparison: "지난달 대비",
    sales: { value: "4,870만 원", change: -0.03 },
    returns: { value: "2.4%", change: 0.05 },
  },
};

const LABELS = {
  up: (percent: string) => `${percent} 증가`,
  down: (percent: string) => `${percent} 감소`,
  same: "변동 없음",
};

export function KpiCardDemo() {
  const [period, setPeriod] = useState<keyof typeof PERIODS>("week");
  const current = PERIODS[period];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기간</legend>
        {(Object.keys(PERIODS) as (keyof typeof PERIODS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="kpi-period"
              className="sr-only"
              checked={period === id}
              onChange={() => setPeriod(id)}
            />
            {PERIODS[id].label}
          </label>
        ))}
      </fieldset>
      <div className="grid grid-cols-2 gap-2">
        <KpiCard
          label="매출"
          {...current.sales}
          comparison={current.comparison}
          changeLabels={LABELS}
        />
        <KpiCard
          label="반품률"
          {...current.returns}
          comparison={current.comparison}
          goodWhen="down"
          changeLabels={LABELS}
        />
      </div>
    </section>
  );
}
