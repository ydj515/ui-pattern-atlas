import { useState } from "react";
import { Sparkline } from "@/shared/ui/patterns/sparkline/Sparkline";

const PERIODS = {
  week: {
    label: "7일",
    pages: [
      { name: "홈", values: [120, 135, 128, 150, 162, 158, 180] },
      { name: "검색", values: [80, 76, 90, 85, 70, 66, 60] },
      { name: "장바구니", values: [30, 32, 31, 35, 33, 36, 38] },
    ],
  },
  month: {
    label: "30일",
    pages: [
      { name: "홈", values: [90, 100, 96, 110, 120, 118, 130, 140, 150, 180] },
      { name: "검색", values: [60, 64, 70, 78, 82, 90, 88, 80, 70, 60] },
      { name: "장바구니", values: [40, 38, 36, 35, 34, 33, 35, 36, 37, 38] },
    ],
  },
};

const change = (values: readonly number[]) => {
  const first = values[0] ?? 0;
  const last = values.at(-1) ?? 0;
  return Math.round(((last - first) / (first || 1)) * 100);
};

export function SparklineDemo() {
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
              name="spark-period"
              className="sr-only"
              checked={period === id}
              onChange={() => setPeriod(id)}
            />
            {PERIODS[id].label}
          </label>
        ))}
      </fieldset>
      <table className="text-sm">
        <caption className="text-left text-sm font-semibold text-slate-900">페이지별 방문</caption>
        <tbody>
          {current.pages.map((page) => {
            const delta = change(page.values);
            return (
              <tr key={page.name} className="border-t border-slate-100">
                <th scope="row" className="py-2 text-left font-normal text-slate-700">
                  {page.name}
                </th>
                <td>
                  <Sparkline
                    values={page.values}
                    label={`최근 ${current.label} ${page.name} 방문 추이, ${page.values[0]}에서 ${page.values.at(-1)}까지`}
                  />
                </td>
                <td className="text-right font-semibold text-slate-900 tabular-nums">
                  {page.values.at(-1)}
                </td>
                <td className="w-12 text-right text-xs text-slate-500 tabular-nums">
                  {delta > 0 ? "+" : ""}
                  {delta}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
