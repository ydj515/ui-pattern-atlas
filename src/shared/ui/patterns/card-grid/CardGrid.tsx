import type { ReactNode } from "react";

export interface CardGridProps {
  readonly label: string;
  readonly children: ReactNode;
  /** Columns on a wide container. */
  readonly columns?: 2 | 3;
}

/**
 * Repeated cards on an even grid. Each card is a flex column whose action sits at the
 * bottom (mt-auto), so buttons line up across a row even when titles wrap differently.
 * Columns follow the container width.
 */
export function CardGrid({ label, children, columns = 3 }: CardGridProps) {
  return (
    <div className="@container">
      <ul
        aria-label={label}
        className={`grid grid-cols-1 gap-3 @xs:grid-cols-2 ${columns === 3 ? "@md:grid-cols-3" : ""} [&>li]:flex [&>li]:flex-col`}
      >
        {children}
      </ul>
    </div>
  );
}
