import { useEffect, useRef, type ReactNode } from "react";

export interface InfiniteScrollProps {
  readonly children: ReactNode;
  readonly hasMore: boolean;
  readonly loading: boolean;
  readonly onLoadMore: () => void;
  /** Accessible name of the scroll area. */
  readonly label: string;
  /** Start loading this many px before the end. */
  readonly threshold?: number;
  readonly height?: number;
  readonly loadingText?: string;
  readonly endText?: string;
  readonly moreLabel?: string;
}

/**
 * Scroll area that loads the next page as the reader nears the end. A button with the
 * same action stays at the bottom for keyboard users and for when automatic loading
 * does not fire. Loading and the end of the list are announced in a status region.
 */
export function InfiniteScroll({
  children,
  hasMore,
  loading,
  onLoadMore,
  label,
  threshold = 120,
  height = 280,
  loadingText = "더 불러오는 중",
  endText = "마지막 항목이에요",
  moreLabel = "더 불러오기",
}: InfiniteScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  function check() {
    const element = ref.current;
    if (!element || loading || !hasMore) return;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight - threshold) onLoadMore();
  }

  // A short first page may not fill the area; load until it scrolls.
  useEffect(check);

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      onScroll={check}
      className="overflow-y-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      style={{ height }}
    >
      {children}
      <div className="p-3 text-center text-xs text-slate-500">
        <p role="status">{loading ? loadingText : hasMore ? "" : endText}</p>
        {hasMore && !loading ? (
          <button
            type="button"
            onClick={onLoadMore}
            className="mt-1 rounded-md px-2 py-1 underline underline-offset-2 hover:bg-slate-100"
          >
            {moreLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
