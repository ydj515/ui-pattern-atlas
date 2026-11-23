import { useId } from "react";

export type TrendChange = "up" | "down" | "same" | "new";

export interface TrendingItem {
  readonly term: string;
  readonly change: TrendChange;
}

export interface TrendingSearchesProps {
  readonly items: readonly TrendingItem[];
  /** When and over what period it was counted, e.g. "11월 23일 14:00 기준". */
  readonly basis: string;
  readonly onSelect: (term: string) => void;
  readonly title?: string;
  readonly changeLabels?: Readonly<Record<TrendChange, string>>;
}

const DEFAULT_CHANGE_LABELS: Record<TrendChange, string> = {
  up: "상승",
  down: "하락",
  same: "변동 없음",
  new: "새로 들어옴",
};

const MARK: Record<TrendChange, { readonly glyph: string; readonly tone: string }> = {
  up: { glyph: "▲", tone: "text-rose-600" },
  down: { glyph: "▼", tone: "text-blue-600" },
  same: { glyph: "–", tone: "text-slate-400" },
  new: { glyph: "N", tone: "text-emerald-700 font-bold" },
};

/**
 * Ranked popular terms with the counting time and period, so people can tell how
 * fresh the list is. The change mark has a text name for screen readers.
 */
export function TrendingSearches({
  items,
  basis,
  onSelect,
  title = "인기 검색어",
  changeLabels = DEFAULT_CHANGE_LABELS,
}: TrendingSearchesProps) {
  const id = useId();
  return (
    <section aria-labelledby={id}>
      <div className="flex items-baseline justify-between">
        <h3 id={id} className="text-sm font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-xs text-slate-500">{basis}</p>
      </div>
      <ol className="mt-2 grid">
        {items.map((item, index) => (
          <li key={item.term}>
            <button
              type="button"
              onClick={() => onSelect(item.term)}
              className="flex w-full items-center gap-3 py-1.5 text-left text-sm text-slate-800"
            >
              <span className="w-4 text-right font-semibold text-slate-900 tabular-nums">
                {index + 1}
              </span>
              <span className="flex-1">{item.term}</span>
              <span className={`text-xs ${MARK[item.change].tone}`}>
                <span aria-hidden="true">{MARK[item.change].glyph}</span>
                <span className="sr-only">{changeLabels[item.change]}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
