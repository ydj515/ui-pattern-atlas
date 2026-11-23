import { useId } from "react";

export interface BarDatum {
  readonly label: string;
  readonly value: number;
}

export interface BarChartProps {
  readonly title: string;
  readonly data: readonly BarDatum[];
  readonly format?: (value: number) => string;
  /** Upper end of the scale; defaults to the largest value. */
  readonly max?: number;
}

/**
 * Horizontal bars that compare categories by length, starting from zero. Each row is
 * text (label and value), so screen readers read the numbers; the bar is decoration.
 * Bars ease to their new length when the data changes.
 */
export function BarChart({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  max,
}: BarChartProps) {
  const id = useId();
  const top = max ?? Math.max(...data.map((datum) => datum.value), 1);
  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <ul className="mt-3 grid gap-2">
        {data.map((datum) => (
          <li
            key={datum.label}
            className="group grid grid-cols-[3.5rem_1fr] items-center gap-2 text-xs"
          >
            <span className="text-slate-600">{datum.label}</span>
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                style={{ width: `${(datum.value / top) * 85}%` }}
                className="h-3 rounded-r bg-blue-600 transition-[width] duration-500 group-hover:bg-blue-500 motion-reduce:transition-none"
              />
              <span className="font-medium text-slate-900 tabular-nums">{format(datum.value)}</span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
