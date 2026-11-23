import { useState } from "react";
import { BarChart } from "@/shared/ui/patterns/bar-chart/BarChart";

const WEEKS = {
  this: { label: "이번 주", values: [42, 38, 51, 47, 64] },
  last: { label: "지난주", values: [35, 40, 44, 39, 52] },
};
const DAYS = ["월", "화", "수", "목", "금"];

export function BarChartDemo() {
  const [week, setWeek] = useState<keyof typeof WEEKS>("this");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기간</legend>
        {(Object.keys(WEEKS) as (keyof typeof WEEKS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="bar-week"
              className="sr-only"
              checked={week === id}
              onChange={() => setWeek(id)}
            />
            {WEEKS[id].label}
          </label>
        ))}
      </fieldset>
      <BarChart
        title="요일별 주문 수"
        data={DAYS.map((label, index) => ({ label, value: WEEKS[week].values[index] ?? 0 }))}
        format={(value) => `${value}건`}
        max={70}
      />
    </section>
  );
}
