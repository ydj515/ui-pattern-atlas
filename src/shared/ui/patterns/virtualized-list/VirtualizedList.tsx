import { useState, type ReactNode } from "react";

export interface VirtualizedListProps {
  readonly label: string;
  readonly count: number;
  /** Every row must have this height in px. */
  readonly rowHeight: number;
  readonly height: number;
  readonly renderRow: (index: number) => ReactNode;
  /** Extra rows drawn above and below the visible area. */
  readonly overscan?: number;
}

/**
 * Scroll area that only draws the rows in view, so thousands of rows stay fast. A tall
 * spacer keeps the scrollbar honest, and each row says its position in the whole list
 * (aria-setsize / aria-posinset) because most rows are not in the page.
 */
export function VirtualizedList({
  label,
  count,
  rowHeight,
  height,
  renderRow,
  overscan = 4,
}: VirtualizedListProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const first = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const last = Math.min(count - 1, Math.ceil((scrollTop + height) / rowHeight) + overscan);
  const indexes = Array.from(
    { length: Math.max(0, last - first + 1) },
    (_, offset) => first + offset,
  );

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
      className="overflow-y-auto rounded-xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      style={{ height }}
    >
      <ul className="relative" style={{ height: count * rowHeight }}>
        {indexes.map((index) => (
          <li
            key={index}
            aria-setsize={count}
            aria-posinset={index + 1}
            className="absolute inset-x-0 flex items-center border-b border-slate-100 px-4 text-sm text-slate-800"
            style={{ top: index * rowHeight, height: rowHeight }}
          >
            {renderRow(index)}
          </li>
        ))}
      </ul>
    </div>
  );
}
