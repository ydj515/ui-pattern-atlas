import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  { value: "30,000원", count: 3, motion: "thumb-sl-v1" },
  { value: "50,000원", count: 5, motion: "thumb-sl-v2" },
  { value: "70,000원", count: 8, motion: "thumb-sl-v3" },
] as const;

/** Same flow as SliderDemo: drag 최대 가격 from 30,000원 to 70,000원 → more products match. */
export function SliderThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[22px] left-[24px] text-[7px] font-medium">최대 가격</p>
      {STEPS.map((step) => (
        <div
          key={step.motion}
          className={`thumb-anim ${step.motion} ${step.count === 8 ? "" : "opacity-0"}`}
        >
          <p className="absolute top-[22px] right-[24px] text-[7px] font-semibold tabular-nums">
            {step.value}
          </p>
          <p className="absolute top-[54px] left-[24px] text-[6.5px] text-slate-600">
            조건에 맞는 상품 {step.count}개
          </p>
        </div>
      ))}
      <span className="absolute top-[40px] left-[24px] h-[3px] w-[128px] rounded-full bg-slate-200" />
      <span
        className="thumb-anim thumb-sl-fill absolute top-[40px] left-[24px] h-[3px] w-[128px] origin-left rounded-full bg-blue-600"
        style={{ transform: "scaleX(0.667)" }}
      />
      <span className="thumb-anim thumb-sl-thumb absolute top-[36.5px] left-[104px] size-[10px] rounded-full border-2 border-blue-600 bg-white" />
      <ThumbCursor motion="thumb-sl-cursor" />
    </ThumbStage>
  );
}
