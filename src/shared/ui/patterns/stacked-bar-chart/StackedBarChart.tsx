import { useId, useState } from "react";

export interface StackSeries {
  readonly key: string;
  readonly label: string;
}

export interface StackRow {
  readonly label: string;
  readonly values: Readonly<Record<string, number>>;
}

export interface StackedBarChartProps {
  readonly title: string;
  /** At most three series; fold the rest into one "기타" series. */
  readonly series: readonly StackSeries[];
  readonly rows: readonly StackRow[];
  /** "count" compares totals between rows; "percent" compares the make-up of each row. */
  readonly mode?: "count" | "percent";
  readonly format?: (value: number) => string;
  readonly tableLabel?: string;
}

const COLORS = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];

/**
 * Horizontal stacked bars: each bar is a total split into the same series in the same
 * order, with a 2px gap between parts. Hovering a part shows its value; the legend
 * names every series and a table under the chart lists every number.
 */
export function StackedBarChart({
  title,
  series,
  rows,
  mode = "count",
  format = (value) => value.toLocaleString("ko-KR"),
  tableLabel = "표로 보기",
}: StackedBarChartProps) {
  const id = useId();
  const [hover, setHover] = useState<{ row: string; key: string } | null>(null);
  const totals = rows.map((row) => series.reduce((sum, s) => sum + (row.values[s.key] ?? 0), 0));
  const top = Math.max(...totals, 1);
  const hovered = hover ? rows.find((row) => row.label === hover.row) : undefined;
  const hoveredSeries = hover ? series.find((s) => s.key === hover.key) : undefined;
  const hoveredTotal = hovered ? totals[rows.indexOf(hovered)] || 1 : 1;
  const hoveredValue = hovered && hoveredSeries ? (hovered.values[hoveredSeries.key] ?? 0) : 0;

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <ul className="mt-2 flex gap-3 text-xs text-slate-600">
        {series.map((s, index) => (
          <li key={s.key} className="flex items-center gap-1">
            <span aria-hidden="true" className={`size-2.5 rounded-sm ${COLORS[index]}`} />
            {s.label}
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="mt-3 grid gap-2">
        {rows.map((row, rowIndex) => {
          const total = totals[rowIndex] ?? 0;
          const width = mode === "percent" ? 100 : (total / top) * 100;
          return (
            <div key={row.label} className="grid grid-cols-[2.5rem_1fr] items-center gap-2 text-xs">
              <span className="text-slate-600">{row.label}</span>
              <span className="flex h-4 gap-[2px]" style={{ width: `${width}%` }}>
                {series.map((s, index) => (
                  <span
                    key={s.key}
                    onPointerEnter={() => setHover({ row: row.label, key: s.key })}
                    onPointerLeave={() => setHover(null)}
                    style={{ flexGrow: row.values[s.key] ?? 0 }}
                    className={`basis-0 first:rounded-l last:rounded-r ${COLORS[index]} transition-[flex-grow] duration-500 hover:brightness-110 motion-reduce:transition-none`}
                  />
                ))}
              </span>
            </div>
          );
        })}
      </div>
      <p aria-hidden="true" className="mt-2 h-4 text-xs text-slate-700">
        {hovered && hoveredSeries
          ? `${hovered.label} · ${hoveredSeries.label} ${format(hoveredValue)} (${Math.round((hoveredValue / hoveredTotal) * 100)}%)`
          : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              {series.map((s) => (
                <th key={s.key} scope="col" className="font-normal">
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="font-normal text-slate-600">
                  {row.label}
                </th>
                {series.map((s) => (
                  <td key={s.key}>{format(row.values[s.key] ?? 0)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
