import { useState } from "react";
import { ColumnChart } from "@/shared/ui/patterns/column-chart/ColumnChart";

const HALVES = {
  first: {
    label: "상반기",
    months: ["1월", "2월", "3월", "4월", "5월", "6월"],
    values: [120, 150, 180, 160, 210, 240],
  },
  second: {
    label: "하반기",
    months: ["7월", "8월", "9월", "10월", "11월", "12월"],
    values: [230, 260, 220, 280, 310, 350],
  },
};

export function ColumnChartDemo() {
  const [half, setHalf] = useState<keyof typeof HALVES>("first");
  const current = HALVES[half];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기간</legend>
        {(Object.keys(HALVES) as (keyof typeof HALVES)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="column-half"
              className="sr-only"
              checked={half === id}
              onChange={() => setHalf(id)}
            />
            {HALVES[id].label}
          </label>
        ))}
      </fieldset>
      <ColumnChart
        title="월별 신규 가입"
        data={current.months.map((label, index) => ({ label, value: current.values[index] ?? 0 }))}
        format={(value) => `${value}명`}
        max={400}
        tableLabel="표로 보기"
      />
    </section>
  );
}
