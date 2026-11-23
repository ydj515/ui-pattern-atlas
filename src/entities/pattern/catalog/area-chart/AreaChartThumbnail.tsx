import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const VALUES = [820, 900, 760, 1100, 1240, 980, 1320];
const STOPS = [1, 4, 6];
const x = (index: number) => 34 + index * 45.67;
const y = (value: number) => 12 + (1 - value / 2000) * 126;
const LINE = VALUES.map((value, index) => `${x(index)},${y(value)}`).join(" ");

/** Same visits as AreaChartDemo: moving along the days, the crosshair reads each day's count. */
export function AreaChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">7일</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">14일</span>
        </p>
        <b className="mt-[3px] block">일별 방문자</b>
        <svg viewBox="0 0 320 160" className="w-[124px]">
          {[0, 1000, 2000].map((value) => (
            <g key={value}>
              <line x1={34} x2={308} y1={y(value)} y2={y(value)} className="stroke-slate-200" />
              <text
                x={28}
                y={y(value)}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-slate-500 text-[13px]"
              >
                {value.toLocaleString("ko-KR")}
              </text>
            </g>
          ))}
          {VALUES.map((_, index) => (
            <text
              key={index}
              x={x(index)}
              y={154}
              textAnchor="middle"
              className="fill-slate-500 text-[13px]"
            >
              {index + 1}일
            </text>
          ))}
          <polygon points={`${x(0)},138 ${LINE} ${x(6)},138`} className="fill-blue-600/15" />
          <polyline
            points={LINE}
            fill="none"
            strokeWidth={4}
            strokeLinejoin="round"
            className="stroke-blue-600"
          />
          {STOPS.map((stop, index) => (
            <g key={stop} className={`thumb-anim thumb-dv-area-p${index}`} style={{ opacity: 0 }}>
              <line
                x1={x(stop)}
                x2={x(stop)}
                y1={12}
                y2={138}
                strokeWidth={1.5}
                className="stroke-slate-400"
              />
              <circle
                cx={x(stop)}
                cy={y(VALUES[stop] ?? 0)}
                r={7}
                strokeWidth={3}
                className="fill-blue-600 stroke-white"
              />
            </g>
          ))}
        </svg>
        {STOPS.map((stop, index) => (
          <p
            key={stop}
            className={`thumb-anim thumb-dv-area-p${index} absolute top-[24px] right-[8px] text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {stop + 1}일 · {(VALUES[stop] ?? 0).toLocaleString("ko-KR")}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-area-cursor" />
    </ThumbStage>
  );
}
