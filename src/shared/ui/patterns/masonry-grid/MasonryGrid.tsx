import type { ReactNode } from "react";

export interface MasonryGridProps {
  readonly children: ReactNode;
  readonly columns: number;
  readonly label: string;
}

/**
 * Cards of different heights packed like bricks with CSS columns. Items flow down each
 * column, so keep the DOM in the order people should read; each item avoids breaking
 * across columns. No JavaScript measuring is needed.
 */
export function MasonryGrid({ children, columns, label }: MasonryGridProps) {
  return (
    <ul
      aria-label={label}
      className="gap-3 [&>li]:mb-3 [&>li]:break-inside-avoid"
      style={{ columnCount: columns }}
    >
      {children}
    </ul>
  );
}
