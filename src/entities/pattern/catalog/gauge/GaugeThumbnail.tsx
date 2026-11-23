import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ARC = "M 20 100 A 80 80 0 0 1 180 100";
const STATES = [6200, 7200, 8200];
const tx = (r: number, radius: number) => 100 + radius * Math.cos(Math.PI * (1 - r));
const ty = (r: number, radius: number) => 100 - radius * Math.sin(Math.PI * (1 - r));

/** Same goal as GaugeDemo: 1,000걸음 더하기 twice moves past the 8,000 target mark and says 목표를 채웠어요. */
export function GaugeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px] text-center">
        <b className="block text-left">오늘 걸음 수</b>
        <div className="relative mx-auto mt-[2px] w-[96px]">
          <svg viewBox="0 0 200 112">
            <path
              d={ARC}
              fill="none"
              strokeWidth={14}
              strokeLinecap="round"
              className="stroke-slate-200"
            />
            {STATES.map((value, index) => (
              <path
                key={value}
                d={ARC}
                fill="none"
                strokeWidth={14}
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray={`${value / 100} 100`}
                className={`thumb-anim thumb-dv-gauge-s${index} stroke-blue-600`}
                style={index === 2 ? undefined : { opacity: 0 }}
              />
            ))}
            <line
              x1={tx(0.8, 64)}
              y1={ty(0.8, 64)}
              x2={tx(0.8, 96)}
              y2={ty(0.8, 96)}
              strokeWidth={2.5}
              className="stroke-slate-900"
            />
          </svg>
          {STATES.map((value, index) => (
            <b
              key={value}
              className={`thumb-anim thumb-dv-gauge-s${index} absolute inset-x-0 bottom-[6px] text-[10px]`}
              style={index === 2 ? undefined : { opacity: 0 }}
            >
              {value.toLocaleString("ko-KR")}
            </b>
          ))}
          <span className="absolute inset-x-0 -bottom-[2px] text-[5px] text-slate-500">
            0~10,000 · 목표 8,000
          </span>
        </div>
        <p className="thumb-anim thumb-dv-gauge-s2 mt-[4px] h-[8px] text-[5.5px] text-emerald-700">
          목표를 채웠어요
        </p>
        <p className="mt-[3px] flex justify-center gap-[4px]">
          <span className="rounded-[3px] bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            1,000걸음 더하기
          </span>
          <span className="rounded-[3px] border border-slate-200 px-[5px] py-[2px]">처음부터</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-gauge-cursor" />
    </ThumbStage>
  );
}
