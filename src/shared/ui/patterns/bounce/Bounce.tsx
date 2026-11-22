import { useEffect, useEffectEvent, useRef, type ReactNode } from "react";

const BOUNCE: Keyframe[] = [
  { transform: "translateY(0)", easing: "cubic-bezier(0.3, 0, 0.6, 1)" },
  { transform: "translateY(-14px)", offset: 0.3, easing: "cubic-bezier(0.4, 0, 1, 1)" },
  { transform: "translateY(0)", offset: 0.55, easing: "cubic-bezier(0, 0, 0.6, 1)" },
  { transform: "translateY(-5px)", offset: 0.72, easing: "cubic-bezier(0.4, 0, 1, 1)" },
  { transform: "translateY(0)", offset: 0.86 },
  { transform: "translateY(-1px)", offset: 0.93 },
  { transform: "translateY(0)" },
];

export interface BounceProps {
  /** Increase it to bounce again; 0 never bounces. */
  readonly trigger: number;
  readonly children: ReactNode;
}

/**
 * Hops its content up and lets it land with two smaller hops, like a ball hitting the
 * floor, to point at something that just changed (a cart that received an item).
 * Reduced motion skips it.
 */
export function Bounce({ trigger, children }: BounceProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const bounce = useEffectEvent(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.animate?.(BOUNCE, { duration: 700 });
  });

  useEffect(() => {
    if (trigger > 0) bounce();
  }, [trigger]);

  return (
    <span ref={ref} className="inline-flex">
      {children}
    </span>
  );
}
