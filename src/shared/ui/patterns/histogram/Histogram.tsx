import { useId, useState } from "react";

export interface HistogramProps {
  readonly title: string;
  /** Raw values; the chart counts them into bins. */
  readonly values: readonly number[];
  readonly min: number;
  readonly max: number;
  readonly binSize: number;
  /** Name of one bin, e.g. "2만~3만 원". */
  readonly formatBin: (start: number, end: number) => string;
  readonly formatCount?: (count: number) => string;
  /** Labels the two ends of the axis. */
  readonly formatEdge?: (value: number) => string;
  readonly tableLabel?: string;
}

/**
 * Distribution of many values: the range is cut into equal bins and each bar is how
 * many values fall in it. Bars touch (1px gap) because the bins are continuous. Pointing
 * at a bar reads its range and count; a table lists every bin.
 */
export function Histogram({
  title,
  values,
  min,
  max,
  binSize,
  formatBin,
  formatCount = (count) => `${count}건`,
  formatEdge = (value) => String(value),
  tableLabel = "표로 보기",
}: HistogramProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const bins = Array.from({ length: Math.ceil((max - min) / binSize) }, (_, index) => {
    const start = min + index * binSize;
    const end = start + binSize;
    const count = values.filter(
      (value) => value >= start && (value < end || (end >= max && value <= max)),
    ).length;
    return { start, end, count };
  });
  const top = Math.max(...bins.map((bin) => bin.count), 1);
  const current = active === null ? null : bins[active];

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div
        aria-hidden="true"
        className="mt-3 flex h-32 items-end gap-px border-b border-slate-300"
        onPointerLeave={() => setActive(null)}
      >
        {bins.map((bin, index) => (
          <span
            key={bin.start}
            className="flex h-full flex-1 items-end"
            onPointerEnter={() => setActive(index)}
          >
            <span
              className={`w-full rounded-t-[3px] transition-[height] duration-300 motion-reduce:transition-none ${active === index ? "bg-blue-800" : "bg-blue-600"}`}
              style={{ height: `${(bin.count / top) * 100}%` }}
            />
          </span>
        ))}
      </div>
      <div aria-hidden="true" className="flex justify-between text-[10px] text-slate-500">
        <span>{formatEdge(min)}</span>
        <span>{formatEdge(max)}</span>
      </div>
      <p aria-hidden="true" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {current ? `${formatBin(current.start, current.end)} · ${formatCount(current.count)}` : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <tbody>
            {bins.map((bin) => (
              <tr key={bin.start}>
                <th scope="row" className="font-normal text-slate-600">
                  {formatBin(bin.start, bin.end)}
                </th>
                <td>{formatCount(bin.count)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
