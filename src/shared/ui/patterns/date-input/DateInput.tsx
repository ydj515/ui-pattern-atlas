import { useId, useState } from "react";

/** Inserts dots as digits are typed: 20261124 → 2026.11.24. */
export function formatDateDigits(digits: string) {
  const clean = digits.replace(/\D/g, "").slice(0, 8);
  return [clean.slice(0, 4), clean.slice(4, 6), clean.slice(6, 8)].filter(Boolean).join(".");
}

/** Returns the date for "YYYY.MM.DD", or null when the day does not exist. */
export function parseDate(text: string) {
  const match = /^(\d{4})\.(\d{2})\.(\d{2})$/.exec(text);
  if (!match) return null;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
    ? date
    : null;
}

export interface DateInputProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string, date: Date | null) => void;
  readonly hint?: string;
  readonly incompleteText?: string;
  readonly invalidText?: string;
}

/**
 * Typed date in a fixed format (YYYY.MM.DD). Faster than a calendar for dates far
 * away, like a birthday. Dots are added automatically and the date is checked when
 * the field loses focus, so impossible days (2026.02.30) are caught early.
 */
export function DateInput({
  label,
  value,
  onChange,
  hint = "YYYY.MM.DD",
  incompleteText = "8자리 숫자로 입력해 주세요",
  invalidText = "없는 날짜예요",
}: DateInputProps) {
  const id = useId();
  const [error, setError] = useState<string>();

  function check(text: string) {
    if (!text) return undefined;
    if (text.length < 10) return incompleteText;
    return parseDate(text) ? undefined : invalidText;
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        id={id}
        inputMode="numeric"
        autoComplete="bday"
        placeholder={hint}
        value={value}
        maxLength={10}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${id}-message`}
        onChange={(event) => {
          const next = formatDateDigits(event.target.value);
          onChange(next, parseDate(next));
          if (error) setError(check(next));
        }}
        onBlur={() => setError(check(value))}
        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none aria-invalid:border-rose-500"
      />
      <p
        id={`${id}-message`}
        className={`mt-1.5 text-xs ${error ? "text-rose-600" : "text-slate-500"}`}
      >
        {error ?? hint}
      </p>
    </div>
  );
}
