export interface FilterChipsProps {
  /** Group name, e.g. "편의시설". */
  readonly label: string;
  readonly options: readonly string[];
  readonly selected: readonly string[];
  readonly onChange: (selected: readonly string[]) => void;
}

/**
 * Row of toggle chips that switch filters on and off. Each chip is a button with
 * aria-pressed, so its state is announced, and a check mark shows it without colour.
 */
export function FilterChips({ label, options, selected, onChange }: FilterChipsProps) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const pressed = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={pressed}
            onClick={() =>
              onChange(pressed ? selected.filter((item) => item !== option) : [...selected, option])
            }
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {pressed ? <span aria-hidden="true">✓</span> : null}
            {option}
          </button>
        );
      })}
    </div>
  );
}
