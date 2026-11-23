import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SOURCES = [
  ["검색", "fill-blue-600", "bg-blue-600"],
  ["SNS", "fill-orange-500", "bg-orange-500"],
  ["광고", "fill-teal-500", "bg-teal-500"],
  ["기타", "fill-slate-400", "bg-slate-400"],
] as const;
const METRICS = [
  { values: [45, 30, 15, 10], counts: ["4,500명", "3,000명", "1,500명", "1,000명"] },
  { values: [55, 15, 20, 10], counts: ["550건", "150건", "200건", "100건"] },
];

function slice(start: number, end: number) {
  const point = (turn: number) => {
    const angle = turn * 2 * Math.PI - Math.PI / 2;
    return `${80 + 70 * Math.cos(angle)} ${80 + 70 * Math.sin(angle)}`;
  };
  return `M 80 80 L ${point(start)} A 70 70 0 ${end - start > 0.5 ? 1 : 0} 1 ${point(end)} Z`;
}

/** Same sources as PieChartDemo: 방문 → 구매, and 검색 takes a bigger share of purchases. */
export function PieChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-pie-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">방문</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">구매</span>
        </p>
        <b className="mt-[4px] block">유입 경로</b>
        {METRICS.map(({ values, counts }, index) => (
          <div
            key={index}
            className={`thumb-anim thumb-dv-pie-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[36px] flex items-center gap-[8px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <svg viewBox="0 0 160 160" className="size-[60px] shrink-0">
              {values.map((value, i) => {
                const start = values.slice(0, i).reduce((sum, v) => sum + v, 0) / 100;
                const end = start + value / 100;
                const mid = ((start + end) / 2) * 2 * Math.PI - Math.PI / 2;
                return (
                  <g key={SOURCES[i]?.[0]}>
                    <path
                      d={slice(start, end)}
                      strokeWidth={3}
                      className={`stroke-white ${SOURCES[i]?.[1]}`}
                    />
                    {value >= 15 ? (
                      <text
                        x={80 + 44 * Math.cos(mid)}
                        y={80 + 44 * Math.sin(mid)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white text-[18px] font-semibold"
                      >
                        {value}%
                      </text>
                    ) : null}
                  </g>
                );
              })}
            </svg>
            <ul className="grid gap-[3px] text-[5.5px]">
              {SOURCES.map(([label, , swatch], i) => (
                <li key={label} className="flex items-center gap-[3px] whitespace-nowrap">
                  <span className={`size-[5px] rounded-[1px] ${swatch}`} />
                  {label}{" "}
                  <b>
                    {counts[i]} · {values[i]}%
                  </b>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-pie-cursor" />
    </ThumbStage>
  );
}
