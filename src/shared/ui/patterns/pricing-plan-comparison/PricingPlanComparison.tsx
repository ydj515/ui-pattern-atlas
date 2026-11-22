import { useId } from "react";

export interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly cadence: string;
  readonly benefits: readonly string[];
  readonly recommended?: boolean;
}

interface PricingPlanComparisonProps {
  readonly plans: readonly PricingPlan[];
  readonly selectedId?: string;
  readonly onSelect: (id: string) => void;
  readonly label?: string;
  readonly recommendedLabel?: string;
}

export function PricingPlanComparison({
  plans,
  selectedId,
  onSelect,
  label = "요금제 선택",
  recommendedLabel = "추천",
}: PricingPlanComparisonProps) {
  const group = useId();
  return (
    <fieldset className="min-w-0">
      <legend className="mb-3 text-sm font-semibold text-slate-900">{label}</legend>
      <div className="flex flex-wrap items-stretch gap-2">
        {plans.map((plan) => (
          <label
            key={plan.id}
            className={
              plan.recommended
                ? "grid min-w-20 flex-1 cursor-pointer content-start gap-2 rounded-lg border border-blue-700 bg-white p-2 text-slate-900 has-checked:ring-2 has-checked:ring-blue-700 sm:p-3"
                : "grid min-w-20 flex-1 cursor-pointer content-start gap-2 rounded-lg border border-slate-300 bg-white p-2 text-slate-900 has-checked:ring-2 has-checked:ring-blue-700 sm:p-3"
            }
          >
            <span className="flex flex-wrap items-center gap-1.5 text-xs">
              <input
                type="radio"
                name={group}
                checked={selectedId === plan.id}
                onChange={() => onSelect(plan.id)}
                className="accent-blue-700"
              />
              <strong>{plan.name}</strong>
              {plan.recommended ? (
                <span className="rounded bg-blue-50 px-1 font-medium text-blue-800">
                  {recommendedLabel}
                </span>
              ) : null}
            </span>
            <span className="text-xs text-slate-700">
              <span className="block text-sm font-semibold text-slate-900">{plan.price}</span>
              {plan.cadence}
            </span>
            <span className="grid gap-1 text-xs text-slate-700">
              {plan.benefits.map((benefit) => (
                <span key={benefit}>{benefit}</span>
              ))}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
