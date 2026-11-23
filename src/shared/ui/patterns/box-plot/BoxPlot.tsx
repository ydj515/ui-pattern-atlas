import { useId, useState } from "react";

export interface BoxGroup {
  readonly label: string;
  readonly values: readonly number[];
}

export interface BoxPlotProps {
  readonly title: string;
  readonly groups: readonly BoxGroup[];
  readonly min: number;
  readonly max: number;
  readonly format?: (value: number) => string;
  readonly labels?: {
    readonly median: string;
    readonly middle: string;
    readonly range: string;
    readonly outliers: string;
  };
  readonly tableLabel?: string;
}

export interface BoxStats {
  readonly low: number;
  readonly q1: number;
  readonly median: number;
  readonly q3: number;
  readonly high: number;
  readonly outliers: readonly number[];
}

function quantile(sorted: readonly number[], p: number) {
  const position = (sorted.length - 1) * p;
  const base = Math.floor(position);
  const next = sorted[base + 1] ?? sorted[base] ?? 0;
  return (sorted[base] ?? 0) + (position - base) * (next - (sorted[base] ?? 0));
}

/** Quartiles by linear interpolation; whiskers reach the furthest values within 1.5 × IQR. */
export function boxStats(values: readonly number[]): BoxStats {
  const sorted = [...values].sort((a, b) => a - b);
  const q1 = quantile(sorted, 0.25);
  const median = quantile(sorted, 0.5);
  const q3 = quantile(sorted, 0.75);
  const fence = (q3 - q1) * 1.5;
  const inside = sorted.filter((value) => value >= q1 - fence && value <= q3 + fence);
  return {
    low: inside[0] ?? q1,
    q1,
    median,
    q3,
    high: inside.at(-1) ?? q3,
    outliers: sorted.filter((value) => value < q1 - fence || value > q3 + fence),
  };
}

/**
 * Box plot: for each group the middle half of the values as a box, the median as a
 * line, whiskers to the usual range and dots for values far outside it. Good for
 * comparing spread, not just averages. Pointing at a row reads its numbers.
 */
export function BoxPlot({
  title,
  groups,
  min,
  max,
  format = (value) => String(Math.round(value * 10) / 10),
  labels = { median: "중앙값", middle: "가운데 50%", range: "범위", outliers: "동떨어진 값" },
  tableLabel = "표로 보기",
}: BoxPlotProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const stats = groups.map((group) => boxStats(group.values));
  const x = (value: number) => `${((value - min) / (max - min)) * 100}%`;
  const current = active === null ? null : stats[active];

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div aria-hidden="true" className="mt-3 grid gap-3" onPointerLeave={() => setActive(null)}>
        {groups.map((group, index) => {
          const s = stats[index];
          if (!s) return null;
          return (
            <div
              key={group.label}
              className="grid grid-cols-[2.5rem_1fr] items-center gap-2 text-xs"
              onPointerEnter={() => setActive(index)}
            >
              <span className="text-slate-600">{group.label}</span>
              <span className={`relative h-6 rounded ${active === index ? "bg-slate-50" : ""}`}>
                <span
                  className="absolute top-1/2 h-px bg-slate-500"
                  style={{ left: x(s.low), width: `calc(${x(s.high)} - ${x(s.low)})` }}
                />
                <span
                  className="absolute top-1.5 bottom-1.5 w-px bg-slate-500"
                  style={{ left: x(s.low) }}
                />
                <span
                  className="absolute top-1.5 bottom-1.5 w-px bg-slate-500"
                  style={{ left: x(s.high) }}
                />
                <span
                  className="absolute inset-y-0.5 rounded-sm border-2 border-blue-600 bg-blue-100"
                  style={{ left: x(s.q1), width: `calc(${x(s.q3)} - ${x(s.q1)})` }}
                />
                <span
                  className="absolute inset-y-0 w-0.5 bg-slate-900"
                  style={{ left: x(s.median) }}
                />
                {s.outliers.map((value) => (
                  <span
                    key={value}
                    className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-500 bg-white"
                    style={{ left: x(value) }}
                  />
                ))}
              </span>
            </div>
          );
        })}
        <div className="ml-12 flex justify-between text-[10px] text-slate-500">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      </div>
      <p aria-hidden="true" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {current && active !== null
          ? `${groups[active]?.label} · ${labels.median} ${format(current.median)} · ${labels.middle} ${format(current.q1)}~${format(current.q3)}`
          : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              <th scope="col" className="font-normal">
                {labels.median}
              </th>
              <th scope="col" className="font-normal">
                {labels.middle}
              </th>
              <th scope="col" className="font-normal">
                {labels.range}
              </th>
              <th scope="col" className="font-normal">
                {labels.outliers}
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => {
              const s = stats[index];
              if (!s) return null;
              return (
                <tr key={group.label}>
                  <th scope="row" className="font-normal text-slate-600">
                    {group.label}
                  </th>
                  <td>{format(s.median)}</td>
                  <td>
                    {format(s.q1)}~{format(s.q3)}
                  </td>
                  <td>
                    {format(s.low)}~{format(s.high)}
                  </td>
                  <td>{s.outliers.map(format).join(", ") || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
