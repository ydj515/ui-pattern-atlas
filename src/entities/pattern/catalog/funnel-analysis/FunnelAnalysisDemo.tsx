import { useState } from "react";

const STEPS = ["상품 보기", "장바구니", "주문서", "결제 완료"];
const SEGMENTS = {
  all: { label: "전체", counts: [10000, 3200, 1900, 1400] },
  mobile: { label: "모바일", counts: [6000, 2700, 900, 640] },
};

export function FunnelAnalysisDemo() {
  const [segment, setSegment] = useState<keyof typeof SEGMENTS>("all");
  const counts = SEGMENTS[segment].counts;
  const first = counts[0] ?? 1;
  const drops = counts.slice(1).map((count, index) => 1 - count / (counts[index] ?? 1));
  const worst = drops.indexOf(Math.max(...drops));
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">사용자 묶음</legend>
        {(Object.keys(SEGMENTS) as (keyof typeof SEGMENTS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="funnel-segment"
              className="sr-only"
              checked={segment === id}
              onChange={() => setSegment(id)}
            />
            {SEGMENTS[id].label}
          </label>
        ))}
      </fieldset>
      <ol className="grid gap-1 text-sm">
        {STEPS.map((step, index) => {
          const count = counts[index] ?? 0;
          return (
            <li key={step} className="grid gap-1">
              {index > 0 ? (
                <span
                  className={`text-xs ${index - 1 === worst ? "font-semibold text-rose-700" : "text-slate-500"}`}
                >
                  ↓ 다음 단계로 {Math.round((1 - (drops[index - 1] ?? 0)) * 100)}%
                </span>
              ) : null}
              <span className="flex justify-between text-slate-800">
                {step}
                <b className="tabular-nums">{count.toLocaleString("ko-KR")}명</b>
              </span>
              <span aria-hidden="true" className="h-2 rounded-full bg-slate-100">
                <span
                  className="block h-full rounded-full bg-blue-600 transition-[width] duration-500 motion-reduce:transition-none"
                  style={{ width: `${(count / first) * 100}%` }}
                />
              </span>
            </li>
          );
        })}
      </ol>
      <p role="status" className="text-xs text-slate-600">
        가장 많이 빠지는 곳: {STEPS[worst]} → {STEPS[worst + 1]} (
        {Math.round((drops[worst] ?? 0) * 100)}% 이탈)
      </p>
    </section>
  );
}
