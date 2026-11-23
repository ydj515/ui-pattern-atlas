import { useId, useState } from "react";

export interface BubbleDatum {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  /** Drawn as the bubble's area, not its radius. */
  readonly size: number;
}

export interface BubbleChartProps {
  readonly title: string;
  readonly data: readonly BubbleDatum[];
  readonly xLabel: string;
  readonly yLabel: string;
  readonly sizeLabel: string;
  readonly describe: (datum: BubbleDatum) => string;
  readonly sizeNote?: (sizeLabel: string) => string;
  readonly xMax?: number;
  readonly yMax?: number;
  readonly tableLabel?: string;
}

const W = 320;
const H = 200;
const PAD = { top: 12, right: 16, bottom: 28, left: 36 };

/**
 * Bubbles placed by two values with a third as area, for comparing groups on three
 * measures at once. Overlaps stay readable with translucent fills and a surface ring;
 * pointing at a bubble brings it forward and reads it out. A table lists every number.
 */
export function BubbleChart({
  title,
  data,
  xLabel,
  yLabel,
  sizeLabel,
  describe,
  sizeNote = (label) => `원 크기: ${label}`,
  xMax,
  yMax,
  tableLabel = "표로 보기",
}: BubbleChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const maxX = xMax ?? Math.max(...data.map((d) => d.x)) * 1.1;
  const maxY = yMax ?? Math.max(...data.map((d) => d.y)) * 1.1;
  const maxSize = Math.max(...data.map((d) => d.size), 1);
  const x = (value: number) => PAD.left + (value / maxX) * (W - PAD.left - PAD.right);
  const y = (value: number) => PAD.top + (1 - value / maxY) * (H - PAD.top - PAD.bottom);
  const r = (size: number) => 4 + Math.sqrt(size / maxSize) * 24;
  const order = data
    .map((datum, index) => ({ datum, index }))
    .sort((a, b) =>
      a.index === active ? 1 : b.index === active ? -1 : b.datum.size - a.datum.size,
    );

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <p className="mt-1 text-xs text-slate-500">{sizeNote(sizeLabel)}</p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        className="mt-1 w-full"
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
        {order.map(({ datum, index }) => (
          <g key={datum.label} onPointerEnter={() => setActive(index)}>
            <circle
              cx={x(datum.x)}
              cy={y(datum.y)}
              r={r(datum.size)}
              strokeWidth={2}
              className={`stroke-white ${active === index ? "fill-blue-600" : "fill-blue-600/45"} transition-colors`}
            />
            <text
              x={x(datum.x)}
              y={y(datum.y)}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`pointer-events-none text-[10px] ${active === index ? "fill-white font-semibold" : "fill-slate-900"}`}
            >
              {datum.label}
            </text>
          </g>
        ))}
      </svg>
      <p aria-hidden="true" className="h-4 text-xs text-slate-700">
        {active !== null && data[active] ? describe(data[active]) : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <thead>
            <tr className="text-slate-500">
              <th scope="col" className="font-normal" />
              <th scope="col" className="font-normal">
                {xLabel}
              </th>
              <th scope="col" className="font-normal">
                {yLabel}
              </th>
              <th scope="col" className="font-normal">
                {sizeLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum) => (
              <tr key={datum.label}>
                <th scope="row" className="font-normal text-slate-600">
                  {datum.label}
                </th>
                <td>{datum.x}</td>
                <td>{datum.y}</td>
                <td>{datum.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
