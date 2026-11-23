import { useState } from "react";

const DAYS = {
  first: {
    label: "1일째",
    variants: [
      { name: "A 장바구니 담기", visitors: 180, rate: 3.8 },
      { name: "B 바로 구매", visitors: 180, rate: 2.9 },
    ],
    note: "표본이 작아 아직 판단할 수 없어요",
  },
  last: {
    label: "14일째",
    variants: [
      { name: "A 장바구니 담기", visitors: 5000, rate: 3.1 },
      { name: "B 바로 구매", visitors: 5000, rate: 3.6 },
    ],
    note: "정한 기간과 표본을 채운 뒤 비교해요. B가 0.5%p 높아요",
  },
};

export function AbTestDemo() {
  const [day, setDay] = useState<keyof typeof DAYS>("first");
  const current = DAYS[day];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">실험 기간</legend>
        {(Object.keys(DAYS) as (keyof typeof DAYS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="ab-day"
              className="sr-only"
              checked={day === id}
              onChange={() => setDay(id)}
            />
            {DAYS[id].label}
          </label>
        ))}
      </fieldset>
      <p className="text-xs text-slate-600">방문자를 무작위로 반씩 나눔 · 지표: 결제 완료율</p>
      <ul className="grid gap-2 text-sm">
        {current.variants.map((variant) => (
          <li key={variant.name} className="grid gap-1">
            <span className="flex justify-between text-slate-800">
              {variant.name}
              <b className="tabular-nums">{variant.rate}%</b>
            </span>
            <span aria-hidden="true" className="h-2 rounded-full bg-slate-100">
              <span
                className="block h-full rounded-full bg-blue-600"
                style={{ width: `${variant.rate * 20}%` }}
              />
            </span>
            <span className="text-xs text-slate-500 tabular-nums">
              방문자 {variant.visitors.toLocaleString("ko-KR")}명
            </span>
          </li>
        ))}
      </ul>
      <p role="status" className="text-xs text-slate-600">
        {current.note}
      </p>
    </section>
  );
}
