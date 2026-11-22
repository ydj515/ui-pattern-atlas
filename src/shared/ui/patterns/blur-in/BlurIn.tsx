import type { ReactNode } from "react";

export interface BlurInProps {
  readonly children: ReactNode;
  readonly delay?: number;
}

/**
 * Text that comes into focus: it starts blurred and faint and sharpens when it mounts.
 * Blur is costly on large areas, so keep it to a heading or a short line. Remount to
 * replay; reduced motion shows it sharp at once.
 */
export function BlurIn({ children, delay = 0 }: BlurInProps) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className="transition-[filter,opacity] duration-700 ease-out motion-reduce:transition-none starting:opacity-0 starting:blur-md"
    >
      {children}
    </div>
  );
}
