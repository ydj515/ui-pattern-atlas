import { useState } from "react";
import {
  PricingPlanComparison,
  type PricingPlan,
} from "@/shared/ui/patterns/pricing-plan-comparison/PricingPlanComparison";

export const PLAN_OPTIONS: readonly PricingPlan[] = [
  { id: "basic", name: "베이직", price: "5,900원", cadence: "매월", benefits: ["광고 없음"] },
  {
    id: "standard",
    name: "스탠다드",
    price: "9,900원",
    cadence: "매월",
    benefits: ["광고 없음", "고화질"],
  },
  {
    id: "premium",
    name: "프리미엄",
    price: "19,900원",
    cadence: "매월",
    benefits: ["광고 없음", "고화질", "동시 접속 4명"],
  },
];

export function CompromiseEffectDemo() {
  const [showPremium, setShowPremium] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();
  const plans = PLAN_OPTIONS.filter((plan) => showPremium || plan.id !== "premium").map((plan) => ({
    ...plan,
    recommended: recommended && plan.id === "standard",
  }));

  return (
    <div className="w-full max-w-md">
      <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-800">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showPremium}
            onChange={(event) => {
              setShowPremium(event.currentTarget.checked);
              if (!event.currentTarget.checked && selectedId === "premium")
                setSelectedId(undefined);
            }}
          />
          상위 옵션 추가
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={recommended}
            onChange={(event) => setRecommended(event.currentTarget.checked)}
          />
          추천 표시
        </label>
      </div>
      <PricingPlanComparison plans={plans} selectedId={selectedId} onSelect={setSelectedId} />
      <p role="status" className="mt-3 text-xs text-slate-700">
        {showPremium ? "스탠다드가 중간 옵션이 됐어요" : "스탠다드가 가장 높은 옵션이에요"}
      </p>
    </div>
  );
}
