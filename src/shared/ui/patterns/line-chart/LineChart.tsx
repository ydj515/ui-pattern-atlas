import { useId, useState, type KeyboardEvent, type PointerEvent } from "react";

export interface LineSeries {
  readonly name: string;
  readonly values: readonly number[];
}

export interface LineChartProps {
  readonly title: string;
  /** X-axis labels, one per value, in order. */
  readonly labels: readonly string[];
  /** One to three series; the first is drawn in the strongest colour. */
  readonly series: readonly LineSeries[];
  readonly format?: (value: number) => string;
  readonly tableLabel?: string;
}

const STROKES = ["stroke-blue-600", "stroke-orange-500", "stroke-teal-500"];
const FILLS = ["fill-blue-600", "fill-orange-500", "fill-teal-500"];
const BG = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];
const W = 320;
const H = 160;
const PAD = { top: 12, right: 44, bottom: 22, left: 34 };

function niceMax(value: number) {
  const step = 10 ** Math.floor(Math.log10(Math.max(value, 1)));
  return Math.ceil(value / step) * step;
}

/**
 * Line chart for values along an ordered axis such as months. Pointer or ←/→ moves a
 * crosshair whose readout lists every series at that point; each line is named at its
 * end and in the legend, and a table under the chart lists every number.
 */
export function LineChart({
  title,
  labels,
  series,
  format = (value) => value.toLocaleString("ko-KR"),
  tableLabel = "표로 보기",
}: LineChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const top = niceMax(Math.max(...series.flatMap((s) => s.values)));
  const step = (W - PAD.left - PAD.right) / Math.max(labels.length - 1, 1);
  const x = (index: number) => PAD.left + index * step;
  const y = (value: number) => PAD.top + (1 - value / top) * (H - PAD.top - PAD.bottom);

  function handlePointerMove(event: PointerEvent<SVGSVGElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - box.left) / box.width) * W;
    setActive(Math.min(labels.length - 1, Math.max(0, Math.round((px - PAD.left) / step))));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    setActive((current) =>
      Math.min(
        labels.length - 1,
        Math.max(0, (current ?? (delta > 0 ? -1 : labels.length)) + delta),
      ),
    );
  }

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      {series.length > 1 ? (
        <ul className="mt-2 flex gap-3 text-xs text-slate-600">
          {series.map((s, index) => (
            <li key={s.name} className="flex items-center gap-1">
              <span aria-hidden="true" className={`h-0.5 w-3 rounded ${BG[index]}`} />
              {s.name}
            </li>
          ))}
        </ul>
      ) : null}
      <div
        tabIndex={0}
        role="group"
        aria-label={`${title}, 좌우 화살표로 값 보기`}
        onKeyDown={handleKeyDown}
        onBlur={() => setActive(null)}
        className="mt-2 rounded focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          aria-hidden="true"
          className="w-full touch-none"
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setActive(null)}
        >
          {[0, 0.5, 1].map((ratio) => (
            <g key={ratio}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(top * ratio)}
                y2={y(top * ratio)}
                className="stroke-slate-200"
              />
              <text
                x={PAD.left - 6}
                y={y(top * ratio)}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-slate-500 text-[9px]"
              >
                {format(top * ratio)}
              </text>
            </g>
          ))}
          {labels.map((label, index) => (
            <text
              key={label}
              x={x(index)}
              y={H - 6}
              textAnchor="middle"
              className="fill-slate-500 text-[9px]"
            >
              {label}
            </text>
          ))}
          {active !== null ? (
            <line
              x1={x(active)}
              x2={x(active)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              className="stroke-slate-400"
            />
          ) : null}
          {series.map((s, index) => {
            const last = s.values.length - 1;
            return (
              <g key={s.name}>
                <polyline
                  points={s.values.map((value, i) => `${x(i)},${y(value)}`).join(" ")}
                  fill="none"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className={STROKES[index]}
                />
                <text
                  x={x(last) + 6}
                  y={y(s.values[last] ?? 0)}
                  dominantBaseline="middle"
                  className="fill-slate-700 text-[9px]"
                >
                  {s.name}
                </text>
                {active !== null ? (
                  <circle
                    cx={x(active)}
                    cy={y(s.values[active] ?? 0)}
                    r={4}
                    strokeWidth={2}
                    className={`stroke-white ${FILLS[index]}`}
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
      <p aria-live="polite" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {active !== null
          ? `${labels[active]} · ${series.map((s) => `${s.name} ${format(s.values[active] ?? 0)}`).join(", ")}`
          : ""}
      </p>
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
            {labels.map((label, index) => (
              <tr key={label}>
                <th scope="row" className="font-normal text-slate-600">
                  {label}
                </th>
                {series.map((s) => (
                  <td key={s.name}>{format(s.values[index] ?? 0)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
