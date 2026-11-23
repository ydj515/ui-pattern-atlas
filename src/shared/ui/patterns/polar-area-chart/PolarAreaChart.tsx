import { useId, useState } from "react";

export interface PolarDatum {
  readonly label: string;
  readonly value: number;
}

export interface PolarAreaChartProps {
  readonly title: string;
  /** Usually a cycle: months, hours, days of the week. */
  readonly data: readonly PolarDatum[];
  readonly format?: (value: number) => string;
  readonly tableLabel?: string;
}

const C = 110;
const R = 86;

function wedge(start: number, end: number, radius: number) {
  const point = (turn: number) => {
    const angle = turn * 2 * Math.PI - Math.PI / 2;
    return `${C + radius * Math.cos(angle)} ${C + radius * Math.sin(angle)}`;
  };
  return `M ${C} ${C} L ${point(start)} A ${radius} ${radius} 0 0 1 ${point(end)} Z`;
}

/**
 * Polar area (rose) chart: equal-angle wedges around a circle, each reaching out by its
 * value, for values that repeat in a cycle such as months. Radius grows with the square
 * root so a wedge's area, not its length, matches the value. Pointing at a wedge reads it.
 */
export function PolarAreaChart({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  tableLabel = "표로 보기",
}: PolarAreaChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...data.map((datum) => datum.value), 1);
  const radius = (value: number) => Math.sqrt(value / max) * R;
  const turn = 1 / Math.max(data.length, 1);
  const current = active === null ? null : data[active];

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <svg
        viewBox="0 0 220 220"
        aria-hidden="true"
        className="mx-auto mt-1 w-full max-w-60"
        onPointerLeave={() => setActive(null)}
      >
        {[0.25, 0.5, 1].map((ratio) => (
          <circle
            key={ratio}
            cx={C}
            cy={C}
            r={Math.sqrt(ratio) * R}
            fill="none"
            className="stroke-slate-200"
          />
        ))}
        {data.map((datum, index) => (
          <path
            key={datum.label}
            d={wedge(index * turn, (index + 1) * turn, radius(datum.value))}
            strokeWidth={2}
            onPointerEnter={() => setActive(index)}
            className={`stroke-white ${active === index ? "fill-blue-800" : "fill-blue-600"}`}
          />
        ))}
        {data.map((datum, index) => {
          const angle = (index + 0.5) * turn * 2 * Math.PI - Math.PI / 2;
          return (
            <text
              key={datum.label}
              x={C + (R + 12) * Math.cos(angle)}
              y={C + (R + 12) * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-500 text-[9px]"
            >
              {datum.label}
            </text>
          );
        })}
      </svg>
      <p aria-hidden="true" className="h-4 text-center text-xs text-slate-700 tabular-nums">
        {current ? `${current.label} · ${format(current.value)}` : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <tbody>
            {data.map((datum) => (
              <tr key={datum.label}>
                <th scope="row" className="font-normal text-slate-600">
                  {datum.label}
                </th>
                <td>{format(datum.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
