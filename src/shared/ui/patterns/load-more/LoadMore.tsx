import { useEffect, useRef, type ReactNode } from "react";

export interface LoadMoreProps<T> {
  readonly items: readonly T[];
  readonly total: number;
  readonly renderItem: (item: T) => ReactNode;
  readonly getKey: (item: T) => string;
  readonly onLoadMore: () => void;
  readonly loading?: boolean;
  /** Button text, e.g. (shown, total) => `더 보기 (${shown}/${total})`. */
  readonly buttonLabel: (shown: number, total: number) => string;
  readonly loadingLabel?: string;
}

/**
 * List with a "더 보기" button that adds the next batch. The button shows how many are
 * shown out of the total; after loading, focus moves to the first new item so keyboard
 * users continue from there. The footer below the list stays reachable.
 */
export function LoadMore<T>({
  items,
  total,
  renderItem,
  getKey,
  onLoadMore,
  loading = false,
  buttonLabel,
  loadingLabel = "불러오는 중",
}: LoadMoreProps<T>) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  // Index of the first item of the batch being loaded, or null when nothing is pending.
  const focusIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const index = focusIndexRef.current;
    if (index !== null && index < items.length) {
      itemRefs.current[index]?.focus();
      focusIndexRef.current = null;
    }
  }, [items]);

  return (
    <div>
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {items.map((item, index) => (
          <li
            key={getKey(item)}
            tabIndex={-1}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="focus:bg-blue-50 focus:outline-none"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
      {items.length < total ? (
        <button
          type="button"
          disabled={loading}
          onClick={() => {
            focusIndexRef.current = items.length;
            onLoadMore();
          }}
          className="mt-3 w-full rounded-lg border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400"
        >
          {loading ? loadingLabel : buttonLabel(items.length, total)}
        </button>
      ) : null}
    </div>
  );
}
