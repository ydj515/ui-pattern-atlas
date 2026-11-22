import { useState } from "react";

import { RadioGroup } from "@/shared/ui/patterns/radio-group/RadioGroup";

const PRICE = 20_000;
const OPTIONS = [
  { value: "standard", label: "일반 배송", description: "무료 · 2~3일 뒤 도착", fee: 0 },
  { value: "express", label: "빠른 배송", description: "3,000원 · 내일 도착", fee: 3_000 },
  { value: "pickup", label: "매장 픽업", description: "무료 · 오늘 픽업", fee: 0 },
] as const;

export function RadioGroupDemo() {
  const [method, setMethod] = useState<string>("standard");
  const fee = OPTIONS.find((option) => option.value === method)?.fee ?? 0;

  return (
    <div className="w-full max-w-xs space-y-3">
      <RadioGroup legend="배송 방법" options={OPTIONS} value={method} onChange={setMethod} />
      <p className="text-right text-sm font-semibold text-slate-900">
        결제 금액 {(PRICE + fee).toLocaleString("ko-KR")}원
      </p>
    </div>
  );
}
