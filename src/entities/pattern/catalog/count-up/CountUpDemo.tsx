import { useState } from "react";
import { CountUp } from "@/shared/ui/patterns/count-up/CountUp";

const won = (unit: string) => (value: number) =>
  `${Math.round(value).toLocaleString("ko-KR")}${unit}`;
const STATS = [
  { label: "누적 가입자", to: 128400, format: won("명") },
  { label: "이번 달 주문", to: 3250, format: won("건") },
  { label: "재구매율", to: 42, format: won("%") },
];

export function CountUpDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="w-full max-w-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">이번 달 성과</h2>
      <dl key={run} className="grid grid-cols-3 gap-2">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3">
            <dt className="text-xs text-slate-600">{stat.label}</dt>
            <dd className="mt-1 text-lg font-bold text-slate-900">
              <CountUp to={stat.to} format={stat.format} />
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-3">
        <button
          type="button"
          onClick={() => setRun((value) => value + 1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          다시 보기
        </button>
      </div>
    </section>
  );
}
