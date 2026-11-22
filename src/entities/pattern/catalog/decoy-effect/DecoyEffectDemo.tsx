import { useState } from "react";
import {
  PricingPlanComparison,
  type PricingPlan,
} from "@/shared/ui/patterns/pricing-plan-comparison/PricingPlanComparison";

export const SUBSCRIPTIONS: readonly PricingPlan[] = [
  { id: "digital", name: "디지털", price: "8,900원", cadence: "매월", benefits: ["온라인 기사"] },
  { id: "print", name: "종이", price: "12,900원", cadence: "매월", benefits: ["종이 잡지"] },
  {
    id: "combined",
    name: "종이와 디지털",
    price: "12,900원",
    cadence: "매월",
    benefits: ["온라인 기사", "종이 잡지"],
  },
];

export function DecoyEffectDemo() {
  const [includePrint, setIncludePrint] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();
  return (
    <div className="w-full max-w-md">
      <label className="mb-3 flex items-center gap-2 text-sm text-slate-800">
        <input
          type="checkbox"
          checked={includePrint}
          onChange={(event) => {
            setIncludePrint(event.currentTarget.checked);
            if (!event.currentTarget.checked && selectedId === "print") setSelectedId(undefined);
          }}
        />
        종이 전용 옵션 추가
      </label>
      <PricingPlanComparison
        plans={SUBSCRIPTIONS.filter((plan) => includePrint || plan.id !== "print")}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <p role="status" className="mt-3 text-xs text-slate-700">
        {includePrint ? "같은 가격에 포함 혜택이 달라요" : "가격과 포함 혜택을 비교해 보세요"}
      </p>
    </div>
  );
}
