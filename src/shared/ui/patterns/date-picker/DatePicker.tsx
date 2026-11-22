import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const longDate = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
});
const monthTitle = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" });
const defaultFormatDay = (date: Date) => longDate.format(date);
const defaultFormatMonth = (date: Date) => monthTitle.format(date);

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
const addDays = (date: Date, days: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const addMonths = (date: Date, months: number) => {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), lastDay));
};

/** Weeks of the month; days of other months are null so the grid keeps its shape. */
function monthWeeks(view: Date) {
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
  return Array.from({ length: cells.length / 7 }, (_, week) => cells.slice(week * 7, week * 7 + 7));
}

export interface DatePickerProps {
  readonly label: string;
  readonly value: Date | null;
  readonly onChange: (date: Date) => void;
  /** Days before this cannot be picked. */
  readonly min?: Date;
  /** Marks today in the grid; pass a fixed date in tests and demos. */
  readonly today?: Date;
  readonly placeholder?: string;
  /** Column headers, Sunday first. */
  readonly weekdays?: readonly string[];
  readonly formatDay?: (date: Date) => string;
  readonly formatMonth?: (date: Date) => string;
}

/**
 * Button that opens a month grid for picking one day (WAI-ARIA date picker dialog).
 *
 * Arrow keys move by day and week, Page Up/Down by month, Home/End to the week's
 * ends; Enter picks; Escape closes and returns focus to the button.
 */
export function DatePicker({
  label,
  value,
  onChange,
  min,
  today = new Date(),
  placeholder = "날짜를 고르세요",
  weekdays = WEEKDAYS,
  formatDay = defaultFormatDay,
  formatMonth = defaultFormatMonth,
}: DatePickerProps) {
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gridRef = useRef<HTMLTableElement>(null);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(value ?? today);
  // Only opening and keyboard moves pull focus into the grid; the month buttons keep it.
  const focusGridRef = useRef(false);
  const isDisabled = (date: Date) =>
    min ? date < new Date(min.getFullYear(), min.getMonth(), min.getDate()) : false;

  useEffect(() => {
    if (!open || !focusGridRef.current) return;
    focusGridRef.current = false;
    gridRef.current?.querySelector<HTMLButtonElement>('button[tabindex="0"]')?.focus();
  }, [open, focused]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function pick(date: Date) {
    if (isDisabled(date)) return;
    onChange(date);
    close();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTableElement>) {
    const moves: Record<string, Date> = {
      ArrowLeft: addDays(focused, -1),
      ArrowRight: addDays(focused, 1),
      ArrowUp: addDays(focused, -7),
      ArrowDown: addDays(focused, 7),
      PageUp: addMonths(focused, -1),
      PageDown: addMonths(focused, 1),
      Home: addDays(focused, -focused.getDay()),
      End: addDays(focused, 6 - focused.getDay()),
    };
    const next = moves[event.key];
    if (next) {
      event.preventDefault();
      focusGridRef.current = true;
      setFocused(next);
    }
  }

  return (
    <div className="relative">
      <span id={`${id}-label`} className="text-sm font-medium text-slate-800">
        {label}
      </span>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={() => {
          focusGridRef.current = true;
          setFocused(value ?? today);
          setOpen((current) => !current);
        }}
        className="mt-1.5 flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm hover:bg-slate-50"
      >
        <span id={`${id}-value`} className={value ? "text-slate-900" : "text-slate-400"}>
          {value ? formatDay(value) : placeholder}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
          className="size-4 text-slate-500"
        >
          <rect x="3" y="4.5" width="14" height="12.5" rx="2" />
          <path d="M3 8.5h14M7 2.5v4M13 2.5v4" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <div
          role="dialog"
          aria-label={`${label} 달력`}
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
          className="absolute top-full left-0 z-20 mt-1 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="이전 달"
              onClick={() => setFocused(addMonths(focused, -1))}
              className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <h2 aria-live="polite" className="text-sm font-semibold text-slate-900">
              {formatMonth(focused)}
            </h2>
            <button
              type="button"
              aria-label="다음 달"
              onClick={() => setFocused(addMonths(focused, 1))}
              className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
          <table
            ref={gridRef}
            role="grid"
            aria-label={formatMonth(focused)}
            onKeyDown={handleKeyDown}
            className="mt-2 w-full table-fixed text-center text-sm"
          >
            <thead>
              <tr>
                {weekdays.map((day) => (
                  <th key={day} scope="col" className="pb-1 text-xs font-normal text-slate-500">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthWeeks(focused).map((week, index) => (
                <tr key={index}>
                  {week.map((date, day) =>
                    date ? (
                      <td key={day} className="p-0.5">
                        <button
                          type="button"
                          tabIndex={sameDay(date, focused) ? 0 : -1}
                          aria-selected={value ? sameDay(date, value) : false}
                          aria-current={sameDay(date, today) ? "date" : undefined}
                          aria-disabled={isDisabled(date) || undefined}
                          aria-label={formatDay(date)}
                          onClick={() => pick(date)}
                          className="grid size-8 w-full place-items-center rounded-md text-slate-800 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-[current=date]:font-bold aria-disabled:text-slate-300 aria-disabled:hover:bg-transparent aria-selected:bg-blue-600 aria-selected:text-white"
                        >
                          {date.getDate()}
                        </button>
                      </td>
                    ) : (
                      <td key={day} />
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
