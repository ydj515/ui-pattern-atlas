import { useState } from "react";
import { StackedBarChart } from "@/shared/ui/patterns/stacked-bar-chart/StackedBarChart";

const SERIES = [
  { key: "done", label: "해결" },
  { key: "doing", label: "진행 중" },
  { key: "waiting", label: "대기" },
];
const ROWS = [
  { label: "9월", values: { done: 32, doing: 10, waiting: 8 } },
  { label: "10월", values: { done: 41, doing: 12, waiting: 5 } },
  { label: "11월", values: { done: 26, doing: 14, waiting: 12 } },
];
const MODES = { count: "개수", percent: "비율" } as const;

export function StackedBarChartDemo() {
  const [mode, setMode] = useState<keyof typeof MODES>("count");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">보기</legend>
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="stack-mode"
              className="sr-only"
              checked={mode === id}
              onChange={() => setMode(id)}
            />
            {MODES[id]}
          </label>
        ))}
      </fieldset>
      <StackedBarChart
        title="월별 문의 처리"
        series={SERIES}
        rows={ROWS}
        mode={mode}
        format={(value) => `${value}건`}
        tableLabel="표로 보기"
      />
    </section>
  );
}
