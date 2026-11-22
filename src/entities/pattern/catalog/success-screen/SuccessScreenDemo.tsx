import { useState } from "react";
import { SuccessScreen } from "@/shared/ui/patterns/success-screen/SuccessScreen";

export function SuccessScreenDemo() {
  const [paid, setPaid] = useState(false);
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      {paid ? (
        <SuccessScreen
          title="결제를 마쳤어요"
          details={[
            { label: "주문 번호", value: "2481" },
            { label: "결제 금액", value: "39,000원" },
            { label: "도착 예정", value: "11월 25일 (수)" },
          ]}
          primary={
            <button
              type="button"
              className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
            >
              주문 내역 보기
            </button>
          }
          secondary={
            <button
              type="button"
              onClick={() => setPaid(false)}
              className="rounded-lg py-2 text-sm text-slate-600 hover:bg-slate-100"
            >
              쇼핑 계속하기
            </button>
          }
        />
      ) : (
        <div className="grid gap-4">
          <h3 className="text-base font-bold text-slate-900">주문서</h3>
          <p className="flex justify-between text-sm text-slate-700">
            <span>린넨 셔츠</span>
            <span>39,000원</span>
          </p>
          <button
            type="button"
            onClick={() => setPaid(true)}
            className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
          >
            39,000원 결제하기
          </button>
        </div>
      )}
    </section>
  );
}
