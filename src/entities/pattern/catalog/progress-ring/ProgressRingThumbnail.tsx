import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PERCENTS = Array.from({ length: 11 }, (_, index) => index * 10);
const STATUS = [
  { text: "사진 120장", motion: "thumb-ring-idle" },
  { text: "사진 120장 백업 중", motion: "thumb-ring-busy" },
  { text: "백업 완료", motion: "thumb-ring-done" },
] as const;

const half = "absolute top-0 h-[30px] w-[15px] border-[3.5px] border-blue-600";

/**
 * Same flow as ProgressRingDemo: 백업 시작 → the ring fills at an even pace → 백업 완료.
 * The arc is two half rings rotating inside two clipping halves, so it moves with
 * transforms only and stays smooth.
 */
export function ProgressRingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[34px] left-[12px] h-[44px] w-[152px] rounded-md border border-slate-200">
        <div className="absolute top-[6px] left-[8px] size-[30px]">
          <span className="absolute inset-0 rounded-full border-[3.5px] border-slate-200" />
          <div className="absolute top-0 left-[15px] h-[30px] w-[15px] overflow-hidden">
            <span
              className={`thumb-anim thumb-ring-right ${half} left-[-15px] rounded-l-[15px] border-r-0`}
              style={{ transformOrigin: "15px 15px", transform: "rotate(180deg)" }}
            />
          </div>
          <div className="absolute top-0 left-0 h-[30px] w-[15px] overflow-hidden">
            <span
              className={`thumb-anim thumb-ring-left ${half} left-[15px] rounded-r-[15px] border-l-0`}
              style={{ transformOrigin: "0 15px", transform: "rotate(180deg)" }}
            />
          </div>
          <span className="thumb-anim thumb-ring-done absolute inset-0 rounded-full border-[3.5px] border-emerald-500" />
          {PERCENTS.map((percent) => (
            <span
              key={percent}
              className={`thumb-anim thumb-ring-p${percent} absolute inset-x-0 top-[11px] text-center text-[6px] font-semibold ${percent === 100 ? "" : "opacity-0"}`}
            >
              {percent}%
            </span>
          ))}
        </div>
        <p className="absolute top-[10px] left-[46px] text-[7.5px] font-semibold">사진 백업</p>
        {STATUS.map((status) => (
          <p
            key={status.text}
            className={`thumb-anim ${status.motion} absolute top-[22px] left-[46px] text-[6.5px] text-slate-500 ${status.motion === "thumb-ring-done" ? "" : "opacity-0"}`}
          >
            {status.text}
          </p>
        ))}
        <span className="thumb-anim thumb-ring-btn absolute top-[14px] left-[110px] grid h-[16px] w-[36px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
          백업 시작
        </span>
      </div>
      <ThumbCursor motion="thumb-ring-cursor" />
    </ThumbStage>
  );
}
