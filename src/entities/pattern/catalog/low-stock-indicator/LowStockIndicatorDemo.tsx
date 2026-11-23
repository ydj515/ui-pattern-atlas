import { useState } from "react";
import { LowStockIndicator } from "@/shared/ui/patterns/low-stock-indicator/LowStockIndicator";

const SIZES = [
  { size: "S", stock: 12 },
  { size: "M", stock: 3 },
  { size: "L", stock: 0 },
];
const LABELS = {
  soldOut: "품절",
  inStock: "재고 있음",
  left: (count: number) => `남은 수량 ${count}개`,
};

export function LowStockIndicatorDemo() {
  const [size, setSize] = useState("S");
  const stock = SIZES.find((item) => item.size === size)?.stock ?? 0;
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">린넨 셔츠</h3>
      <fieldset className="flex gap-1">
        <legend className="mb-1 text-xs text-slate-600">사이즈</legend>
        {SIZES.map((item) => (
          <label
            key={item.size}
            className="grid size-10 cursor-pointer place-items-center rounded-lg border border-slate-300 text-sm has-checked:border-slate-900 has-checked:font-semibold"
          >
            <input
              type="radio"
              name="stock-size"
              className="sr-only"
              checked={size === item.size}
              onChange={() => setSize(item.size)}
            />
            {item.size}
          </label>
        ))}
      </fieldset>
      <LowStockIndicator stock={stock} lowAt={5} labels={LABELS} />
      <button
        type="button"
        className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {stock > 0 ? "장바구니 담기" : "재입고 알림 받기"}
      </button>
    </section>
  );
}
