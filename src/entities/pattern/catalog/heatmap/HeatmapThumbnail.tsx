import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = ["월", "화", "수", "목", "금"];
const COLUMNS = ["9시", "12시", "15시", "18시", "21시"];
const VALUES = [
  [4, 18, 9, 30, 22],
  [6, 20, 11, 42, 25],
  [5, 16, 8, 28, 19],
  [7, 22, 12, 35, 27],
  [9, 25, 14, 48, 38],
];
const STEPS = ["bg-blue-50", "bg-blue-200", "bg-blue-400", "bg-blue-600", "bg-blue-800"];
const step = (value: number) => STEPS[Math.min(4, Math.floor(((value - 4) / 44) * 5))];
const FOCUS = [
  [4, 3, "금 18시 · 48건"],
  [0, 0, "월 9시 · 4건"],
] as const;

/** Same orders as HeatmapDemo: pointing at a cell outlines it and reads out its day, hour and count. */
export function HeatmapThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>시간대별 주문</b>
        <div className="mt-[3px] grid grid-cols-[12px_repeat(5,1fr)] gap-[1.5px] text-[5px] text-slate-500">
          <span />
          {COLUMNS.map((column) => (
            <span key={column} className="text-center">
              {column}
            </span>
          ))}
          {ROWS.map((row, r) => (
            <div key={row} className="contents">
              <span className="self-center">{row}</span>
              {COLUMNS.map((column, c) => {
                const focus = FOCUS.findIndex(([fr, fc]) => fr === r && fc === c);
                return (
                  <span
                    key={column}
                    className={`relative h-[10px] rounded-[1.5px] ${step(VALUES[r]?.[c] ?? 4)}`}
                  >
                    {focus >= 0 ? (
                      <span
                        className={`thumb-anim thumb-dv-heat-f${focus} absolute -inset-px rounded-[2px] ring-[1.5px] ring-slate-900`}
                        style={{ opacity: 0 }}
                      />
                    ) : null}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <p className="relative mt-[3px] flex h-[8px] items-center justify-between text-[5.5px]">
          {FOCUS.map(([, , text], index) => (
            <span
              key={text}
              className={`thumb-anim thumb-dv-heat-f${index} absolute`}
              style={{ opacity: 0 }}
            >
              {text}
            </span>
          ))}
          <span className="ml-auto flex items-center gap-[1.5px] text-slate-600">
            적음
            {STEPS.map((tone) => (
              <span key={tone} className={`size-[4px] rounded-[1px] ${tone}`} />
            ))}
            많음
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-heat-cursor" />
    </ThumbStage>
  );
}
