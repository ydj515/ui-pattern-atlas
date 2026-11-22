import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COLORS = ["bg-rose-500", "bg-amber-500", "bg-emerald-500", "bg-blue-500", "bg-violet-500"];

/** Same goal card as ConfettiDemo: 오늘 걷기 기록 → 30/30일 → a burst of paper → 목표를 달성했어요. */
export function ConfettiThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="text-[8px] font-bold">30일 걷기</p>
        <p className="mt-[2px] grid text-slate-600 tabular-nums">
          <span
            className="thumb-anim thumb-cf-before col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            29/30일
          </span>
          <span className="thumb-anim thumb-cf-after col-start-1 row-start-1">30/30일</span>
        </p>
        <span className="mt-[3px] block h-[4px] overflow-hidden rounded-full bg-slate-100">
          <span className="thumb-anim thumb-cf-fill block h-full origin-left bg-emerald-500" />
        </span>
        <p className="thumb-anim thumb-cf-after mt-[6px] font-semibold text-emerald-700">
          목표를 달성했어요
        </p>
        <span className="absolute inset-x-[8px] bottom-[8px] grid h-[13px] rounded bg-slate-900 font-semibold text-white">
          <span
            className="thumb-anim thumb-cf-before col-start-1 row-start-1 place-self-center"
            style={{ opacity: 0 }}
          >
            오늘 걷기 기록
          </span>
          <span className="thumb-anim thumb-cf-after col-start-1 row-start-1 place-self-center">
            처음부터
          </span>
        </span>
        {Array.from({ length: 10 }, (_, index) => (
          <span
            key={index}
            className={`thumb-anim thumb-cf-p${index} absolute top-[46px] left-[57px] h-[5px] w-[3px] rounded-[1px] ${COLORS[index % COLORS.length]}`}
            style={{ opacity: 0 }}
          />
        ))}
      </div>
      <ThumbCursor motion="thumb-cf-cursor" />
    </ThumbStage>
  );
}
