import { useState } from "react";
import { FreeShippingProgress } from "@/shared/ui/patterns/free-shipping-progress/FreeShippingProgress";

const ITEMS = [
  { name: "수세미", price: 5000 },
  { name: "행주", price: 12000 },
];
const LABELS = {
  left: (amount: string) => `${amount} 더 담으면 무료배송`,
  done: "무료배송이에요",
  bar: "무료배송까지",
};

export function FreeShippingProgressDemo() {
  const [total, setTotal] = useState(22000);
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="flex justify-between text-sm">
        <span className="text-slate-600">장바구니</span>
        <b className="text-slate-900 tabular-nums">{total.toLocaleString("ko-KR")}원</b>
      </p>
      <FreeShippingProgress total={total} threshold={30000} labels={LABELS} />
      <ul className="grid gap-1 text-sm">
        {ITEMS.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            {item.name} {item.price.toLocaleString("ko-KR")}원
            <button
              type="button"
              onClick={() => setTotal((value) => value + item.price)}
              className="rounded-md border border-slate-200 px-2 py-1 text-xs"
            >
              담기
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setTotal(22000)}
        className="justify-self-start text-xs text-slate-500 underline"
      >
        처음부터
      </button>
    </section>
  );
}
