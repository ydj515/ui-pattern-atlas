import { useId, useState } from "react";

export interface DonutDatum {
  readonly label: string;
  readonly value: number;
}

export interface DonutChartProps {
  readonly title: string;
  /** Up to three parts plus an optional "기타" part (see otherLabel). */
  readonly data: readonly DonutDatum[];
  readonly format?: (value: number) => string;
  readonly totalLabel?: string;
  /** Part drawn in grey, so it never takes a series colour. */
  readonly otherLabel?: string;
}

const COLORS = ["stroke-blue-600", "stroke-orange-500", "stroke-teal-500"];
const SWATCH = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];
const R = 60;
const CIRCUMFERENCE = 2 * Math.PI * R;
const GAP = 2;

/**
 * Donut chart of how parts make up a whole, with a 2px gap between parts. The centre
 * shows the total, or the part under the pointer or focus. The legend is the readable
 * version: every part with its value and share.
 */
export function DonutChart({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  totalLabel = "합계",
  otherLabel = "기타",
}: DonutChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const total = data.reduce((sum, datum) => sum + datum.value, 0) || 1;
  const percent = (value: number) => `${Math.round((value / total) * 100)}%`;
  const current = active === null ? null : data[active];
  const tone = (datum: DonutDatum, index: number, palette: readonly string[], grey: string) =>
    datum.label === otherLabel ? grey : (palette[index] ?? grey);
  const starts = data.map((_, index) =>
    data.slice(0, index).reduce((sum, datum) => sum + (datum.value / total) * CIRCUMFERENCE, 0),
  );

  return (
    <figure aria-labelledby={id} className="grid gap-3">
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div className="flex items-center gap-4">
        <div className="relative size-36 shrink-0">
          <svg viewBox="0 0 160 160" aria-hidden="true" className="-rotate-90">
            {data.map((datum, index) => {
              const length = (datum.value / total) * CIRCUMFERENCE;
              const dash = Math.max(length - GAP, 0);
              return (
                <circle
                  key={datum.label}
                  cx={80}
                  cy={80}
                  r={R}
                  fill="none"
                  strokeWidth={active === index ? 26 : 22}
                  strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
                  strokeDashoffset={-(starts[index] ?? 0)}
                  onPointerEnter={() => setActive(index)}
                  onPointerLeave={() => setActive(null)}
                  className={`${tone(datum, index, COLORS, "stroke-slate-400")} transition-[stroke-width] duration-200`}
                />
              );
            })}
          </svg>
          <p
            aria-hidden="true"
            className="absolute inset-0 grid place-content-center text-center leading-tight"
          >
            <span className="text-xs text-slate-500">{current ? current.label : totalLabel}</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {current ? percent(current.value) : format(total)}
            </span>
          </p>
        </div>
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
