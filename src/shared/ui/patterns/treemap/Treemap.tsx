import { useId, useState } from "react";

export interface TreemapDatum {
  readonly label: string;
  readonly value: number;
}

export interface TreemapProps {
  readonly title: string;
  readonly data: readonly TreemapDatum[];
  readonly format?: (value: number) => string;
  readonly tableLabel?: string;
}

interface Rect {
  readonly index: number;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
}

const W = 300;
const H = 180;
const SHADES = [
  "fill-blue-800",
  "fill-blue-700",
  "fill-blue-600",
  "fill-blue-500",
  "fill-blue-400",
];

/** Squarified layout: rows of rectangles whose aspect ratios stay close to 1. */
function squarify(values: readonly number[]): Rect[] {
  const total = values.reduce((sum, value) => sum + value, 0) || 1;
  const areas = values.map((value) => (value / total) * W * H);
  const rects: Rect[] = [];
  let x = 0;
  let y = 0;
  let w = W;
  let h = H;
  let row: number[] = [];
  const worst = (indices: readonly number[], side: number) => {
    const sizes = indices.map((index) => areas[index] ?? 0);
    const sum = sizes.reduce((a, b) => a + b, 0);
    return Math.max(
      ...sizes.map((size) =>
        Math.max((side * side * size) / (sum * sum), (sum * sum) / (side * side * size)),
      ),
    );
  };
  const place = (indices: readonly number[]) => {
    const sum = indices.reduce((a, index) => a + (areas[index] ?? 0), 0);
    if (w >= h) {
      const width = sum / h;
      let cy = y;
      for (const index of indices) {
        const height = (areas[index] ?? 0) / width;
        rects.push({ index, x, y: cy, w: width, h: height });
        cy += height;
      }
      x += width;
      w -= width;
    } else {
      const height = sum / w;
      let cx = x;
      for (const index of indices) {
        const width = (areas[index] ?? 0) / height;
        rects.push({ index, x: cx, y, w: width, h: height });
        cx += width;
      }
      y += height;
      h -= height;
    }
  };
  for (let index = 0; index < areas.length; index += 1) {
    const side = Math.min(w, h);
    if (row.length === 0 || worst([...row, index], side) <= worst(row, side)) {
      row.push(index);
    } else {
      place(row);
      row = [index];
    }
  }
  if (row.length > 0) place(row);
  return rects;
}

/**
 * Nested-free treemap: one rectangle per item, its area proportional to the value, the
 * biggest first. Names and values are written inside rectangles large enough to hold
 * them; pointing at any rectangle reads it out, and a table lists every item.
 */
export function Treemap({
  title,
  data,
  format = (value) => value.toLocaleString("ko-KR"),
  tableLabel = "표로 보기",
}: TreemapProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const sorted = [...data].sort((a, b) => b.value - a.value);
  const total = sorted.reduce((sum, datum) => sum + datum.value, 0) || 1;
  const rects = squarify(sorted.map((datum) => datum.value));
  const current = active === null ? null : sorted[active];

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
        {rects.map((rect) => {
          const datum = sorted[rect.index];
          if (!datum) return null;
          const roomy = rect.w > 56 && rect.h > 30;
          return (
            <g key={datum.label} onPointerEnter={() => setActive(rect.index)}>
              <rect
                x={rect.x + 1}
                y={rect.y + 1}
                width={Math.max(rect.w - 2, 0)}
                height={Math.max(rect.h - 2, 0)}
                rx={3}
                className={`${SHADES[Math.min(rect.index, SHADES.length - 1)]} ${active === rect.index ? "opacity-85" : ""}`}
              />
              {roomy ? (
                <text
                  x={rect.x + 7}
                  y={rect.y + 16}
                  className="fill-white text-[11px] font-semibold"
                >
                  {datum.label}
                  <tspan x={rect.x + 7} dy={14} className="font-normal">
                    {format(datum.value)}
                  </tspan>
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
      <p aria-hidden="true" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {current
          ? `${current.label} · ${format(current.value)} (${Math.round((current.value / total) * 100)}%)`
          : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <tbody>
            {sorted.map((datum) => (
              <tr key={datum.label}>
                <th scope="row" className="font-normal text-slate-600">
                  {datum.label}
                </th>
                <td>{format(datum.value)}</td>
                <td>{Math.round((datum.value / total) * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
