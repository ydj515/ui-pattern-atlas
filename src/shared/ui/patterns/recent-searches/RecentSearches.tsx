import { useId } from "react";

export interface RecentSearchesProps {
  readonly items: readonly string[];
  readonly onSelect: (term: string) => void;
  readonly onRemove: (term: string) => void;
  readonly onClear: () => void;
  readonly title?: string;
  readonly clearLabel?: string;
  readonly removeLabel?: (term: string) => string;
  readonly emptyLabel?: string;
}

/**
 * Terms searched before, newest first. Each one runs again with a tap and has its own
 * delete button named after the term; one more button clears the whole history.
 */
export function RecentSearches({
  items,
  onSelect,
  onRemove,
  onClear,
  title = "최근 검색어",
  clearLabel = "전체 삭제",
  removeLabel = (term) => `${term} 삭제`,
  emptyLabel = "최근 검색어가 없어요",
}: RecentSearchesProps) {
  const id = useId();
  return (
    <section aria-labelledby={id}>
      <div className="flex items-center justify-between">
        <h3 id={id} className="text-sm font-semibold text-slate-900">
          {title}
        </h3>
        {items.length > 0 ? (
          <button type="button" onClick={onClear} className="text-xs text-slate-500">
            {clearLabel}
          </button>
        ) : null}
      </div>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-slate-500">{emptyLabel}</p>
      ) : (
        <ul className="mt-2 grid">
          {items.map((term) => (
            <li key={term} className="flex items-center">
              <button
                type="button"
                onClick={() => onSelect(term)}
                className="flex-1 py-1.5 text-left text-sm text-slate-800"
              >
                {term}
              </button>
              <button
                type="button"
                aria-label={removeLabel(term)}
                onClick={() => onRemove(term)}
                className="grid size-7 place-items-center rounded-full text-slate-400 hover:bg-slate-100"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5">
                  <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
