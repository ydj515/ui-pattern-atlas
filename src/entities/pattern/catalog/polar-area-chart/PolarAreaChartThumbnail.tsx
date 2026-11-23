import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const RAIN = [20, 25, 50, 75, 95, 130, 380, 350, 140, 50, 50, 22];
const radius = (value: number) => Math.sqrt(value / 380) * 86;
const PICKS = [
  [6, "7월 · 380mm"],
  [0, "1월 · 20mm"],
] as const;

function wedge(index: number, value: number) {
  const point = (turn: number) => {
    const angle = turn * 2 * Math.PI - Math.PI / 2;
    return `${110 + radius(value) * Math.cos(angle)} ${110 + radius(value) * Math.sin(angle)}`;
  };
  return `M 110 110 L ${point(index / 12)} A ${radius(value)} ${radius(value)} 0 0 1 ${point((index + 1) / 12)} Z`;
}

/** Same rainfall as PolarAreaChartDemo: the long 7월 wedge reads 380mm; the short 1월 wedge reads 20mm. */
export function PolarAreaChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>서울 월별 강수량</b>
        <svg viewBox="0 0 220 220" className="mx-auto block w-[74px]">
          {[0.25, 0.5, 1].map((ratio) => (
            <circle
              key={ratio}
              cx={110}
              cy={110}
              r={Math.sqrt(ratio) * 86}
              fill="none"
              className="stroke-slate-200"
            />
          ))}
          {RAIN.map((value, index) => (
            <path
              key={index}
              d={wedge(index, value)}
              strokeWidth={2}
              className="fill-blue-600 stroke-white"
            />
          ))}
          {PICKS.map(([index], pick) => (
            <path
              key={index}
              d={wedge(index, RAIN[index] ?? 0)}
              strokeWidth={2}
              className={`thumb-anim thumb-dv-polar-${pick === 0 ? "a" : "b"} fill-blue-800 stroke-white`}
              style={{ opacity: 0 }}
            />
          ))}
          {RAIN.map((_, index) => {
            const angle = (index + 0.5) * (Math.PI / 6) - Math.PI / 2;
            return (
              <text
                key={index}
                x={110 + 98 * Math.cos(angle)}
                y={110 + 98 * Math.sin(angle)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-500 text-[11px]"
              >
                {index + 1}월
              </text>
            );
          })}
        </svg>
        {PICKS.map(([index, text], pick) => (
          <p
            key={index}
            className={`thumb-anim thumb-dv-polar-${pick === 0 ? "a" : "b"} absolute inset-x-0 bottom-[5px] text-center text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {text}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-polar-cursor" />
    </ThumbStage>
  );
}
