import type { ReactNode } from "react";

export interface ResponsiveGridProps {
  readonly children: ReactNode;
  /** Narrowest a column may get, in px; the number of columns follows from the width. */
  readonly minColumn?: number;
  readonly label: string;
}

/**
 * Grid whose column count follows the available width with no breakpoints:
 * repeat(auto-fill, minmax(min, 1fr)). Items keep their reading order at every width.
 */
export function ResponsiveGrid({ children, minColumn = 96, label }: ResponsiveGridProps) {
  return (
    <ul
      aria-label={label}
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${minColumn}px, 1fr))` }}
    >
      {children}
    </ul>
  );
}
