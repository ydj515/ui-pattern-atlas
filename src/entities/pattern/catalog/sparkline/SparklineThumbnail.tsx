import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PERIODS = [
  [
    ["홈", [120, 135, 128, 150, 162, 158, 180], "+50%"],
    ["검색", [80, 76, 90, 85, 70, 66, 60], "-25%"],
    ["장바구니", [30, 32, 31, 35, 33, 36, 38], "+27%"],
  ],
  [
    ["홈", [90, 100, 96, 110, 120, 118, 130, 140, 150, 180], "+100%"],
    ["검색", [60, 64, 70, 78, 82, 90, 88, 80, 70, 60], "0%"],
    ["장바구니", [40, 38, 36, 35, 34, 33, 35, 36, 37, 38], "-5%"],
  ],
] as const;

function points(values: readonly number[]) {
  const min = Math.min(...values);
  const span = Math.max(...values) - min || 1;
  return values
    .map(
      (value, index) =>
        `${1 + (index / (values.length - 1)) * 38},${1 + (1 - (value - min) / span) * 10}`,
    )
    .join(" ");
}

/** Same table as SparklineDemo: 7일 → 30일 redraws each page's trend next to its latest number. */
export function SparklineThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-spark-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">7일</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">30일</span>
        </p>
        <b className="mt-[5px] block">페이지별 방문</b>
        {PERIODS.map((rows, period) => (
          <div
            key={period}
            className={`thumb-anim thumb-dv-spark-${period === 0 ? "a" : "b"} absolute inset-x-[8px] top-[40px]`}
            style={period === 1 ? { opacity: 0 } : undefined}
          >
            {rows.map(([name, values, delta]) => (
              <p key={name} className="flex h-[16px] items-center border-t border-slate-100">
                <span className="w-[36px] text-slate-700">{name}</span>
                <svg viewBox="0 0 40 12" className="h-[12px] w-[40px] overflow-visible">
                  <polyline
                    points={points(values)}
                    fill="none"
                    strokeWidth={1}
                    strokeLinejoin="round"
                    className="stroke-blue-600"
                  />
                </svg>
                <b className="ml-auto tabular-nums">{values.at(-1)}</b>
                <span className="w-[24px] text-right text-[5.5px] text-slate-500">{delta}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-spark-cursor" />
    </ThumbStage>
  );
}
