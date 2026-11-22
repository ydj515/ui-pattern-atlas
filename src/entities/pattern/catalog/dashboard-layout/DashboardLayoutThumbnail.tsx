import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEK = [40, 55, 48, 70, 62, 80, 75] as const;
const MONTH = [50, 62, 58, 66, 74, 70, 88] as const;
const METRICS = {
  week: [
    ["방문", "4,210"],
    ["주문", "312"],
    ["환불", "9"],
  ],
  month: [
    ["방문", "18,940"],
    ["주문", "1,284"],
    ["환불", "41"],
  ],
} as const;

/** Same dashboard as DashboardLayoutDemo: 이번 주 → 이번 달; numbers first, then the trend. */
export function DashboardLayoutThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[4px] left-[14px] flex gap-[3px] text-[5px]">
        <span className="relative rounded-[2px] border border-slate-300 px-[3px] py-[1px]">
          이번 주
          <span className="thumb-anim thumb-dash-week absolute -inset-px rounded-[2px] bg-slate-900 px-[3px] py-[1px] text-white opacity-0">
            이번 주
          </span>
        </span>
        <span className="relative rounded-[2px] border border-slate-300 px-[3px] py-[1px]">
          이번 달
          <span className="thumb-anim thumb-dash-month absolute -inset-px rounded-[2px] bg-slate-900 px-[3px] py-[1px] text-white">
            이번 달
          </span>
        </span>
      </span>
      {(["week", "month"] as const).map((period) => (
        <div
          key={period}
          className={`thumb-anim thumb-dash-${period} ${period === "week" ? "opacity-0" : ""}`}
        >
          {METRICS[period].map(([label, value], index) => (
            <div
              key={label}
              className="absolute top-[16px] h-[26px] w-[46px] rounded-[4px] border border-slate-200 bg-white px-[4px] pt-[3px]"
              style={{ left: 14 + index * 51 }}
            >
              <p className="text-[4.5px] text-slate-500">{label}</p>
              <p className="text-[7px] font-semibold tabular-nums">{value}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="absolute top-[46px] left-[14px] h-[40px] w-[148px] rounded-[4px] border border-slate-200 px-[4px] pt-[3px]">
        <p className="text-[4.5px] text-slate-500">일별 방문</p>
        <div className="absolute right-[6px] bottom-[4px] left-[6px] flex h-[26px] items-end gap-[3px]">
          {WEEK.map((_, index) => (
            <span
              key={index}
              className="thumb-anim flex-1 origin-bottom rounded-t-[1px] bg-blue-500"
              style={{ height: `${MONTH[index]}%`, animationName: `thumb-dash-bar-${index}` }}
            />
          ))}
        </div>
      </div>
      <p className="absolute top-[90px] left-[14px] h-[14px] w-[148px] rounded-[4px] border border-slate-200 px-[4px] text-[5px] leading-[12px] text-slate-600">
        가장 많이 본 상품: 린넨 셔츠
      </p>
      <ThumbCursor motion="thumb-dash-cursor" />
    </ThumbStage>
  );
}
