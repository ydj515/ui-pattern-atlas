import { useId, useState, type KeyboardEvent, type PointerEvent } from "react";

export interface AreaChartProps {
  readonly title: string;
  readonly labels: readonly string[];
  readonly values: readonly number[];
  readonly format?: (value: number) => string;
  readonly tableLabel?: string;
}

const W = 320;
const H = 160;
const PAD = { top: 12, right: 12, bottom: 22, left: 34 };

function niceMax(value: number) {
  const step = 10 ** Math.floor(Math.log10(Math.max(value, 1)));
  return Math.ceil(value / step) * step;
}

/**
 * One series drawn as a line with the area below it filled, for volume over time from a
 * zero baseline. Pointer or ←/→ moves a crosshair and reads the value; a table under
 * the chart lists every number.
 */
export function AreaChart({
  title,
  labels,
  values,
  format = (value) => value.toLocaleString("ko-KR"),
  tableLabel = "표로 보기",
}: AreaChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const top = niceMax(Math.max(...values));
  const step = (W - PAD.left - PAD.right) / Math.max(values.length - 1, 1);
  const x = (index: number) => PAD.left + index * step;
  const y = (value: number) => PAD.top + (1 - value / top) * (H - PAD.top - PAD.bottom);
  const line = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const base = H - PAD.bottom;
  const labelEvery = Math.ceil(labels.length / 7);

  function handlePointerMove(event: PointerEvent<SVGSVGElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - box.left) / box.width) * W;
    setActive(Math.min(values.length - 1, Math.max(0, Math.round((px - PAD.left) / step))));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    setActive((current) =>
      Math.min(
        values.length - 1,
        Math.max(0, (current ?? (delta > 0 ? -1 : values.length)) + delta),
      ),
    );
  }

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
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
          {labels.map((label, index) =>
            index % labelEvery === 0 ? (
              <text
                key={label}
                x={x(index)}
                y={H - 6}
                textAnchor="middle"
                className="fill-slate-500 text-[9px]"
              >
                {label}
              </text>
            ) : null,
          )}
          <polygon
            points={`${x(0)},${base} ${line} ${x(values.length - 1)},${base}`}
            className="fill-blue-600/15"
          />
          <polyline
            points={line}
            fill="none"
            strokeWidth={2}
            strokeLinejoin="round"
            className="stroke-blue-600"
          />
          {active !== null ? (
            <g>
              <line
                x1={x(active)}
                x2={x(active)}
                y1={PAD.top}
                y2={base}
                className="stroke-slate-400"
              />
              <circle
                cx={x(active)}
                cy={y(values[active] ?? 0)}
                r={4}
                strokeWidth={2}
                className="fill-blue-600 stroke-white"
              />
            </g>
          ) : null}
        </svg>
      </div>
      <p aria-live="polite" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {active !== null ? `${labels[active]} · ${format(values[active] ?? 0)}` : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <tbody>
            {labels.map((label, index) => (
              <tr key={label}>
                <th scope="row" className="font-normal text-slate-600">
                  {label}
                </th>
                <td>{format(values[index] ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
