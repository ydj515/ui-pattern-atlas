import { useEffect, useEffectEvent, useRef, type ReactNode } from "react";

const SHAKE: Keyframe[] = [
  { transform: "translateX(0)" },
  { transform: "translateX(-8px)" },
  { transform: "translateX(7px)" },
  { transform: "translateX(-5px)" },
  { transform: "translateX(3px)" },
  { transform: "translateX(0)" },
];

export interface ShakeProps {
  /** Increase it on every failed attempt; 0 never shakes. */
  readonly trigger: number;
  readonly children: ReactNode;
}

/**
 * Shakes its content sideways once per failed attempt, like a head saying no. The shake
 * only adds emphasis: the error text and the invalid state must still be there, and
 * reduced motion skips the shake.
 */
export function Shake({ trigger, children }: ShakeProps) {
  const ref = useRef<HTMLDivElement>(null);

  const shake = useEffectEvent(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.animate?.(SHAKE, { duration: 360, easing: "ease-in-out" });
  });

  useEffect(() => {
    if (trigger > 0) shake();
  }, [trigger]);

  return <div ref={ref}>{children}</div>;
}
