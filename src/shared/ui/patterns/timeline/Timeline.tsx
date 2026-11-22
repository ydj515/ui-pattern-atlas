export interface TimelineEvent {
  readonly id: string;
  readonly title: string;
  /** When it happened, e.g. "11월 23일 14:10"; leave empty for steps still to come. */
  readonly time?: string;
  readonly description?: string;
}

export interface TimelineProps {
  readonly label: string;
  readonly events: readonly TimelineEvent[];
  /** Index of the latest event that has happened. */
  readonly current: number;
  readonly upcomingLabel?: string;
}

/**
 * Events in time order on a vertical line (delivery tracking, history). Past events are
 * filled, the latest one is marked aria-current="step", and steps still to come are
 * dimmed and say so in text.
 */
export function Timeline({ label, events, current, upcomingLabel = "예정" }: TimelineProps) {
  return (
    <ol aria-label={label} className="relative space-y-4 pl-6">
      <span
        aria-hidden="true"
        className="absolute top-1.5 bottom-1.5 left-[7px] w-0.5 bg-slate-200"
      />
      {events.map((event, index) => {
        const done = index <= current;
        return (
          <li
            key={event.id}
            aria-current={index === current ? "step" : undefined}
            className="relative"
          >
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-6 size-4 rounded-full border-2 ${
                index === current
                  ? "border-blue-600 bg-blue-600 ring-4 ring-blue-100"
                  : done
                    ? "border-blue-600 bg-white"
                    : "border-slate-300 bg-white"
              }`}
            />
            <p
              className={`text-sm ${index === current ? "font-semibold text-slate-900" : done ? "text-slate-800" : "text-slate-400"}`}
            >
              {event.title}
            </p>
            <p className="text-xs text-slate-500">{done ? event.time : upcomingLabel}</p>
            {done && event.description ? (
              <p className="mt-0.5 text-xs text-slate-600">{event.description}</p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
