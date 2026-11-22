import { useEffect, useRef } from "react";

export interface StreakDay {
  readonly label: string;
  readonly done: boolean;
}

export interface StreakProps {
  readonly count: number;
  readonly days: readonly StreakDay[];
  /** e.g. (count) => `${count}일 연속`. */
  readonly countLabel: (count: number) => string;
  readonly doneLabel?: string;
  readonly missedLabel?: string;
}

/**
 * Days-in-a-row counter with this week's days marked. The number pops once when it
 * grows (not for reduced motion), and each day has a text state, so the week reads
 * without the colors.
 */
export function Streak({
  count,
  days,
  countLabel,
  doneLabel = "기록함",
  missedLabel = "기록 없음",
}: StreakProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const previous = useRef(count);

  useEffect(() => {
    if (
      count > previous.current &&
      !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      numberRef.current?.animate?.(
        [{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }],
        { duration: 400, easing: "ease-out" },
      );
    }
    previous.current = count;
  }, [count]);

  return (
    <section className="rounded-2xl bg-white p-4">
      <p aria-live="polite" className="text-2xl font-bold text-slate-900">
        <span ref={numberRef} className="inline-block">
          {countLabel(count)}
        </span>
      </p>
      <ol className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-slate-600">
        {days.map((day) => (
          <li key={day.label} className="grid justify-items-center gap-1">
            <span
              aria-hidden="true"
              className={`size-7 rounded-full ${day.done ? "bg-orange-500" : "border-2 border-dashed border-slate-300"}`}
            />
            {day.label}
            <span className="sr-only">{day.done ? doneLabel : missedLabel}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
