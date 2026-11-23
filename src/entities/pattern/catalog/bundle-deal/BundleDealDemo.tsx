import { useState } from "react";
import { BundleDeal } from "@/shared/ui/patterns/bundle-deal/BundleDeal";

export function BundleDealDemo() {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">주방 행주</h3>
      <p className="text-sm text-slate-600">1개 12,000원 · 2개부터 10% 할인</p>
      <BundleDeal
        unitPrice={12000}
        threshold={2}
        rate={0.1}
        quantity={quantity}
        onQuantityChange={setQuantity}
        labels={{
          applied: (percent) => `묶음 ${percent}% 할인 적용`,
          left: (count, percent) => `${count}개 더 담으면 ${percent}% 할인`,
        }}
      />
    </section>
  );
}
