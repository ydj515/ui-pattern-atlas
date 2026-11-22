import { useState, type ReactNode } from "react";

export interface ZoomTransitionProps {
  readonly open: boolean;
  /** Point the screen grows from and shrinks back to, in px inside the container. */
  readonly origin: { readonly x: number; readonly y: number };
  readonly children: ReactNode;
  readonly label: string;
}

/**
 * Screen that grows out of the element that opened it (an app icon, a card) and shrinks
 * back into it on close, so people see where it lives. Place it in a relative container;
 * reduced motion opens and closes it without scaling.
 */
export function ZoomTransition({ open, origin, children, label }: ZoomTransitionProps) {
  const [mounted, setMounted] = useState(open);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (open && !mounted) setMounted(true);
  if (!open && mounted && reduce) setMounted(false);
  if (!mounted) return null;

  return (
    <section
      aria-label={label}
      aria-hidden={!open}
      onTransitionEnd={(event) => {
        if (!open && event.target === event.currentTarget) setMounted(false);
      }}
      style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
      className={`absolute inset-0 transition duration-300 ease-out motion-reduce:transition-none starting:scale-[0.15] starting:opacity-0 ${open ? "scale-100 opacity-100" : "scale-[0.15] opacity-0"}`}
    >
      {children}
    </section>
  );
}
