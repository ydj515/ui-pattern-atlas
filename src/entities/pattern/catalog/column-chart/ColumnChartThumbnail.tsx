import type { CSSProperties } from "react";
import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const FIRST = [120, 150, 180, 160, 210, 240];
const SECOND = [230, 260, 220, 280, 310, 350];
const MONTHS = [
  ["1월", "2월", "3월", "4월", "5월", "6월"],
  ["7월", "8월", "9월", "10월", "11월", "12월"],
];
const PX = 56 / 400;

/** Same chart as ColumnChartDemo: 상반기 → 하반기 and the columns grow on the same 0~400명 scale. */
export function ColumnChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-col-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">상반기</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">하반기</span>
        </p>
        <b className="mt-[4px] block">월별 신규 가입</b>
        <div className="relative mt-[3px] ml-[22px] h-[56px] border-b border-slate-300">
          {[
            ["200명", 0.5],
            ["400명", 1],
          ].map(([label, ratio]) => (
            <span
              key={label}
              className="absolute inset-x-0 border-t border-slate-200"
              style={{ bottom: `${Number(ratio) * 100}%` }}
            >
              <span className="absolute -top-[4px] -left-[22px] w-[19px] text-right text-[5px] text-slate-500">
                {label}
              </span>
            </span>
          ))}
          <div className="absolute inset-0 flex items-end gap-[1px] px-[2px]">
            {FIRST.map((value, index) => (
              <span key={index} className="flex flex-1 justify-center">
                <span
                  className="thumb-anim thumb-dv-col-grow w-3/5 origin-bottom rounded-t-[2px] bg-blue-600"
                  style={
                    {
                      height: value * PX,
                      "--to": (SECOND[index] ?? value) / value,
                    } as CSSProperties
                  }
                />
              </span>
            ))}
          </div>
        </div>
        <div className="relative ml-[22px] h-[8px] text-[5px] text-slate-500">
          {MONTHS.map((months, index) => (
            <p
              key={months[0]}
              className={`thumb-anim thumb-dv-col-${index === 0 ? "a" : "b"} absolute inset-x-0 flex px-[2px]`}
              style={index === 0 ? undefined : { opacity: 0 }}
            >
              {months.map((month) => (
                <span key={month} className="flex-1 text-center">
                  {month}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-dv-col-cursor" />
    </ThumbStage>
  );
}
