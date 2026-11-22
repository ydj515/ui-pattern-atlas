import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SUBSCRIPTIONS = [
  { id: "digital", name: "디지털", price: "8,900원", cadence: "매월", benefits: ["온라인 기사"] },
  { id: "print", name: "종이", price: "12,900원", cadence: "매월", benefits: ["종이 잡지"] },
  {
    id: "combined",
    name: "종이와 디지털",
    price: "12,900원",
    cadence: "매월",
    benefits: ["온라인 기사", "종이 잡지"],
  },
] as const;

export function DecoyEffectThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[9px] text-slate-700">
        <span>□</span>
        <span className="thumb-anim thumb-price-picked absolute left-0 bg-white text-blue-700">
          ✓
        </span>{" "}
        종이 전용 옵션 추가
      </p>
      <div className="absolute inset-x-[7px] top-[28px] grid grid-cols-3 items-stretch gap-1">
        {SUBSCRIPTIONS.map((plan) => (
          <div
            key={plan.id}
            className={
              plan.id === "print"
                ? "thumb-anim thumb-price-picked rounded border border-blue-700 p-[3px] text-[7px]"
                : "rounded border border-slate-200 p-[3px] text-[7px]"
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
          </div>
        ))}
      </div>
      <p className="thumb-anim thumb-price-before absolute inset-x-2 bottom-2">
        가격과 포함 혜택을 비교해 보세요
      </p>
      <p className="thumb-anim thumb-price-picked absolute inset-x-2 bottom-2 text-blue-700">
        같은 가격에 포함 혜택이 달라요
      </p>
      <ThumbCursor motion="thumb-decoy-cursor" />
    </ThumbStage>
  );
}
