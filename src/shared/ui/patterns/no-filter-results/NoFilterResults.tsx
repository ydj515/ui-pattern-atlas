export interface AppliedFilter {
  readonly id: string;
  readonly label: string;
}

export interface NoFilterResultsProps {
  readonly filters: readonly AppliedFilter[];
  readonly onRemove: (id: string) => void;
  readonly onReset: () => void;
  readonly title?: string;
  readonly hint?: string;
  readonly resetLabel?: string;
}

/**
 * Empty result caused by filters: lists the filters that are on, so one can be loosened
 * right here, and offers a reset. Each chip says what removing it does.
 */
export function NoFilterResults({
  filters,
  onRemove,
  onReset,
  title = "조건에 맞는 결과가 없어요",
  hint = "필터를 하나 빼 보세요.",
  resetLabel = "필터 모두 지우기",
}: NoFilterResultsProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-center">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{hint}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
        {filters.map((filter) => (
          <li key={filter.id}>
            <button
              type="button"
              onClick={() => onRemove(filter.id)}
              aria-label={`${filter.label} 필터 빼기`}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
            >
              {filter.label}
              <span aria-hidden="true" className="text-slate-400">
                ×
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onReset}
        className="mt-3 text-xs font-medium text-blue-700 underline underline-offset-2"
      >
        {resetLabel}
      </button>
    </div>
  );
}
