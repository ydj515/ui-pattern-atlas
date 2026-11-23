import { useState } from "react";
import { AreaChart } from "@/shared/ui/patterns/area-chart/AreaChart";

const PERIODS = {
  week: { label: "7일", values: [820, 900, 760, 1100, 1240, 980, 1320] },
  twoWeeks: {
    label: "14일",
    values: [640, 700, 680, 760, 720, 810, 790, 820, 900, 760, 1100, 1240, 980, 1320],
  },
};

export function AreaChartDemo() {
  const [period, setPeriod] = useState<keyof typeof PERIODS>("week");
  const values = PERIODS[period].values;
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
              name="area-period"
              className="sr-only"
              checked={period === id}
              onChange={() => setPeriod(id)}
            />
            {PERIODS[id].label}
          </label>
        ))}
      </fieldset>
      <AreaChart
        key={period}
        title="일별 방문자"
        labels={values.map((_, index) => `${index + 1}일`)}
        values={values}
        format={(value) => value.toLocaleString("ko-KR")}
        tableLabel="표로 보기"
      />
    </section>
  );
}
