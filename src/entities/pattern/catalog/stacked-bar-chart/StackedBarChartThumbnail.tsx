import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COLORS = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];
const SERIES = ["해결", "진행 중", "대기"];
const ROWS = [
  ["9월", [32, 10, 8]],
  ["10월", [41, 12, 5]],
  ["11월", [26, 14, 12]],
] as const;
const W = 108;
const TOP = 58;

function Bars({ percent }: { readonly percent: boolean }) {
  return ROWS.map(([month, parts]) => {
    const total = parts.reduce((sum, part) => sum + part, 0);
    const width = percent ? W : (total / TOP) * W;
    return (
      <p key={month} className="mt-[4px] flex h-[10px] items-center gap-[4px]">
        <span className="w-[14px] text-slate-600">{month}</span>
        <span className="flex h-full gap-[1px]" style={{ width }}>
          {parts.map((part, index) => (
            <span
              key={SERIES[index]}
              className={`first:rounded-l-[2px] last:rounded-r-[2px] ${COLORS[index]}`}
              style={{ flexGrow: part, flexBasis: 0 }}
            />
          ))}
        </span>
      </p>
    );
  });
}

/** Same chart as StackedBarChartDemo: 개수 → 비율 compares the make-up of each month, then 11월 대기 shows its value. */
export function StackedBarChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-stk-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">개수</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">비율</span>
        </p>
        <b className="mt-[4px] block">월별 문의 처리</b>
        <p className="mt-[2px] flex gap-[6px] text-[5.5px] text-slate-600">
          {SERIES.map((name, index) => (
            <span key={name} className="flex items-center gap-[2px]">
              <span className={`size-[5px] rounded-[1px] ${COLORS[index]}`} />
              {name}
            </span>
          ))}
        </p>
        <div className="relative h-[44px]">
          <div className="thumb-anim thumb-dv-stk-a absolute inset-x-0">
            <Bars percent={false} />
          </div>
          <div className="thumb-anim thumb-dv-stk-b absolute inset-x-0" style={{ opacity: 0 }}>
            <Bars percent />
          </div>
        </div>
        <p
          className="thumb-anim thumb-dv-stk-tip text-[5.5px] text-slate-700"
          style={{ opacity: 0 }}
        >
          11월 · 대기 12건 (23%)
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-stk-cursor" />
    </ThumbStage>
  );
}
