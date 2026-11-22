import { useState } from "react";

import { NumberStepper } from "@/shared/ui/patterns/number-stepper/NumberStepper";

const PRICE = 12_000;
const MAX = 5;

export function NumberStepperDemo() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-xs space-y-3">
      <NumberStepper
        label="수량"
        decreaseLabel="줄이기"
        increaseLabel="늘리기"
        min={1}
        max={MAX}
        value={quantity}
        onChange={setQuantity}
      />
      <p className="text-sm font-semibold text-slate-900">
        합계 {(PRICE * quantity).toLocaleString("ko-KR")}원
      </p>
      <p role="status" className="min-h-4 text-xs text-amber-700">
        {quantity === MAX ? `최대 ${MAX}개까지 살 수 있어요` : ""}
      </p>
    </div>
  );
}
