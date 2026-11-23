import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const POINTS = [
  [3, 2],
  [5, 2.5],
  [7, 3],
  [9, 3.5],
  [12, 4],
  [14, 5],
  [16, 4.5],
  [19, 6],
  [22, 6.5],
  [25, 7],
  [28, 8],
  [31, 8.5],
  [35, 9.5],
  [8, 10],
] as const;
const x = (value: number) => 32 + (value / 40) * 272;
const y = (value: number) => 12 + (1 - value / 12) * 160;

/** Same deliveries as ScatterPlotDemo: the dot that sits apart reads 8km · 10시간, then 평균선 보기 splits the plot. */
export function ScatterPlotThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>배송 거리와 걸린 시간</b>
        <svg viewBox="0 0 320 200" className="mt-[2px] w-[118px]">
          <line x1={32} x2={304} y1={172} y2={172} className="stroke-slate-300" />
          <line x1={32} x2={32} y1={12} y2={172} className="stroke-slate-300" />
          <text x={304} y={194} textAnchor="end" className="fill-slate-500 text-[13px]">
            거리(km) →
          </text>
          <text x={4} y={16} className="fill-slate-500 text-[13px]">
            ↑ 시간
          </text>
          <g
            className="thumb-anim thumb-dv-scat-mean stroke-slate-400"
            strokeDasharray="6 4"
            strokeWidth={1.5}
            style={{ opacity: 0 }}
          >
            <line x1={x(16.7)} x2={x(16.7)} y1={12} y2={172} />
            <line x1={32} x2={304} y1={y(5.7)} y2={y(5.7)} />
          </g>
          {POINTS.map(([px, py]) => (
            <circle
              key={`${px}-${py}`}
              cx={x(px)}
              cy={y(py)}
              r={5}
              strokeWidth={2}
              className="fill-blue-600 stroke-white"
            />
          ))}
          <circle
            cx={x(8)}
            cy={y(10)}
            r={8}
            strokeWidth={2}
            className="thumb-anim thumb-dv-scat-hit fill-blue-800 stroke-white"
            style={{ opacity: 0 }}
          />
        </svg>
        <p
          className="thumb-anim thumb-dv-scat-hit absolute right-[8px] bottom-[4px] text-[5.5px] text-slate-700"
          style={{ opacity: 0 }}
        >
          8km · 10시간
        </p>
        <p
          className="thumb-anim thumb-dv-scat-mean absolute right-[8px] bottom-[4px] text-[5.5px] text-slate-700"
          style={{ opacity: 0 }}
        >
          평균 16.7km · 5.7시간
        </p>
        <p className="absolute bottom-[4px] left-[8px] flex items-center gap-[3px]">
          <span className="relative size-[7px] rounded-[2px] border border-slate-400">
            <span
              className="thumb-anim thumb-dv-scat-mean absolute -inset-px rounded-[2px] bg-blue-600 text-center text-[5px] leading-[7px] text-white"
              style={{ opacity: 0 }}
            >
              ✓
            </span>
          </span>
          평균선 보기
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-scat-cursor" />
    </ThumbStage>
  );
}
