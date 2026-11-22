import { useState } from "react";
import {
  PricingPlanComparison,
  type PricingPlan,
} from "@/shared/ui/patterns/pricing-plan-comparison/PricingPlanComparison";

export const PLANS: readonly PricingPlan[] = [
  { id: "basic", name: "베이직", price: "5,900원", cadence: "매월", benefits: ["광고 없음"] },
  {
    id: "standard",
    name: "스탠다드",
    price: "9,900원",
    cadence: "매월",
    benefits: ["광고 없음", "고화질"],
    recommended: true,
  },
  {
    id: "premium",
    name: "프리미엄",
    price: "19,900원",
    cadence: "매월",
    benefits: ["광고 없음", "고화질", "동시 접속 4명"],
  },
];

export function PricingPlanComparisonDemo() {
  const [selectedId, setSelectedId] = useState<string>();
  return (
    <div className="w-full max-w-md">
      <PricingPlanComparison
        plans={PLANS}
        selectedId={selectedId}
        onSelect={setSelectedId}
        label="요금제 선택"
        recommendedLabel="추천"
      />
      <p role="status" className="mt-3 min-h-5 text-sm text-slate-700">
        {selectedId
          ? PLANS.find((plan) => plan.id === selectedId)?.name + " 선택"
          : "아직 선택하지 않았어요"}
      </p>
    </div>
  );
}
