import { useId } from "react";

export interface RadarSeries {
  readonly name: string;
  readonly values: readonly number[];
}

export interface RadarChartProps {
  readonly title: string;
  /** Three to eight measures on the same scale, e.g. scores out of 5. */
  readonly axes: readonly string[];
  readonly max: number;
  /** One or two series; more overlap too much to read. */
  readonly series: readonly RadarSeries[];
  readonly tableLabel?: string;
}

const STROKES = ["stroke-blue-600", "stroke-orange-500"];
const FILLS = ["fill-blue-600/15", "fill-orange-500/15"];
const SWATCH = ["bg-blue-600", "bg-orange-500"];
const C = 120;
const R = 78;

/**
 * Radar (spider) chart: several measures on one scale arranged around a circle, so the
 * shape shows strengths at a glance. Two series at most, each named in the legend, and
 * a table with every score.
 */
export function RadarChart({
  title,
  axes,
  max,
  series,
  tableLabel = "표로 보기",
}: RadarChartProps) {
  const id = useId();
  const point = (index: number, value: number) => {
    const angle = (index / axes.length) * 2 * Math.PI - Math.PI / 2;
    const radius = (value / max) * R;
    return [C + radius * Math.cos(angle), 110 + radius * Math.sin(angle)] as const;
  };
  const ring = (ratio: number) =>
    axes.map((_, index) => point(index, max * ratio).join(",")).join(" ");

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      {series.length > 1 ? (
        <ul className="mt-2 flex gap-3 text-xs text-slate-600">
          {series.map((s, index) => (
            <li key={s.name} className="flex items-center gap-1">
              <span aria-hidden="true" className={`size-2.5 rounded-sm ${SWATCH[index]}`} />
              {s.name}
            </li>
          ))}
        </ul>
      ) : null}
      <svg viewBox="0 0 240 220" aria-hidden="true" className="mx-auto mt-1 w-full max-w-64">
        {[0.25, 0.5, 0.75, 1].map((ratio) => (
          <polygon key={ratio} points={ring(ratio)} fill="none" className="stroke-slate-200" />
        ))}
        {axes.map((axis, index) => {
          const [x, y] = point(index, max);
          const [lx, ly] = point(index, max * 1.2);
          return (
            <g key={axis}>
              <line x1={C} y1={110} x2={x} y2={y} className="stroke-slate-200" />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-600 text-[10px]"
              >
                {axis}
              </text>
            </g>
          );
        })}
        {series.map((s, index) => (
          <polygon
            key={s.name}
            points={s.values.map((value, i) => point(i, value).join(",")).join(" ")}
            strokeWidth={2}
            strokeLinejoin="round"
            className={`${FILLS[index]} ${STROKES[index]} transition-opacity duration-300`}
          />
        ))}
      </svg>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              {series.map((s) => (
                <th key={s.name} scope="col" className="font-normal">
                  {s.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {axes.map((axis, index) => (
              <tr key={axis}>
                <th scope="row" className="font-normal text-slate-600">
                  {axis}
                </th>
                {series.map((s) => (
                  <td key={s.name}>
                    {s.values[index]} / {max}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
