import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PLAN_OPTIONS = [
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
] as const;

export function CompromiseEffectThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-x-2 top-[7px] flex gap-4 text-slate-700">
        <span className="relative">
          <span>□</span>
          <span className="thumb-anim thumb-compromise-third absolute left-0 bg-white text-blue-700">
            ✓
          </span>{" "}
          상위 옵션 추가
        </span>
        <span className="relative">
          <span>□</span>
          <span className="thumb-anim thumb-compromise-label absolute left-0 bg-white text-blue-700">
            ✓
          </span>{" "}
          추천 표시
        </span>
      </div>
      <div className="absolute inset-x-[7px] top-[28px] grid grid-cols-3 items-stretch gap-1">
        {PLAN_OPTIONS.map((plan) => (
          <div
            key={plan.id}
            className={
              plan.id === "premium"
                ? "thumb-anim thumb-compromise-third rounded border border-slate-200 p-[3px] text-[7px]"
                : "relative rounded border border-slate-200 p-[3px] text-[7px]"
            }
          >
            <p className="font-semibold">{plan.name}</p>
            <p>
              {plan.price} <span className="text-[6px]">{plan.cadence}</span>
            </p>
            {plan.benefits.map((benefit) => (
              <p key={benefit} className="text-[6px]">
                {benefit}
              </p>
            ))}
            {plan.id === "standard" && (
              <p className="thumb-anim thumb-compromise-label text-blue-700">추천</p>
            )}
          </div>
        ))}
      </div>
      <p className="thumb-anim thumb-compromise-before absolute inset-x-2 bottom-2">
        스탠다드가 가장 높은 옵션이에요
      </p>
      <p className="thumb-anim thumb-compromise-third absolute inset-x-2 bottom-2 text-blue-700">
        스탠다드가 중간 옵션이 됐어요
      </p>
      <ThumbCursor motion="thumb-compromise-cursor" />
    </ThumbStage>
  );
}
