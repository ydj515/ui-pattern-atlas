import { useState } from "react";
import { WaffleChart } from "@/shared/ui/patterns/waffle-chart/WaffleChart";

const QUESTIONS = {
  rebuy: {
    label: "재구매",
    title: "다시 구매하겠다는 응답",
    parts: [{ label: "그렇다", percent: 68 }],
  },
  delivery: {
    label: "배송 만족",
    title: "배송 만족도",
    parts: [
      { label: "만족", percent: 52 },
      { label: "보통", percent: 30 },
      { label: "불만", percent: 18 },
    ],
  },
};

export function WaffleChartDemo() {
  const [question, setQuestion] = useState<keyof typeof QUESTIONS>("rebuy");
  const current = QUESTIONS[question];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">문항</legend>
        {(Object.keys(QUESTIONS) as (keyof typeof QUESTIONS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="waffle-question"
              className="sr-only"
              checked={question === id}
              onChange={() => setQuestion(id)}
            />
            {QUESTIONS[id].label}
          </label>
        ))}
      </fieldset>
      <WaffleChart title={current.title} parts={current.parts} restLabel="나머지" />
      <p className="text-xs text-slate-500">한 칸이 응답자 1%예요</p>
    </section>
  );
}
