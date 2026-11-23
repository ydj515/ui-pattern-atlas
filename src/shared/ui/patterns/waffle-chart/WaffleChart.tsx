export interface WafflePart {
  readonly label: string;
  /** Whole percentage points; the parts should add up to 100 or less. */
  readonly percent: number;
}

export interface WaffleChartProps {
  readonly title: string;
  /** Up to three parts; whatever is left is drawn as empty grey squares. */
  readonly parts: readonly WafflePart[];
  readonly restLabel?: string;
}

const TONES = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];

/**
 * Waffle chart: 100 squares where each square is one percent, so a share reads as a
 * count ("68 of 100"). Squares fill row by row in the same order as the legend, which
 * also writes every percentage.
 */
export function WaffleChart({ title, parts, restLabel = "나머지" }: WaffleChartProps) {
  const cells = parts.flatMap((part, index) => Array.from({ length: part.percent }, () => index));
  const rest = Math.max(100 - cells.length, 0);
  return (
    <figure className="grid gap-3">
      <figcaption className="text-sm font-semibold text-slate-900">{title}</figcaption>
      <div className="flex items-start gap-4">
        <div aria-hidden="true" className="grid w-32 shrink-0 grid-cols-10 gap-[2px]">
          {Array.from({ length: 100 }, (_, index) => {
            const part = cells[index];
            return (
              <span
                key={index}
                className={`aspect-square rounded-[2px] transition-colors duration-300 ${part === undefined ? "bg-slate-200" : TONES[part]}`}
              />
            );
          })}
        </div>
        <ul className="grid gap-1.5 text-xs">
          {parts.map((part, index) => (
            <li key={part.label} className="flex items-center gap-1.5 text-slate-700">
              <span aria-hidden="true" className={`size-2.5 rounded-sm ${TONES[index]}`} />
              {part.label}
              <b className="text-slate-900 tabular-nums">{part.percent}%</b>
            </li>
          ))}
          {rest > 0 ? (
            <li className="flex items-center gap-1.5 text-slate-700">
              <span aria-hidden="true" className="size-2.5 rounded-sm bg-slate-200" />
              {restLabel}
              <b className="text-slate-900 tabular-nums">{rest}%</b>
            </li>
          ) : null}
        </ul>
      </div>
    </figure>
  );
}
