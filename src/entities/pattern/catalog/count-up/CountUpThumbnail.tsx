import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STATS = [
  ["누적 가입자", ["0명", "61,200명", "113,900명", "128,400명"]],
  ["이번 달 주문", ["0건", "1,550건", "2,880건", "3,250건"]],
  ["재구매율", ["0%", "20%", "37%", "42%"]],
] as const;

/** Same stats as CountUpDemo: the numbers run up and slow down as they land; 다시 보기 replays. */
export function CountUpThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[6px] left-[10px] font-semibold">이번 달 성과</p>
      {STATS.map(([label, frames], index) => (
        <div
          key={label}
          className="absolute top-[20px] h-[40px] w-[50px] rounded-md border border-slate-200 p-[4px]"
          style={{ left: 10 + index * 54 }}
        >
          <p className="text-[5.5px] text-slate-600">{label}</p>
          <p className="relative mt-[6px] text-[7.5px] font-bold tabular-nums">
            {frames.map((frame, step) => (
              <span
                key={frame}
                className={`thumb-anim thumb-cu-f${step} absolute left-0 whitespace-nowrap`}
                style={step === 3 ? undefined : { opacity: 0 }}
              >
                {frame}
              </span>
            ))}
          </p>
        </div>
      ))}
      <span className="absolute top-[68px] left-[10px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-cu-cursor" />
    </ThumbStage>
  );
}
