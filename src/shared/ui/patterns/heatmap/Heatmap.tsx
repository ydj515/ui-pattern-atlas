import { useId, useState, type KeyboardEvent } from "react";

export interface HeatmapProps {
  readonly title: string;
  readonly rows: readonly string[];
  readonly columns: readonly string[];
  /** values[row][column] */
  readonly values: readonly (readonly number[])[];
  /** Readout for one cell, e.g. "화 18시 · 42건". */
  readonly describe: (row: string, column: string, value: number) => string;
  readonly lowLabel?: string;
  readonly highLabel?: string;
  readonly tableLabel?: string;
}

const STEPS = ["bg-blue-50", "bg-blue-200", "bg-blue-400", "bg-blue-600", "bg-blue-800"];

/**
 * Grid whose cells are shaded by value, one hue from light (low) to dark (high), with
 * the scale shown under it. Pointer or arrow keys move a highlighted cell and its
 * readout; a table under the chart lists every number.
 */
export function Heatmap({
  title,
  rows,
  columns,
  values,
  describe,
  lowLabel = "적음",
  highLabel = "많음",
  tableLabel = "표로 보기",
}: HeatmapProps) {
  const id = useId();
  const [active, setActive] = useState<readonly [number, number] | null>(null);
  const all = values.flat();
  const min = Math.min(...all);
  const max = Math.max(...all);
  const step = (value: number) =>
    STEPS[
      Math.min(STEPS.length - 1, Math.floor(((value - min) / (max - min || 1)) * STEPS.length))
    ];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const moves: Record<string, readonly [number, number]> = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    setActive((current) =>
      current
        ? [
            Math.min(rows.length - 1, Math.max(0, current[0] + move[0])),
            Math.min(columns.length - 1, Math.max(0, current[1] + move[1])),
          ]
        : [0, 0],
    );
  }

  const readout =
    active && values[active[0]]?.[active[1]] !== undefined
      ? describe(rows[active[0]] ?? "", columns[active[1]] ?? "", values[active[0]]![active[1]]!)
      : "";

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div
        tabIndex={0}
        role="group"
        aria-label={`${title}, 화살표로 칸 이동`}
        onKeyDown={handleKeyDown}
        onBlur={() => setActive(null)}
        onPointerLeave={() => setActive(null)}
        className="mt-3 grid gap-[2px] rounded text-[10px] text-slate-500 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        style={{ gridTemplateColumns: `1.5rem repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        <span />
        {columns.map((column) => (
          <span key={column} aria-hidden="true" className="text-center">
            {column}
          </span>
        ))}
        {rows.map((row, r) => (
          <div key={row} aria-hidden="true" className="contents">
            <span className="self-center">{row}</span>
            {columns.map((column, c) => {
              const on = active?.[0] === r && active[1] === c;
              return (
                <span
                  key={column}
                  onPointerEnter={() => setActive([r, c])}
                  className={`h-6 rounded-[3px] ${step(values[r]?.[c] ?? min)} ${on ? "ring-2 ring-slate-900 ring-offset-1" : ""}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-600">
        <p aria-live="polite" className="h-4 text-slate-800">
          {readout}
        </p>
        <span aria-hidden="true" className="flex shrink-0 items-center gap-1">
          {lowLabel}
          {STEPS.map((tone) => (
            <span key={tone} className={`size-2.5 rounded-sm ${tone}`} />
          ))}
          {highLabel}
        </span>
      </div>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              {columns.map((column) => (
                <th key={column} scope="col" className="font-normal">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row}>
                <th scope="row" className="font-normal text-slate-600">
                  {row}
                </th>
                {columns.map((column, c) => (
                  <td key={column}>{values[r]?.[c]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
