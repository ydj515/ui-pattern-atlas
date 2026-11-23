import { useId, useState } from "react";

export interface VennSet {
  readonly key: string;
  readonly label: string;
}

export interface VennRegion {
  /** Keys of the sets this region belongs to, e.g. ["email", "push"]. */
  readonly sets: readonly string[];
  readonly value: number;
}

export interface VennDiagramProps {
  readonly title: string;
  /** Two or three sets. Circles are the same size; the numbers carry the sizes. */
  readonly sets: readonly VennSet[];
  /** Every region with its exclusive count: only A, A and B only, all three… */
  readonly regions: readonly VennRegion[];
  readonly format?: (value: number) => string;
  readonly describe?: (set: string, total: string, shared: string) => string;
}

const CIRCLES = {
  2: [
    [95, 100],
    [145, 100],
  ],
  3: [
    [95, 82],
    [145, 82],
    [120, 125],
  ],
} as const;
const STROKES = ["stroke-blue-600", "stroke-orange-500", "stroke-teal-500"];
const FILLS = ["fill-blue-600", "fill-orange-500", "fill-teal-500"];
const SWATCH = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];

function labelPoint(members: readonly number[], centres: readonly (readonly [number, number])[]) {
  if (members.length === centres.length && centres.length > 1) {
    const x = centres.reduce((sum, [cx]) => sum + cx, 0) / centres.length;
    const y = centres.reduce((sum, [, cy]) => sum + cy, 0) / centres.length;
    return [x, y + (centres.length === 3 ? 4 : 0)] as const;
  }
  const mx = centres.reduce((sum, [cx]) => sum + cx, 0) / centres.length;
  const my = centres.reduce((sum, [, cy]) => sum + cy, 0) / centres.length;
  const ax = members.reduce((sum, index) => sum + (centres[index]?.[0] ?? 0), 0) / members.length;
  const ay = members.reduce((sum, index) => sum + (centres[index]?.[1] ?? 0), 0) / members.length;
  const push = members.length === 1 ? 1.1 : 1.6;
  return [ax + (ax - mx) * push, ay + (ay - my) * push] as const;
}

/**
 * Two or three overlapping circles with the count of every region written inside, for
 * how groups overlap. Choosing a set in the legend outlines it and reads out its total
 * and how many belong to every set.
 */
export function VennDiagram({
  title,
  sets,
  regions,
  format = (value) => value.toLocaleString("ko-KR"),
  describe = (set, total, shared) => `${set} ${total}, 모두 겹친 부분 ${shared}`,
}: VennDiagramProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const centres = CIRCLES[sets.length === 2 ? 2 : 3];
  const indexOf = (key: string) => sets.findIndex((set) => set.key === key);
  const totalOf = (key: string) =>
    regions
      .filter((region) => region.sets.includes(key))
      .reduce((sum, region) => sum + region.value, 0);
  const shared = regions.find((region) => region.sets.length === sets.length)?.value ?? 0;
  const current = active === null ? null : sets[active];

  return (
    <figure aria-labelledby={id} className="grid gap-2">
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <svg viewBox="0 0 240 200" aria-hidden="true" className="w-full max-w-64 justify-self-center">
        {centres.map(([cx, cy], index) => (
          <circle
            key={sets[index]?.key ?? index}
            cx={cx}
            cy={cy}
            r={60}
            strokeWidth={active === index ? 3 : 1.5}
            fillOpacity={active === null || active === index ? 0.18 : 0.06}
            className={`${FILLS[index]} ${STROKES[index]} transition-[fill-opacity] duration-200`}
          />
        ))}
        {regions.map((region) => {
          const members = region.sets.map(indexOf).filter((index) => index >= 0);
          const [x, y] = labelPoint(members, centres);
          return (
            <text
              key={region.sets.join("+")}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-900 text-[11px] font-semibold"
            >
              {format(region.value)}
            </text>
          );
        })}
      </svg>
      <ul className="flex flex-wrap justify-center gap-1.5 text-xs">
        {sets.map((set, index) => (
          <li key={set.key}>
            <button
              type="button"
              aria-pressed={active === index}
              onClick={() => setActive((value) => (value === index ? null : index))}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-slate-700 aria-pressed:border-slate-900 aria-pressed:font-semibold aria-pressed:text-slate-900"
            >
              <span aria-hidden="true" className={`size-2.5 rounded-full ${SWATCH[index]}`} />
              {set.label}
            </button>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="h-4 text-center text-xs text-slate-700">
        {current ? describe(current.label, format(totalOf(current.key)), format(shared)) : ""}
      </p>
      <ul className="sr-only">
        {regions.map((region) => (
          <li key={region.sets.join("+")}>
            {region.sets.map((key) => sets[indexOf(key)]?.label).join(", ")}: {format(region.value)}
          </li>
        ))}
      </ul>
    </figure>
  );
}
