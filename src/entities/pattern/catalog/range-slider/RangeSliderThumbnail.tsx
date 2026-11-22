import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as RangeSliderDemo: drag the low thumb up to 5만원, then the high one down to 9만원. */
export function RangeSliderThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[22px] left-[24px] text-[7px] font-medium">가격대</p>
      {[
        { text: "3만원 – 12만원", motion: "thumb-rs-v1 opacity-0" },
        { text: "5만원 – 12만원", motion: "thumb-rs-v2 opacity-0" },
        { text: "5만원 – 9만원", motion: "thumb-rs-v3" },
      ].map((value) => (
        <p
          key={value.text}
          className={`thumb-anim ${value.motion} absolute top-[22px] right-[24px] text-[7px] font-semibold`}
        >
          {value.text}
        </p>
      ))}
      <span className="absolute top-[40px] left-[24px] h-[3px] w-[128px] rounded-full bg-slate-200" />
      <span
        className="thumb-anim thumb-rs-fill absolute top-[40px] left-[24px] h-[3px] w-[128px] origin-left rounded-full bg-blue-600"
        style={{ transform: "translateX(32px) scaleX(0.2)" }}
      />
      <span className="thumb-anim thumb-rs-low absolute top-[36.5px] left-[51px] size-[10px] rounded-full border-2 border-blue-600 bg-white" />
      <span className="thumb-anim thumb-rs-high absolute top-[36.5px] left-[76.6px] size-[10px] rounded-full border-2 border-blue-600 bg-white" />
      <ThumbCursor motion="thumb-rs-cursor" />
    </ThumbStage>
  );
}
