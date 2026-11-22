import { useId } from "react";

export type Frequency = "daily" | "weekly" | "monthly";
export type RecurrenceEnd =
  { readonly type: "never" } | { readonly type: "count"; readonly count: number };

export interface Recurrence {
  readonly frequency: Frequency;
  /** 0 = Sunday … 6 = Saturday; used when weekly. */
  readonly weekdays: readonly number[];
  readonly end: RecurrenceEnd;
}

export interface RecurrenceLabels {
  readonly repeat: string;
  readonly frequencies: Record<Frequency, string>;
  /** Sunday first. */
  readonly weekdays: readonly string[];
  readonly ends: string;
  readonly never: string;
  readonly after: string;
  readonly times: string;
}

export interface RecurrencePickerProps {
  readonly value: Recurrence;
  readonly onChange: (value: Recurrence) => void;
  readonly labels: RecurrenceLabels;
}

/**
 * Repeat rule in three steps: how often, on which weekdays (only for weekly), and when it
 * stops. Weekdays are toggle buttons; the end is a radio pair with the count input
 * next to its option. Show the rule as a sentence next to it so people can check it.
 */
export function RecurrencePicker({ value, onChange, labels }: RecurrencePickerProps) {
  const id = useId();
  const count = value.end.type === "count" ? value.end.count : 10;
  return (
    <div className="space-y-3 text-sm">
      <div className="flex items-center gap-2">
        <label htmlFor={`${id}-frequency`} className="font-medium text-slate-800">
          {labels.repeat}
        </label>
        <select
          id={`${id}-frequency`}
          value={value.frequency}
          onChange={(event) => onChange({ ...value, frequency: event.target.value as Frequency })}
          className="rounded-lg border border-slate-300 bg-white px-2 py-1.5"
        >
          {(Object.keys(labels.frequencies) as Frequency[]).map((frequency) => (
            <option key={frequency} value={frequency}>
              {labels.frequencies[frequency]}
            </option>
          ))}
        </select>
      </div>
      {value.frequency === "weekly" ? (
        <div role="group" aria-label={labels.frequencies.weekly} className="flex gap-1">
          {labels.weekdays.map((day, index) => {
            const pressed = value.weekdays.includes(index);
            return (
              <button
                key={day}
                type="button"
                aria-pressed={pressed}
                onClick={() =>
                  onChange({
                    ...value,
                    weekdays: pressed
                      ? value.weekdays.filter((item) => item !== index)
                      : [...value.weekdays, index].sort(),
                  })
                }
                className="size-8 rounded-full border border-slate-300 text-xs text-slate-700 aria-pressed:border-blue-600 aria-pressed:bg-blue-600 aria-pressed:text-white"
              >
                {day}
              </button>
            );
          })}
        </div>
      ) : null}
      <fieldset className="space-y-1.5">
        <legend className="font-medium text-slate-800">{labels.ends}</legend>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={`${id}-end`}
            checked={value.end.type === "never"}
            onChange={() => onChange({ ...value, end: { type: "never" } })}
          />
          {labels.never}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={`${id}-end`}
            checked={value.end.type === "count"}
            onChange={() => onChange({ ...value, end: { type: "count", count } })}
          />
          {labels.after}
          <input
            type="number"
            min={1}
            max={99}
            value={count}
            aria-label={`${labels.after} ${labels.times}`}
            onChange={(event) =>
              onChange({
                ...value,
                end: { type: "count", count: Math.max(1, Number(event.target.value) || 1) },
              })
            }
            className="w-14 rounded-md border border-slate-300 px-2 py-1"
          />
          {labels.times}
        </label>
      </fieldset>
    </div>
  );
}
