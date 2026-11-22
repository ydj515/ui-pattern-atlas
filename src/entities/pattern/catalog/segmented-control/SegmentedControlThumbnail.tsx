import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

// Segment centres are x = 50, 88, 126 (keyframes rely on this).
const SEGMENTS = ["일간", "주간", "월간"] as const;
const VALUES = [
  { value: "184,500원", motion: "thumb-segment-week" },
  { value: "742,300원", motion: "thumb-segment-month" },
  { value: "32,000원", motion: "thumb-segment-day" },
] as const;

/** Same control as SegmentedControlDemo: 월간 → 일간 → 주간, and the total follows. */
export function SegmentedControlThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[22px] left-[28px] h-[24px] w-[120px] rounded-lg bg-slate-100" />
      <div className="thumb-anim thumb-segment-pill absolute top-[25px] left-[31px] h-[18px] w-[38px] rounded-md bg-white shadow-sm" />
      {SEGMENTS.map((segment, index) => (
        <span
          key={segment}
          className="absolute top-[25px] grid h-[18px] w-[38px] place-items-center font-medium"
          style={{ left: 31 + index * 38 }}
        >
          {segment}
        </span>
      ))}

      <p className="absolute top-[66px] left-[38px] text-slate-600">지출 합계</p>
      {VALUES.map(({ value, motion }) => (
        <strong
          key={value}
          className={`thumb-anim ${motion} absolute top-[62px] left-[78px] text-[12px] font-semibold`}
        >
          {value}
        </strong>
      ))}
      <ThumbCursor motion="thumb-segment-cursor" />
    </ThumbStage>
  );
}
