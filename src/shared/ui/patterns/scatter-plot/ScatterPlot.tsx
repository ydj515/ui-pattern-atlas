import { useId, useState, type PointerEvent } from "react";

export interface ScatterPoint {
  readonly x: number;
  readonly y: number;
}

export interface ScatterPlotProps {
  readonly title: string;
  readonly points: readonly ScatterPoint[];
  readonly xLabel: string;
  readonly yLabel: string;
  readonly xMax: number;
  readonly yMax: number;
  readonly describe: (point: ScatterPoint) => string;
  /** Dashed lines at the mean of each axis. */
  readonly showMean?: boolean;
  readonly meanLabel?: (x: number, y: number) => string;
  readonly tableLabel?: string;
}

const W = 320;
const H = 200;
const PAD = { top: 12, right: 16, bottom: 28, left: 32 };

/**
 * Dots placed by two values, to show whether they move together and which points sit
 * apart. Pointing anywhere picks the nearest dot and reads it out; optional mean lines
 * split the plot into quadrants. A table lists every point.
 */
export function ScatterPlot({
  title,
  points,
  xLabel,
  yLabel,
  xMax,
  yMax,
  describe,
  showMean = false,
  meanLabel = (x, y) => `평균 ${x} · ${y}`,
  tableLabel = "표로 보기",
}: ScatterPlotProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const x = (value: number) => PAD.left + (value / xMax) * (W - PAD.left - PAD.right);
  const y = (value: number) => PAD.top + (1 - value / yMax) * (H - PAD.top - PAD.bottom);
  const meanX = points.reduce((sum, p) => sum + p.x, 0) / (points.length || 1);
  const meanY = points.reduce((sum, p) => sum + p.y, 0) / (points.length || 1);

  function handlePointerMove(event: PointerEvent<SVGSVGElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - box.left) / box.width) * W;
    const py = ((event.clientY - box.top) / box.height) * H;
    let best = -1;
    let bestDistance = 24 * 24;
    points.forEach((point, index) => {
      const distance = (x(point.x) - px) ** 2 + (y(point.y) - py) ** 2;
      if (distance < bestDistance) {
        best = index;
        bestDistance = distance;
      }
    });
    setActive(best >= 0 ? best : null);
  }

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        className="mt-2 w-full touch-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActive(null)}
      >
        <line
          x1={PAD.left}
          x2={W - PAD.right}
          y1={H - PAD.bottom}
          y2={H - PAD.bottom}
          className="stroke-slate-300"
        />
        <line
          x1={PAD.left}
          x2={PAD.left}
          y1={PAD.top}
          y2={H - PAD.bottom}
          className="stroke-slate-300"
        />
        <text x={W - PAD.right} y={H - 6} textAnchor="end" className="fill-slate-500 text-[10px]">
          {xLabel} →
        </text>
        <text x={4} y={PAD.top + 4} className="fill-slate-500 text-[10px]">
          ↑ {yLabel}
        </text>
        {showMean ? (
          <g className="stroke-slate-400" strokeDasharray="4 3">
            <line x1={x(meanX)} x2={x(meanX)} y1={PAD.top} y2={H - PAD.bottom} />
            <line x1={PAD.left} x2={W - PAD.right} y1={y(meanY)} y2={y(meanY)} />
          </g>
        ) : null}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={x(point.x)}
            cy={y(point.y)}
            r={active === index ? 6 : 4}
            strokeWidth={2}
            className={`stroke-white ${active === index ? "fill-blue-800" : "fill-blue-600"}`}
          />
        ))}
      </svg>
      <p aria-hidden="true" className="h-4 text-xs text-slate-700 tabular-nums">
        {active !== null && points[active]
          ? describe(points[active])
          : showMean
            ? meanLabel(Math.round(meanX * 10) / 10, Math.round(meanY * 10) / 10)
            : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal">
                {xLabel}
              </th>
              <th scope="col" className="font-normal">
                {yLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {points.map((point, index) => (
              <tr key={index}>
                <td>{point.x}</td>
                <td>{point.y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
