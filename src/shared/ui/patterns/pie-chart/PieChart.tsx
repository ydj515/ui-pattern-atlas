import { useId, useState } from "react";

export interface PieDatum {
  readonly label: string;
  readonly value: number;
}

export interface PieChartProps {
  readonly title: string;
  /** Up to three parts plus an optional "기타" part (see otherLabel). */
  readonly data: readonly PieDatum[];
  readonly format?: (value: number) => string;
  /** Part drawn in grey, so it never takes a series colour. */
  readonly otherLabel?: string;
}

const FILLS = ["fill-blue-600", "fill-orange-500", "fill-teal-500"];
const SWATCH = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];

function slice(start: number, end: number) {
  const point = (turn: number) => {
    const angle = turn * 2 * Math.PI - Math.PI / 2;
    return `${80 + 70 * Math.cos(angle)} ${80 + 70 * Math.sin(angle)}`;
  };
  if (end - start >= 0.9999) return "M 80 10 A 70 70 0 1 1 79.99 10 Z";
  return `M 80 80 L ${point(start)} A 70 70 0 ${end - start > 0.5 ? 1 : 0} 1 ${point(end)} Z`;
}

/**
 * Pie of how a few parts make up a whole, separated by a 2px surface line, with the
 * share written on large slices. Pointing at a slice or its legend row brings it
 * forward; the legend lists every part with its value and share.
 */
export function PieChart({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  otherLabel = "기타",
}: PieChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const total = data.reduce((sum, datum) => sum + datum.value, 0) || 1;
  const starts = data.map((_, index) =>
    data.slice(0, index).reduce((sum, datum) => sum + datum.value / total, 0),
  );
  const tone = (datum: PieDatum, index: number, palette: readonly string[], grey: string) =>
    datum.label === otherLabel ? grey : (palette[index] ?? grey);
  const percent = (value: number) => `${Math.round((value / total) * 100)}%`;

  return (
    <figure aria-labelledby={id} className="grid gap-3">
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 160 160" aria-hidden="true" className="size-36 shrink-0">
          {data.map((datum, index) => {
            const start = starts[index] ?? 0;
            const end = start + datum.value / total;
            const mid = ((start + end) / 2) * 2 * Math.PI - Math.PI / 2;
            return (
              <g
                key={datum.label}
                onPointerEnter={() => setActive(index)}
                onPointerLeave={() => setActive(null)}
                className="transition-opacity duration-200"
                style={{ opacity: active === null || active === index ? 1 : 0.35 }}
              >
                <path
                  d={slice(start, end)}
                  strokeWidth={2}
                  className={`stroke-white ${tone(datum, index, FILLS, "fill-slate-400")}`}
                />
                {datum.value / total >= 0.15 ? (
                  <text
                    x={80 + 44 * Math.cos(mid)}
                    y={80 + 44 * Math.sin(mid)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-[11px] font-semibold"
                  >
                    {percent(datum.value)}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
        <ul className="grid gap-1.5 text-xs">
          {data.map((datum, index) => (
            <li key={datum.label}>
              <button
                type="button"
                onPointerEnter={() => setActive(index)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                className="flex items-center gap-1.5 rounded text-left text-slate-700"
              >
                <span
                  aria-hidden="true"
                  className={`size-2.5 rounded-sm ${tone(datum, index, SWATCH, "bg-slate-400")}`}
                />
                {datum.label}
                <span className="text-slate-900 tabular-nums">
                  {format(datum.value)} · {percent(datum.value)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
