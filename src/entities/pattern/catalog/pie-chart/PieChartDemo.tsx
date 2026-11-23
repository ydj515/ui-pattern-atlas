import { useState } from "react";
import { PieChart } from "@/shared/ui/patterns/pie-chart/PieChart";

const METRICS = {
  visits: { label: "방문", unit: "명", values: [4500, 3000, 1500, 1000] },
  orders: { label: "구매", unit: "건", values: [550, 150, 200, 100] },
};
const SOURCES = ["검색", "SNS", "광고", "기타"];

export function PieChartDemo() {
  const [metric, setMetric] = useState<keyof typeof METRICS>("visits");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기준</legend>
        {(Object.keys(METRICS) as (keyof typeof METRICS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="pie-metric"
              className="sr-only"
              checked={metric === id}
              onChange={() => setMetric(id)}
            />
            {METRICS[id].label}
          </label>
        ))}
      </fieldset>
      <PieChart
        title="유입 경로"
        data={SOURCES.map((label, index) => ({ label, value: METRICS[metric].values[index] ?? 0 }))}
        format={(value) => `${value.toLocaleString("ko-KR")}${METRICS[metric].unit}`}
        otherLabel="기타"
      />
    </section>
  );
}
