import type { CSSProperties, ReactNode } from "react";
import { flushSync } from "react-dom";

/**
 * Runs a state update as a view transition, so elements that share a
 * view-transition-name in the old and new screen morph into each other. Browsers
 * without the API, and reduced motion, just update.
 */
export function withViewTransition(update: () => void) {
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) {
    update();
    return;
  }
  document.startViewTransition(() => flushSync(update));
}

export interface SharedElementProps {
  /** Same name on the small and the large element; unique on the page at any time. */
  readonly name: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly style?: CSSProperties;
}

/** Marks an element that should travel between screens during withViewTransition. */
export function SharedElement({ name, children, className, style }: SharedElementProps) {
  return (
    <div className={className} style={{ ...style, viewTransitionName: name }}>
      {children}
    </div>
  );
}
