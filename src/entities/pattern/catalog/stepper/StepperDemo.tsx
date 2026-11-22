import { useState } from "react";

import { Stepper } from "@/shared/ui/patterns/stepper/Stepper";

const STEPS = ["장바구니", "배송", "결제", "완료"] as const;
const GUIDE = [
  "담은 상품을 확인해요",
  "받는 곳을 입력해요",
  "결제 수단을 골라요",
  "주문을 마쳤어요",
] as const;

export function StepperDemo() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-full max-w-sm space-y-5 rounded-xl border border-slate-200 bg-white p-5">
      <Stepper label="주문 단계" doneLabel="완료" steps={STEPS} current={current} />
      <p className="text-center text-sm text-slate-700">{GUIDE[current]}</p>
      <div className="flex justify-between">
        <button
          type="button"
          disabled={current === 0}
          onClick={() => setCurrent((value) => value - 1)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
        >
          이전
        </button>
        <button
          type="button"
          disabled={current === STEPS.length - 1}
          onClick={() => setCurrent((value) => value + 1)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-40"
        >
          다음
        </button>
      </div>
    </div>
  );
}
