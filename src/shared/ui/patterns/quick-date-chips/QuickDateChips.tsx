import { useId } from "react";

export interface QuickDateOption {
  readonly label: string;
  readonly date: Date;
}

export interface QuickDateChipsProps {
  readonly label: string;
  readonly options: readonly QuickDateOption[];
  readonly value: Date | null;
  readonly onChange: (date: Date) => void;
  /** Label of the native date input for any other day. */
  readonly customLabel?: string;
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
const toInput = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

/**
 * The few dates people pick most (오늘, 내일, 이번 주말) as one-tap chips, with the
 * browser's date input for any other day. Build the options from today's date; each chip
 * is a pressed/unpressed button.
 */
export function QuickDateChips({
  label,
  options,
  value,
  onChange,
  customLabel = "직접 고르기",
}: QuickDateChipsProps) {
  const id = useId();
  return (
    <div role="group" aria-labelledby={`${id}-label`}>
      <span id={`${id}-label`} className="text-sm font-medium text-slate-800">
        {label}
      </span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const pressed = value ? sameDay(value, option.date) : false;
          return (
            <button
              key={option.label}
              type="button"
              aria-pressed={pressed}
              onClick={() => onChange(option.date)}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <label className="mt-3 flex items-center gap-2 text-sm text-slate-600">
        {customLabel}
        <input
          type="date"
          value={value ? toInput(value) : ""}
          onChange={(event) => {
            const [year, month, day] = event.target.value.split("-").map(Number);
            if (year && month && day) onChange(new Date(year, month - 1, day));
          }}
          className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
        />
      </label>
    </div>
  );
}
