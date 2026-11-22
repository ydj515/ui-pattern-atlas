export type PageItem = number | "ellipsis-start" | "ellipsis-end";

/**
 * Computes which page buttons to show: first, last, the current page with
 * `siblingCount` neighbours on each side, and ellipses for the gaps.
 */
export function getPageItems(page: number, totalPages: number, siblingCount = 1): PageItem[] {
  // first + last + current + siblings + two ellipses
  const maxVisible = siblingCount * 2 + 5;
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const start = Math.max(page - siblingCount, 2);
  const end = Math.min(page + siblingCount, totalPages - 1);
  const showStartEllipsis = start > 3;
  const showEndEllipsis = end < totalPages - 2;

  if (!showStartEllipsis) {
    const head = Array.from({ length: maxVisible - 2 }, (_, index) => index + 1);
    return [...head, "ellipsis-end", totalPages];
  }
  if (!showEndEllipsis) {
    const tailLength = maxVisible - 2;
    const tail = Array.from(
      { length: tailLength },
      (_, index) => totalPages - tailLength + 1 + index,
    );
    return [1, "ellipsis-start", ...tail];
  }
  const middle = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  return [1, "ellipsis-start", ...middle, "ellipsis-end", totalPages];
}

export interface PaginationProps {
  /** 1-based current page. */
  readonly page: number;
  readonly totalPages: number;
  readonly onPageChange: (page: number) => void;
  readonly siblingCount?: number;
  readonly label?: string;
  readonly previousLabel?: string;
  readonly nextLabel?: string;
  /** Accessible name of each page button. */
  readonly pageLabel?: (page: number) => string;
}

const itemBase = "grid h-9 min-w-9 place-items-center rounded-lg px-2 text-sm font-medium";

/** Page navigation with previous/next buttons and a condensed list of page numbers. */
export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  label = "Pagination",
  previousLabel = "Previous page",
  nextLabel = "Next page",
  pageLabel = (value) => `Page ${value}`,
}: PaginationProps) {
  const items = getPageItems(page, totalPages, siblingCount);

  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap items-center gap-1">
        <li>
          <button
            type="button"
            aria-label={previousLabel}
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className={`${itemBase} text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
              <path d="M12.7 5.3a1 1 0 0 1 0 1.4L9.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 0Z" />
            </svg>
          </button>
        </li>
        {items.map((item) =>
          typeof item === "number" ? (
            <li key={item}>
              <button
                type="button"
                aria-label={pageLabel(item)}
                aria-current={item === page ? "page" : undefined}
                onClick={() => onPageChange(item)}
                className={`${itemBase} text-slate-700 hover:bg-slate-100 aria-[current=page]:bg-slate-900 aria-[current=page]:text-white`}
              >
                {item}
              </button>
            </li>
          ) : (
            <li key={item} aria-hidden="true" className={`${itemBase} text-slate-400`}>
              …
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className={`${itemBase} text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
              <path d="M7.3 5.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4Z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
