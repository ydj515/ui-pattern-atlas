export interface CategoryOption {
  readonly id: string;
  readonly label: string;
  readonly count: number;
}

export interface CategoryFilterProps {
  readonly value: string;
  readonly onValueChange: (value: string) => void;
  readonly options: readonly CategoryOption[];
}

/**
 * Category chips, centred under the search box. They wrap on wide screens and scroll
 * sideways on narrow ones; the selected chip gets the highlighter.
 */
export function CategoryFilter({ value, onValueChange, options }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="카테고리"
      className="flex gap-2 overflow-x-auto p-1 sm:max-h-32 sm:flex-wrap sm:justify-center sm:overflow-y-auto"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={value === option.id}
          onClick={() => onValueChange(option.id)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-control border border-rule px-3 py-1.5 text-body-sm whitespace-nowrap text-graphite hover:border-rule-strong hover:text-ink aria-pressed:border-marker aria-pressed:bg-marker aria-pressed:text-marker-ink"
        >
          {option.label} <span className="text-micro tabular-nums opacity-70">{option.count}</span>
        </button>
      ))}
    </div>
  );
}
