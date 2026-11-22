import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CIRCUMFERENCE = 2 * Math.PI * 13;
const STAGES = [
  { value: 0, status: "사진 120장" },
  { value: 30, status: "사진 120장 백업 중" },
  { value: 70, status: "사진 120장 백업 중" },
  { value: 100, status: "백업 완료" },
] as const;

/** Same flow as ProgressRingDemo: 백업 시작 → the ring fills → 백업 완료. */
export function ProgressRingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[34px] left-[12px] h-[44px] w-[152px] rounded-md border border-slate-200">
        {STAGES.map((stage, index) => (
          <div
            key={stage.value}
            className={`thumb-anim thumb-ring-s${index} ${index === 2 ? "" : "opacity-0"} absolute inset-0`}
          >
            <svg
              viewBox="0 0 30 30"
              className="absolute top-[6px] left-[8px] size-[30px] -rotate-90"
            >
              <circle
                cx="15"
                cy="15"
                r="13"
                fill="none"
                strokeWidth="3.5"
                className="stroke-slate-200"
              />
              <circle
                cx="15"
                cy="15"
                r="13"
                fill="none"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - stage.value / 100)}
                className={stage.value === 100 ? "stroke-emerald-500" : "stroke-blue-600"}
              />
            </svg>
            <span className="absolute top-[17px] left-[8px] w-[30px] text-center text-[6px] font-semibold">
              {stage.value}%
            </span>
            <p className="absolute top-[22px] left-[46px] text-[6.5px] text-slate-500">
              {stage.status}
            </p>
          </div>
        ))}
        <p className="absolute top-[10px] left-[46px] text-[7.5px] font-semibold">사진 백업</p>
        <span className="thumb-anim thumb-ring-btn absolute top-[14px] left-[110px] grid h-[16px] w-[36px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
          백업 시작
        </span>
      </div>
      <ThumbCursor motion="thumb-ring-cursor" />
    </ThumbStage>
  );
}
