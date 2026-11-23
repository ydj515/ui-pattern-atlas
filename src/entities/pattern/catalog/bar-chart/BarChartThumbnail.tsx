import type { CSSProperties } from "react";
import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SCALE = 90 / 70;
const ROWS = [
  ["월", 42, 35],
  ["화", 38, 40],
  ["수", 51, 44],
  ["목", 47, 39],
  ["금", 64, 52],
] as const;

/** Same chart as BarChartDemo: 이번 주 → 지난주 and every bar eases to its new length on the same 0~70 scale. */
export function BarChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-bar-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">이번 주</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">지난주</span>
        </p>
        <b className="mt-[5px] block">요일별 주문 수</b>
        {ROWS.map(([day, now, before]) => (
          <p key={day} className="relative mt-[4px] flex h-[8px] items-center gap-[6px]">
            <span className="w-[8px] text-slate-600">{day}</span>
            <span
              className="thumb-anim thumb-dv-bar-grow h-[6px] origin-left rounded-r-[2px] bg-blue-600"
              style={{ width: now * SCALE, "--to": before / now } as CSSProperties}
            />
            <span
              className="thumb-anim thumb-dv-bar-a absolute font-medium"
              style={{ left: 18 + now * SCALE }}
            >
              {now}건
            </span>
            <span
              className="thumb-anim thumb-dv-bar-b absolute font-medium"
              style={{ left: 18 + before * SCALE, opacity: 0 }}
            >
              {before}건
            </span>
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-bar-cursor" />
    </ThumbStage>
  );
}
