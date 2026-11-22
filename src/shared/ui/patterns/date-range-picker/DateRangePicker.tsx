import { useState } from "react";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const monthTitle = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" });
const dayFormat = new Intl.DateTimeFormat("ko-KR", {
  month: "long",
  day: "numeric",
  weekday: "short",
});

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const sameDay = (a: Date, b: Date) => startOfDay(a).getTime() === startOfDay(b).getTime();

function monthCells(view: Date) {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: first.getDay() }, () => null),
    ...Array.from(
      { length: days },
      (_, index) => new Date(view.getFullYear(), view.getMonth(), index + 1),
    ),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export interface DateRange {
  readonly start: Date | null;
  readonly end: Date | null;
}

export interface DateRangePickerProps {
  readonly value: DateRange;
  readonly onChange: (range: DateRange) => void;
  /** First month shown. */
  readonly month: Date;
  /** Days before this cannot be picked (e.g. today). */
  readonly min?: Date;
  readonly startLabel?: string;
  readonly endLabel?: string;
  readonly insideLabel?: string;
  readonly weekdays?: readonly string[];
  readonly formatDay?: (date: Date) => string;
  readonly formatMonth?: (date: Date) => string;
}

/**
 * Month grid for picking a start and an end day (check-in and check-out).
 *
 * The first click sets the start, the second the end; a click before the start starts
 * over. While choosing the end, hovering previews the range. Each day's name says
 * whether it is the start, the end or inside the range.
 */
export function DateRangePicker({
  value,
  onChange,
  month,
  min,
  startLabel = "시작",
  endLabel = "종료",
  insideLabel = "선택 기간",
  weekdays = WEEKDAYS,
  formatDay = (date) => dayFormat.format(date),
  formatMonth = (date) => monthTitle.format(date),
}: DateRangePickerProps) {
  const [view, setView] = useState(new Date(month.getFullYear(), month.getMonth(), 1));
  const [hover, setHover] = useState<Date | null>(null);
  const { start, end } = value;
  const previewEnd = end ?? (start && hover && hover > start ? hover : null);

  function pick(date: Date) {
    if (!start || end || date <= start) onChange({ start: date, end: null });
    else onChange({ start, end: date });
  }

  return (
    <div className="w-72 rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="이전 달"
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
          className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <h3 aria-live="polite" className="text-sm font-semibold text-slate-900">
          {formatMonth(view)}
        </h3>
        <button
          type="button"
          aria-label="다음 달"
          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
          className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="mt-2 grid grid-cols-7 text-center text-xs text-slate-500" aria-hidden="true">
        {weekdays.map((day) => (
          <span key={day} className="pb-1">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5 text-sm" onMouseLeave={() => setHover(null)}>
        {monthCells(view).map((date, index) => {
          if (!date) return <span key={index} />;
          const disabled = min ? date < startOfDay(min) : false;
          const isStart = start ? sameDay(date, start) : false;
          const isEnd = previewEnd ? sameDay(date, previewEnd) : false;
          const inside = start && previewEnd ? date > start && date < previewEnd : false;
          const role = isStart
            ? `, ${startLabel}`
            : isEnd && end
              ? `, ${endLabel}`
              : inside && end
                ? `, ${insideLabel}`
                : "";
          return (
            <button
              key={index}
              type="button"
              disabled={disabled}
              aria-pressed={isStart || (isEnd && end !== null)}
              aria-label={`${formatDay(date)}${role}`}
              onClick={() => pick(date)}
              onMouseEnter={() => setHover(date)}
              onFocus={() => setHover(date)}
              className={`h-8 text-slate-800 disabled:text-slate-300 ${
                isStart || isEnd
                  ? "rounded-md bg-blue-600 font-semibold text-white"
                  : inside
                    ? "bg-blue-50 text-blue-900"
                    : "rounded-md hover:bg-slate-100"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
