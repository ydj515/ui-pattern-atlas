import { useState } from "react";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const monthTitle = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" });
const dayFormat = new Intl.DateTimeFormat("ko-KR", {
  month: "long",
  day: "numeric",
  weekday: "long",
});

export interface CalendarEvent {
  readonly id: string;
  /** "YYYY-MM-DD" */
  readonly date: string;
  readonly title: string;
  readonly time?: string;
}

export interface MonthCalendarProps {
  readonly month: Date;
  readonly events: readonly CalendarEvent[];
  readonly today?: Date;
  readonly emptyText?: string;
  readonly countLabel?: (count: number) => string;
  readonly weekdays?: readonly string[];
  readonly formatDay?: (date: Date) => string;
  readonly formatMonth?: (date: Date) => string;
}

const key = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

/**
 * Month view for looking at a schedule. Days with events show dots; choosing a day
 * lists its events underneath. Each day button's name includes the number of events,
 * so the dots are not the only signal.
 */
export function MonthCalendar({
  month,
  events,
  today = new Date(),
  emptyText = "일정이 없어요",
  countLabel = (count) => `일정 ${count}개`,
  weekdays = WEEKDAYS,
  formatDay = (date) => dayFormat.format(date),
  formatMonth = (date) => monthTitle.format(date),
}: MonthCalendarProps) {
  const [view, setView] = useState(new Date(month.getFullYear(), month.getMonth(), 1));
  const [selected, setSelected] = useState(key(today));
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
  const dayEvents = events.filter((event) => event.date === selected);

  return (
    <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-3">
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
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-0.5 text-sm">
        {cells.map((date, index) => {
          if (!date) return <span key={index} />;
          const count = events.filter((event) => event.date === key(date)).length;
          const isSelected = key(date) === selected;
          return (
            <button
              key={index}
              type="button"
              aria-pressed={isSelected}
              aria-current={key(date) === key(today) ? "date" : undefined}
              aria-label={`${formatDay(date)}${count > 0 ? `, ${countLabel(count)}` : ""}`}
              onClick={() => setSelected(key(date))}
              className="flex h-10 flex-col items-center justify-start rounded-md pt-1 text-slate-800 hover:bg-slate-100 aria-[current=date]:font-bold aria-pressed:bg-slate-900 aria-pressed:text-white"
            >
              {date.getDate()}
              <span aria-hidden="true" className="mt-1 flex gap-0.5">
                {Array.from({ length: Math.min(count, 3) }, (_, dot) => (
                  <span key={dot} className="size-1 rounded-full bg-blue-500" />
                ))}
              </span>
            </button>
          );
        })}
      </div>
      <ul aria-live="polite" className="mt-3 space-y-1 border-t border-slate-100 pt-2 text-sm">
        {dayEvents.map((event) => (
          <li key={event.id} className="flex gap-2">
            <span className="w-11 shrink-0 text-slate-500 tabular-nums">{event.time}</span>
            {event.title}
          </li>
        ))}
        {dayEvents.length === 0 ? <li className="text-slate-500">{emptyText}</li> : null}
      </ul>
    </div>
  );
}
