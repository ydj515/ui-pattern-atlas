import { useId, useState, type KeyboardEvent } from "react";

export interface CalendarHeatmapProps {
  readonly title: string;
  /** Values for day 1, 2, 3… of the month. */
  readonly values: readonly number[];
  /** Day of the week the 1st falls on, 0 = Monday … 6 = Sunday. */
  readonly firstWeekday: number;
  readonly weekdays?: readonly string[];
  readonly describe: (day: number, value: number) => string;
  readonly lowLabel?: string;
  readonly highLabel?: string;
}

const STEPS = [
  "bg-slate-100",
  "bg-emerald-200",
  "bg-emerald-400",
  "bg-emerald-600",
  "bg-emerald-800",
];

/**
 * A month laid out as a calendar (weeks as columns, weekdays as rows) with each day
 * shaded by its value, so habits and weekly rhythms show. Days with no value stay grey.
 * Pointer or arrow keys move between days and read the value.
 */
export function CalendarHeatmap({
  title,
  values,
  firstWeekday,
  weekdays = ["월", "화", "수", "목", "금", "토", "일"],
  describe,
  lowLabel = "적음",
  highLabel = "많음",
}: CalendarHeatmapProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...values, 1);
  const weeks = Math.ceil((firstWeekday + values.length) / 7);
  const step = (value: number) =>
    value <= 0 ? STEPS[0] : STEPS[Math.min(4, 1 + Math.floor((value / max) * 3.999))];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const moves: Record<string, number> = {
      ArrowUp: -1,
      ArrowDown: 1,
      ArrowLeft: -7,
      ArrowRight: 7,
    };
    const move = moves[event.key];
    if (move === undefined) return;
    event.preventDefault();
    setActive((current) =>
      current === null ? 0 : Math.min(values.length - 1, Math.max(0, current + move)),
    );
  }

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <div className="mt-3 flex gap-2 text-[10px] text-slate-500">
        <div aria-hidden="true" className="grid grid-rows-7 gap-[3px]">
          {weekdays.map((day) => (
            <span key={day} className="flex h-4 items-center">
              {day}
            </span>
          ))}
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label={`${title}, 화살표로 날짜 이동`}
          onKeyDown={handleKeyDown}
          onBlur={() => setActive(null)}
          onPointerLeave={() => setActive(null)}
          className="grid grid-flow-col grid-rows-7 gap-[3px] rounded focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          style={{ gridTemplateColumns: `repeat(${weeks}, 1rem)` }}
        >
          {Array.from({ length: weeks * 7 }, (_, cell) => {
            const day = cell - firstWeekday;
            const value = values[day];
            if (day < 0 || value === undefined) return <span key={cell} aria-hidden="true" />;
            return (
              <span
                key={cell}
                aria-hidden="true"
                onPointerEnter={() => setActive(day)}
                className={`size-4 rounded-[3px] ${step(value)} ${active === day ? "ring-2 ring-slate-900 ring-offset-1" : ""}`}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-600">
        <p aria-live="polite" className="h-4 text-slate-800">
          {active !== null ? describe(active + 1, values[active] ?? 0) : ""}
        </p>
        <span aria-hidden="true" className="flex shrink-0 items-center gap-1">
          {lowLabel}
          {STEPS.map((tone) => (
            <span key={tone} className={`size-2.5 rounded-sm ${tone}`} />
          ))}
          {highLabel}
        </span>
      </div>
    </figure>
  );
}
