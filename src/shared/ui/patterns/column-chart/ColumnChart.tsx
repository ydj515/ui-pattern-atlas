import { useId, useState } from "react";

export interface ColumnDatum {
  readonly label: string;
  readonly value: number;
}

export interface ColumnChartProps {
  readonly title: string;
  readonly data: readonly ColumnDatum[];
  readonly format?: (value: number) => string;
  /** Top of the scale; keep it fixed when the data can change so heights stay comparable. */
  readonly max?: number;
  readonly tableLabel?: string;
}

/**
 * Vertical columns that compare values along an ordered axis such as months, from a
 * zero baseline with three gridlines. Pointing at a column shows its value; a table
 * under the chart lists every number. Columns ease to their new height.
 */
export function ColumnChart({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  max,
  tableLabel = "표로 보기",
}: ColumnChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const top = max ?? Math.max(...data.map((datum) => datum.value), 1);
  const current = active === null ? null : data[active];
  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div aria-hidden="true" className="relative mt-3 ml-8 h-36 border-b border-slate-300">
        {[0.5, 1].map((ratio) => (
          <span
            key={ratio}
            className="absolute inset-x-0 border-t border-slate-200"
            style={{ bottom: `${ratio * 100}%` }}
          >
            <span className="absolute -top-2 -left-8 w-7 text-right text-[10px] text-slate-500">
              {format(top * ratio)}
            </span>
          </span>
        ))}
        <div
          className="absolute inset-0 flex items-end gap-[2px] px-1"
          onPointerLeave={() => setActive(null)}
        >
          {data.map((datum, index) => (
            <span
              key={datum.label}
              className="flex h-full flex-1 items-end justify-center"
              onPointerEnter={() => setActive(index)}
            >
              <span
                className={`w-3/5 rounded-t bg-blue-600 transition-[height] duration-500 motion-reduce:transition-none ${active === index ? "bg-blue-500" : ""}`}
                style={{ height: `${(datum.value / top) * 100}%` }}
              />
            </span>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="ml-8 flex px-1 text-[10px] text-slate-500">
        {data.map((datum) => (
          <span key={datum.label} className="flex-1 text-center">
            {datum.label}
          </span>
        ))}
      </div>
      <p aria-hidden="true" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {current ? `${current.label} · ${format(current.value)}` : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              <th scope="col" className="font-normal">
                값
              </th>
            </tr>
          </thead>
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
