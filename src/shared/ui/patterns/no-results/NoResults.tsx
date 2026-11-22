import type { ReactNode } from "react";

export interface NoResultsProps {
  /** Repeat the query, e.g. "‘아메리가노’ 검색 결과가 없어요". */
  readonly title: string;
  /** A close match to offer instead, usually a button that runs that search. */
  readonly suggestion?: ReactNode;
  /** The usual fixes: spelling, shorter words. */
  readonly tips?: readonly string[];
  readonly onClear: () => void;
  readonly clearLabel?: string;
}

/**
 * Empty search result that helps the user change the query instead of leaving.
 * Render it inside a polite live region so the result is announced.
 */
export function NoResults({
  title,
  suggestion,
  tips = [],
  onClear,
  clearLabel = "검색어 지우기",
}: NoResultsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      {suggestion ? <p className="mt-2 text-sm text-slate-600">{suggestion}</p> : null}
      {tips.length > 0 ? (
        <ul className="mt-3 space-y-0.5 text-xs text-slate-500">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      ) : null}
      <button
        type="button"
        onClick={onClear}
        className="mt-4 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
      >
        {clearLabel}
      </button>
    </div>
  );
}
