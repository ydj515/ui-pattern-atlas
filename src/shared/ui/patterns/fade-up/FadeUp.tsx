import type { ReactNode } from "react";

export interface FadeUpProps {
  readonly children: ReactNode;
  /** Start delay in ms, to follow a heading with its body text. */
  readonly delay?: number;
  /** Distance travelled, in px. Keep it short (8–16). */
  readonly distance?: number;
}

/**
 * Text that rises a few pixels while it goes from clear to solid when it mounts, the
 * quiet default for new copy. It uses CSS @starting-style, so remount it to replay;
 * reduced motion keeps only the fade.
 */
export function FadeUp({ children, delay = 0, distance = 12 }: FadeUpProps) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms`, ["--fade-up-distance" as string]: `${distance}px` }}
      className="transition duration-500 ease-out motion-reduce:transition-opacity starting:translate-y-(--fade-up-distance) starting:opacity-0 motion-reduce:starting:translate-y-0"
    >
      {children}
    </div>
  );
}
