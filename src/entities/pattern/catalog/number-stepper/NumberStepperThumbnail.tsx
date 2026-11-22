import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TOTALS = ["12,000", "24,000", "36,000", "48,000", "60,000"] as const;

/** Same flow as NumberStepperDemo: + four times → the total follows → stops at 5 with a note. */
export function NumberStepperThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[14px] left-[40px] text-[7px] font-medium">수량</p>
      <div className="absolute top-[25px] left-[40px] h-[20px] w-[66px] overflow-hidden rounded border border-slate-300 text-[9px]">
        <span className="absolute top-0 left-0 grid h-full w-[20px] place-items-center text-slate-700">
          −
        </span>
        <span className="thumb-anim thumb-ns-v1 absolute top-0 left-0 grid h-full w-[20px] place-items-center bg-white text-slate-300 opacity-0">
          −
        </span>
        <span className="absolute top-0 left-[20px] h-full w-[26px] border-x border-slate-200" />
        <span className="absolute top-0 left-[46px] grid h-full w-[20px] place-items-center text-slate-700">
          +
        </span>
        <span className="thumb-anim thumb-ns-v5 absolute top-0 left-[46px] grid h-full w-[20px] place-items-center bg-white text-slate-300">
          +
        </span>
        {TOTALS.map((_, index) => (
          <span
            key={index}
            className={`thumb-anim thumb-ns-v${index + 1} absolute top-0 left-[20px] grid h-full w-[26px] place-items-center text-[8px] font-semibold ${index === 4 ? "" : "opacity-0"}`}
          >
            {index + 1}
          </span>
        ))}
      </div>
      {TOTALS.map((total, index) => (
        <p
          key={total}
          className={`thumb-anim thumb-ns-v${index + 1} absolute top-[52px] left-[40px] text-[7.5px] font-semibold ${index === 4 ? "" : "opacity-0"}`}
        >
          합계 {total}원
        </p>
      ))}
      <p className="thumb-anim thumb-ns-v5 absolute top-[64px] left-[40px] text-[6px] text-amber-700">
        최대 5개까지 살 수 있어요
      </p>
      <ThumbCursor motion="thumb-ns-cursor" />
    </ThumbStage>
  );
}
