export interface FilterOption {
  readonly value: string;
  readonly label: string;
}

export interface FilterGroup {
  readonly id: string;
  readonly label: string;
  readonly options: readonly FilterOption[];
}

export interface SearchFiltersProps {
  readonly groups: readonly FilterGroup[];
  /** Selected option values, by group id. */
  readonly selected: Readonly<Record<string, readonly string[]>>;
  readonly onChange: (groupId: string, values: readonly string[]) => void;
  /** Result count after the filters, e.g. "결과 3개". */
  readonly resultLabel: string;
  readonly clearLabel?: string;
  readonly removeLabel?: (label: string) => string;
}

/**
 * Filters that narrow search results, applied as soon as they change. The applied
 * ones are summed up above the results as chips that can be removed one by one, and
 * the new result count is announced politely.
 */
export function SearchFilters({
  groups,
  selected,
  onChange,
  resultLabel,
  clearLabel = "모두 지우기",
  removeLabel = (label) => `${label} 필터 해제`,
}: SearchFiltersProps) {
  const applied = groups.flatMap((group) =>
    group.options
      .filter((option) => selected[group.id]?.includes(option.value))
      .map((option) => ({ group, option })),
  );

  function toggle(group: FilterGroup, value: string, on: boolean) {
    const current = selected[group.id] ?? [];
    onChange(group.id, on ? [...current, value] : current.filter((item) => item !== value));
  }

  return (
    <div className="grid gap-3">
      {groups.map((group) => (
        <fieldset key={group.id}>
          <legend className="text-xs font-semibold text-slate-600">{group.label}</legend>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {group.options.map((option) => (
              <label
                key={option.value}
                className="cursor-pointer rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 has-checked:border-slate-900 has-checked:bg-slate-900 has-checked:text-white has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selected[group.id]?.includes(option.value) ?? false}
                  onChange={(event) => toggle(group, option.value, event.target.checked)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <div className="flex min-h-7 flex-wrap items-center gap-1.5 border-t border-slate-100 pt-3">
        <p aria-live="polite" className="mr-1 text-sm font-semibold text-slate-900">
          {resultLabel}
        </p>
        {applied.map(({ group, option }) => (
          <button
            key={`${group.id}-${option.value}`}
            type="button"
            aria-label={removeLabel(option.label)}
            onClick={() => toggle(group, option.value, false)}
            className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
          >
            {option.label}
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3">
              <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        ))}
        {applied.length > 0 ? (
          <button
            type="button"
            onClick={() => groups.forEach((group) => onChange(group.id, []))}
            className="ml-auto text-xs text-slate-500 underline"
          >
            {clearLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
