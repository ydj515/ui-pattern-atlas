import type { ReactNode } from "react";

export interface BentoItem {
  readonly id: string;
  readonly content: ReactNode;
  /** Columns and rows the tile spans on the 4-column grid. */
  readonly cols?: 1 | 2 | 3 | 4;
  readonly rows?: 1 | 2;
}

const colSpan = { 1: "col-span-1", 2: "col-span-2", 3: "col-span-3", 4: "col-span-4" } as const;
const rowSpan = { 1: "row-span-1", 2: "row-span-2" } as const;

/**
 * Tiles of different sizes packed into one tidy rectangle, like a bento box. The biggest
 * tile carries the main message; smaller ones support it. Spans are set per tile on a
 * 4-column grid with fixed row height, and the DOM order is the reading order.
 */
export function BentoGrid({
  items,
  rowHeight = 72,
}: {
  readonly items: readonly BentoItem[];
  readonly rowHeight?: number;
}) {
  return (
    <div className="grid grid-cols-4 gap-2" style={{ gridAutoRows: rowHeight }}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`overflow-hidden rounded-xl ${colSpan[item.cols ?? 1]} ${rowSpan[item.rows ?? 1]}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
