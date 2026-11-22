export interface YearMonth {
  readonly year: number;
  /** 1–12 */
  readonly month: number;
}

export interface MonthPickerProps {
  readonly label: string;
  readonly value: YearMonth;
  readonly onChange: (value: YearMonth) => void;
  /** Latest month that can be picked, e.g. this month. */
  readonly max?: YearMonth;
  readonly monthLabel?: (month: number) => string;
  readonly yearLabel?: (year: number) => string;
}

const toIndex = (value: YearMonth) => value.year * 12 + value.month - 1;

/**
 * Year and month without a day: a year switcher and twelve month buttons. Months after
 * `max` are disabled. Good for statements, card expiry and monthly reports.
 */
export function MonthPicker({
  label,
  value,
  onChange,
  max,
  monthLabel = (month) => `${month}월`,
  yearLabel = (year) => `${year}년`,
}: MonthPickerProps) {
  const canGoNext = !max || value.year < max.year;
  return (
    <div className="w-64 rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-sm font-medium text-slate-800">{label}</p>
      <div className="mt-2 flex items-center justify-between">
        <button
          type="button"
          aria-label={`이전 해, ${yearLabel(value.year - 1)}`}
          onClick={() => onChange({ ...value, year: value.year - 1 })}
          className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <span aria-live="polite" className="text-sm font-semibold text-slate-900">
          {yearLabel(value.year)}
        </span>
        <button
          type="button"
          aria-label={`다음 해, ${yearLabel(value.year + 1)}`}
          disabled={!canGoNext}
          onClick={() =>
            onChange({
              year: value.year + 1,
              month:
                max && value.year + 1 === max.year ? Math.min(value.month, max.month) : value.month,
            })
          }
          className="grid size-8 place-items-center rounded-md hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {Array.from({ length: 12 }, (_, index) => index + 1).map((month) => {
          const option = { year: value.year, month };
          const disabled = max ? toIndex(option) > toIndex(max) : false;
          return (
            <button
              key={month}
              type="button"
              disabled={disabled}
              aria-pressed={value.month === month}
              aria-label={`${yearLabel(value.year)} ${monthLabel(month)}`}
              onClick={() => onChange(option)}
              className="h-9 rounded-lg text-sm text-slate-800 hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent aria-pressed:bg-blue-600 aria-pressed:font-semibold aria-pressed:text-white"
            >
              {monthLabel(month)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
