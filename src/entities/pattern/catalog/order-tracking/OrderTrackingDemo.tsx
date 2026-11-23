import { useState } from "react";
import { OrderTracking } from "@/shared/ui/patterns/order-tracking/OrderTracking";

const STEPS = [
  { label: "결제 완료", time: "11월 24일 09:12" },
  { label: "상품 준비", time: "11월 24일 14:30" },
  { label: "배송 시작", time: "11월 25일 08:40" },
  { label: "배송 완료", time: "11월 26일 13:05" },
];

export function OrderTrackingDemo() {
  const [current, setCurrent] = useState(1);
  const [copied, setCopied] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <OrderTracking
        steps={STEPS}
        current={current}
        eta={current === 3 ? "11월 26일(수) 배송 완료" : "11월 26일(수) 도착 예정"}
        carrier="동네택배"
        trackingNumber="5821 3307 4410"
        copyLabel="운송장 번호 복사"
        currentLabel="지금 단계"
        onCopy={(number) => {
          void navigator.clipboard?.writeText(number).catch(() => undefined);
          setCopied(true);
        }}
      />
      <button
        type="button"
        disabled={current === STEPS.length - 1}
        onClick={() => setCurrent((value) => value + 1)}
        className="justify-self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs disabled:opacity-40"
      >
        다음 단계 보기
      </button>
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {copied ? "운송장 번호를 복사했어요" : ""}
      </p>
    </section>
  );
}
