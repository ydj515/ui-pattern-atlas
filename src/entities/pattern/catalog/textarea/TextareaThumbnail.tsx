import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LINES = ["배송이 빨랐어요.", "포장도 꼼꼼했어요.", "다음에도 살게요."] as const;
const COUNTS = [9, 20, 30] as const;

/** Same text as TextareaDemo: each new line grows the box and the counter goes up. */
export function TextareaThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[6px] left-[24px] text-[7px] font-medium">후기</p>

      <div className="thumb-anim thumb-ta-s0 absolute top-[16px] left-[24px] w-[128px] opacity-0">
        <p className="h-[18px] rounded border border-slate-300 px-[6px] text-[6.5px] leading-[16px] text-slate-400">
          어떤 점이 좋았나요?
        </p>
        <p className="mt-[3px] text-right text-[5.5px] text-slate-500">0/100</p>
      </div>
      {COUNTS.map((count, index) => (
        <div
          key={count}
          className={`thumb-anim thumb-ta-s${index + 1} absolute top-[16px] left-[24px] w-[128px] ${index === 2 ? "" : "opacity-0"}`}
        >
          <div className="rounded border border-slate-300 px-[6px] py-[4px] text-[6.5px] leading-[9px]">
            {LINES.slice(0, index + 1).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-[3px] text-right text-[5.5px] text-slate-500">{count}/100</p>
        </div>
      ))}
      <ThumbCursor motion="thumb-ta-cursor" />
    </ThumbStage>
  );
}
