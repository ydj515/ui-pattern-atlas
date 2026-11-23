import type { CSSProperties } from "react";
import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const METRICS = [
  ["매출 달성률", 82, 74, 90],
  ["신규 가입", 95, 88, 90],
  ["재구매율", 64, 70, 75],
] as const;

/** Same goals as BulletChartDemo: 이번 달 → 지난달, each bar moves against its fixed target and grey bands. */
export function BulletChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-bul-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">이번 달</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">지난달</span>
        </p>
        <div className="mt-[6px] grid gap-[5px]">
          {METRICS.map(([label, now, before, target]) => (
            <div key={label} className="grid grid-cols-[30px_1fr] items-center gap-[4px]">
              <span className="text-[5.5px] text-slate-700">{label}</span>
              <span>
                <span className="relative block h-[9px] overflow-hidden rounded-[2px]">
                  <span className="absolute inset-y-0 left-0 w-[60%] bg-slate-300" />
                  <span className="absolute inset-y-0 left-[60%] w-[20%] bg-slate-200" />
                  <span className="absolute inset-y-0 left-[80%] w-[20%] bg-slate-100" />
                  <span
                    className="thumb-anim thumb-dv-bul-grow absolute inset-y-[3px] left-0 origin-left rounded-r-[1px] bg-blue-700"
                    style={{ width: `${now}%`, "--to": before / now } as CSSProperties}
                  />
                  <span
                    className="absolute inset-y-[1px] w-[1px] bg-slate-900"
                    style={{ left: `${target}%` }}
                  />
                </span>
                <span className="relative flex justify-between text-[5px] text-slate-600">
                  <b className="thumb-anim thumb-dv-bul-a text-slate-900">{now}%</b>
                  <b
                    className="thumb-anim thumb-dv-bul-b absolute left-0 text-slate-900"
                    style={{ opacity: 0 }}
                  >
                    {before}%
                  </b>
                  <span>목표 {target}%</span>
                </span>
              </span>
            </div>
          ))}
        </div>
        <p className="absolute bottom-[5px] left-[8px] text-[5px] text-slate-500">
          회색 띠: 60% 미만 · 60~80% · 80% 이상
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-bul-cursor" />
    </ThumbStage>
  );
}
