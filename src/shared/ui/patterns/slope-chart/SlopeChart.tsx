import { useId, useState } from "react";

export interface SlopeItem {
  readonly label: string;
  readonly before: number;
  readonly after: number;
}

export interface SlopeChartProps {
  readonly title: string;
  readonly items: readonly SlopeItem[];
  readonly beforeLabel: string;
  readonly afterLabel: string;
  readonly format?: (value: number) => string;
  readonly min?: number;
  readonly max?: number;
}

const W = 300;
const H = 180;
const LEFT = 92;
const RIGHT = 208;
const GAP = 12;

/** Pushes label positions apart so close values never print on top of each other. */
function dodge(positions: readonly number[]) {
  const order = positions.map((y, index) => ({ y, index })).sort((a, b) => a.y - b.y);
  const placed: number[] = [];
  order.forEach((item, rank) => {
    const previous = rank > 0 ? (placed[order[rank - 1]!.index] ?? -Infinity) : -Infinity;
    placed[item.index] = Math.max(item.y, previous + GAP);
  });
  return placed;
}

/**
 * Slope chart: each item's value at two points in time joined by a line, so rises,
 * falls and changes in rank stand out. Labels sit at both ends; pointing at an item
 * highlights its line and greys the others.
 */
export function SlopeChart({
  title,
  items,
  beforeLabel,
  afterLabel,
  format = (value) => value.toLocaleString("ko-KR"),
  min,
  max,
}: SlopeChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const all = items.flatMap((item) => [item.before, item.after]);
  const low = min ?? Math.min(...all);
  const high = max ?? Math.max(...all);
  const y = (value: number) => 28 + (1 - (value - low) / (high - low || 1)) * (H - 44);
  const leftLabels = dodge(items.map((item) => y(item.before)));
  const rightLabels = dodge(items.map((item) => y(item.after)));

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        className="mt-2 w-full"
        onPointerLeave={() => setActive(null)}
      >
        <text x={LEFT} y={12} textAnchor="middle" className="fill-slate-500 text-[10px]">
          {beforeLabel}
        </text>
        <text x={RIGHT} y={12} textAnchor="middle" className="fill-slate-500 text-[10px]">
          {afterLabel}
        </text>
        <line x1={LEFT} x2={LEFT} y1={20} y2={H - 8} className="stroke-slate-200" />
        <line x1={RIGHT} x2={RIGHT} y1={20} y2={H - 8} className="stroke-slate-200" />
        {items.map((item, index) => {
          const up = item.after >= item.before;
          const dim = active !== null && active !== index;
          return (
            <g
              key={item.label}
              onPointerEnter={() => setActive(index)}
              style={{ opacity: dim ? 0.25 : 1 }}
              className="transition-opacity"
            >
              <line
                x1={LEFT}
                x2={RIGHT}
                y1={y(item.before)}
                y2={y(item.after)}
                strokeWidth={active === index ? 3 : 2}
                className={up ? "stroke-blue-600" : "stroke-orange-500"}
              />
              <circle
                cx={LEFT}
                cy={y(item.before)}
                r={4}
                className={up ? "fill-blue-600" : "fill-orange-500"}
              />
              <circle
                cx={RIGHT}
                cy={y(item.after)}
                r={4}
                className={up ? "fill-blue-600" : "fill-orange-500"}
              />
              <text
                x={LEFT - 8}
                y={leftLabels[index]}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-slate-800 text-[10px]"
              >
                {item.label} {format(item.before)}
              </text>
              <text
                x={RIGHT + 8}
                y={rightLabels[index]}
                dominantBaseline="middle"
                className="fill-slate-800 text-[10px]"
              >
                {format(item.after)}
              </text>
            </g>
          );
        })}
      </svg>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.label}>
            {item.label}: {beforeLabel} {format(item.before)}, {afterLabel} {format(item.after)}
          </li>
        ))}
      </ul>
    </figure>
  );
}
