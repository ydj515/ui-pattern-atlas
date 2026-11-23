import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LABELS = ["6월", "7월", "8월", "9월", "10월", "11월"];
const SERIES = [
  ["올해", [1200, 1500, 1400, 1900, 2300, 2600], "stroke-blue-600", "fill-blue-600"],
  ["작년", [1000, 1100, 1300, 1250, 1500, 1700], "stroke-orange-500", "fill-orange-500"],
] as const;
const STOPS = [2, 4, 5];
const x = (index: number) => 34 + index * 48.4;
const y = (value: number) => 12 + (1 - value / 3000) * 126;

/** Same chart as LineChartDemo: moving along the months, the crosshair reads out 올해 and 작년 at each point. */
export function LineChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>월별 방문자 수</b>
        <p className="mt-[2px] flex gap-[6px] text-[5.5px] text-slate-600">
          <span className="flex items-center gap-[2px]">
            <span className="h-[1.5px] w-[6px] bg-blue-600" />
            올해
          </span>
          <span className="flex items-center gap-[2px]">
            <span className="h-[1.5px] w-[6px] bg-orange-500" />
            작년
          </span>
        </p>
        <svg viewBox="0 0 320 160" className="mt-[2px] w-[118px]">
          {[0, 1500, 3000].map((value) => (
            <line
              key={value}
              x1={34}
              x2={276}
              y1={y(value)}
              y2={y(value)}
              className="stroke-slate-200"
            />
          ))}
          {LABELS.map((label, index) => (
            <text
              key={label}
              x={x(index)}
              y={154}
              textAnchor="middle"
              className="fill-slate-500 text-[13px]"
            >
              {label}
            </text>
          ))}
          {STOPS.map((stop, index) => (
            <g key={stop} className={`thumb-anim thumb-dv-line-p${index}`} style={{ opacity: 0 }}>
              <line
                x1={x(stop)}
                x2={x(stop)}
                y1={12}
                y2={138}
                className="stroke-slate-400"
                strokeWidth={1.5}
              />
              {SERIES.map(([name, values, , fill]) => (
                <circle
                  key={name}
                  cx={x(stop)}
                  cy={y(values[stop] ?? 0)}
                  r={6}
                  strokeWidth={3}
                  className={`stroke-white ${fill}`}
                />
              ))}
            </g>
          ))}
          {SERIES.map(([name, values, stroke]) => (
            <g key={name}>
              <polyline
                points={values.map((value, index) => `${x(index)},${y(value)}`).join(" ")}
                fill="none"
                strokeWidth={4}
                strokeLinejoin="round"
                className={stroke}
              />
              <text
                x={x(5) + 8}
                y={y(values[5] ?? 0)}
                dominantBaseline="middle"
                className="fill-slate-700 text-[13px]"
              >
                {name}
              </text>
            </g>
          ))}
        </svg>
        {STOPS.map((stop, index) => (
          <p
            key={stop}
            className={`thumb-anim thumb-dv-line-p${index} absolute bottom-[4px] left-[8px] text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {LABELS[stop]} ·{" "}
            {SERIES.map(
              ([name, values]) => `${name} ${(values[stop] ?? 0).toLocaleString("ko-KR")}`,
            ).join(", ")}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-line-cursor" />
    </ThumbStage>
  );
}
