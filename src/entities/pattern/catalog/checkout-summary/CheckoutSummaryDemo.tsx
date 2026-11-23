import { useState } from "react";
import { CheckoutSummary } from "@/shared/ui/patterns/checkout-summary/CheckoutSummary";

export function CheckoutSummaryDemo() {
  const [coupon, setCoupon] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={coupon}
          onChange={(event) => setCoupon(event.target.checked)}
        />
        5,000원 쿠폰 쓰기
      </label>
      <CheckoutSummary
        lines={[
          { label: "상품 금액", amount: 92000 },
          { label: "배송비", amount: 0 },
          ...(coupon ? [{ label: "쿠폰 할인", amount: -5000 }] : []),
        ]}
        onPay={(total) => setMessage(`${total.toLocaleString("ko-KR")}원 결제를 진행해요`)}
        labels={{
          title: "결제 금액",
          total: "최종 결제 금액",
          consent: "주문 내용을 확인했고 결제에 동의해요(필수)",
          pay: (total) => `${total} 결제하기`,
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
