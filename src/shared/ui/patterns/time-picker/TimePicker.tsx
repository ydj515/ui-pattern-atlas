import { useId } from "react";

export interface TimePickerProps {
  readonly label: string;
  /** "HH:MM", 24-hour. */
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly minuteStep?: number;
  /** Earliest and latest hour offered, e.g. opening hours. */
  readonly fromHour?: number;
  readonly toHour?: number;
  readonly hourLabel?: string;
  readonly minuteLabel?: string;
}

const pad = (number: number) => String(number).padStart(2, "0");

/**
 * Hour and minute as two native selects in one fieldset. Offering only valid steps
 * (every 10 minutes, opening hours) avoids typing errors, and each select opens the
 * platform picker on phones.
 */
export function TimePicker({
  label,
  value,
  onChange,
  minuteStep = 10,
  fromHour = 0,
  toHour = 23,
  hourLabel = "시",
  minuteLabel = "분",
}: TimePickerProps) {
  const id = useId();
  const [hour = "00", minute = "00"] = value.split(":");
  const hours = Array.from({ length: toHour - fromHour + 1 }, (_, index) => pad(fromHour + index));
  const minutes = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, index) =>
    pad(index * minuteStep),
  );
  const selectClass =
    "appearance-none rounded-lg border border-slate-300 bg-white py-2 pr-7 pl-3 text-sm text-slate-900 tabular-nums focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none";

  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-800">{label}</legend>
      <div className="mt-1.5 flex items-center gap-2">
        <label htmlFor={`${id}-hour`} className="sr-only">
          {hourLabel}
        </label>
        <select
          id={`${id}-hour`}
          value={hour}
          onChange={(event) => onChange(`${event.target.value}:${minute}`)}
          className={selectClass}
        >
          {hours.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="text-sm text-slate-500">
          {hourLabel}
        </span>
        <label htmlFor={`${id}-minute`} className="sr-only">
          {minuteLabel}
        </label>
        <select
          id={`${id}-minute`}
          value={minute}
          onChange={(event) => onChange(`${hour}:${event.target.value}`)}
          className={selectClass}
        >
          {minutes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="text-sm text-slate-500">
          {minuteLabel}
        </span>
      </div>
    </fieldset>
  );
}
