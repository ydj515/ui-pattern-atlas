import { useState } from "react";
import { DiscountBadge } from "@/shared/ui/patterns/discount-badge/DiscountBadge";

export function DiscountBadgeDemo() {
  const [coupon, setCoupon] = useState(false);
  const price = coupon ? 19500 : 29000;
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">무선 이어폰</h3>
      <DiscountBadge
        referencePrice={39000}
        price={price}
        referenceLabel="최근 30일 판매가"
        labels={{
          basis: (reference) => `${reference} 기준`,
          spoken: (reference, percent) => `${reference}보다 ${percent}% 낮은 가격`,
        }}
      />
      <p aria-live="polite" className="text-2xl font-bold text-slate-900 tabular-nums">
        {price.toLocaleString("ko-KR")}원
      </p>
      <button
        type="button"
        aria-pressed={coupon}
        onClick={() => setCoupon((value) => !value)}
        className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
      >
        {coupon ? "쿠폰 적용 취소" : "쿠폰 적용"}
      </button>
    </section>
  );
}
