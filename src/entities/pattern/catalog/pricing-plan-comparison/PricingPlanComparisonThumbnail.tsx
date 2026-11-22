import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

const PLANS = [
  {
    id: "basic",
    name: "베이직",
    price: "5,900원",
    cadence: "매월",
    benefits: ["광고 없음"],
    recommended: false,
  },
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
    recommended: false,
  },
] as const;

export function PricingPlanComparisonThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[8px] left-[7px] font-semibold">요금제 선택</span>
      <div className="absolute inset-x-[7px] top-[25px] grid grid-cols-3 items-stretch gap-[4px]">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className="relative rounded border border-slate-200 bg-white p-[3px] text-[7px] text-slate-800"
          >
            {plan.recommended ? (
              <span className="thumb-anim thumb-price-picked absolute -inset-px rounded border-2 border-blue-700" />
            ) : null}
            <p className="font-semibold">{plan.name}</p>
            <p>
              {plan.price} <span className="text-[6px] text-slate-600">{plan.cadence}</span>
            </p>
            {plan.benefits.map((benefit) => (
              <p key={benefit} className="text-[6px]">
                {benefit}
              </p>
            ))}
            {plan.recommended ? <p className="font-medium text-blue-700">추천</p> : null}
          </div>
        ))}
      </div>
      <p className="thumb-anim thumb-price-before absolute inset-x-[7px] bottom-[7px] text-slate-700">
        아직 선택하지 않았어요
      </p>
      <p className="thumb-anim thumb-price-picked absolute inset-x-[7px] bottom-[7px] text-blue-700">
        스탠다드 선택
      </p>
      <ThumbCursor motion="thumb-price-cursor" />
    </ThumbStage>
  );
}
