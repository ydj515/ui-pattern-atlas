import { useState } from "react";

const CARDS = ["쿠폰함", "적립금", "배송 조회", "반품 신청", "주소 관리"];
const TOGETHER: Record<string, Record<string, number>> = {
  쿠폰함: { 적립금: 90, "주소 관리": 20, "배송 조회": 10, "반품 신청": 10 },
  적립금: { 쿠폰함: 90, "주소 관리": 20, "배송 조회": 10, "반품 신청": 0 },
  "배송 조회": { "반품 신청": 80, "주소 관리": 40, 쿠폰함: 10, 적립금: 10 },
  "반품 신청": { "배송 조회": 80, "주소 관리": 30, 쿠폰함: 10, 적립금: 0 },
  "주소 관리": { "배송 조회": 40, "반품 신청": 30, 쿠폰함: 20, 적립금: 20 },
};

export function CardSortingDemo() {
  const [card, setCard] = useState("쿠폰함");
  const pairs = Object.entries(TOGETHER[card] ?? {}).sort((a, b) => b[1] - a[1]);
  const [top] = pairs;
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">참가자 10명의 카드 묶음</h3>
      <div className="flex flex-wrap gap-1.5">
        {CARDS.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={card === name}
            onClick={() => setCard(name)}
            className="rounded-md border border-slate-300 px-2.5 py-1 text-sm text-slate-700 shadow-sm aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {name}
          </button>
        ))}
      </div>
      <ul className="grid gap-1.5 text-xs">
        {pairs.map(([name, percent]) => (
          <li key={name} className="grid grid-cols-[4rem_1fr_2.5rem] items-center gap-2">
            <span className="text-slate-700">{name}</span>
            <span aria-hidden="true" className="h-2 rounded-full bg-slate-100">
              <span
                className="block h-full rounded-full bg-blue-600"
                style={{ width: `${percent}%` }}
              />
            </span>
            <span className="text-right text-slate-900 tabular-nums">{percent}%</span>
          </li>
        ))}
      </ul>
      <p role="status" className="text-xs text-slate-600">
        {top ? `${card} 카드와 가장 자주 함께 묶인 카드: ${top[0]} (${top[1]}%)` : ""}
      </p>
    </section>
  );
}
