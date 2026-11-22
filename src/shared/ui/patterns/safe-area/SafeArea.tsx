import type { ReactNode } from "react";

export interface SafeAreaProps {
  readonly children: ReactNode;
  /** Which edges to pad. */
  readonly edges?: readonly ("top" | "bottom" | "left" | "right")[];
  readonly className?: string;
}

/**
 * Pads content away from the notch, rounded corners and home indicator using the
 * env(safe-area-inset-*) values. The page needs <meta name="viewport"
 * content="..., viewport-fit=cover"> for the values to be non-zero. A minimum padding
 * keeps some room on devices without insets.
 */
export function SafeArea({ children, edges = ["top", "bottom"], className = "" }: SafeAreaProps) {
  // --safe-<edge> lets a preview fake a device inset; real devices fill env() themselves.
  const pad = (edge: string, minimum: string) =>
    edges.includes(edge as "top")
      ? `max(${minimum}, env(safe-area-inset-${edge}), var(--safe-${edge}, 0px))`
      : undefined;
  const style = {
    paddingTop: pad("top", "0.75rem"),
    paddingBottom: pad("bottom", "0.75rem"),
    paddingLeft: pad("left", "1rem"),
    paddingRight: pad("right", "1rem"),
  };
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
