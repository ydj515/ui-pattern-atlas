import { useEffect, useRef, useState, type ReactNode } from "react";

export interface SpringProps {
  /** Target value; the rendered value springs toward it. */
  readonly to: number;
  /** Higher pulls harder (faster). */
  readonly stiffness?: number;
  /** Higher settles sooner with less overshoot. */
  readonly damping?: number;
  readonly children: (value: number) => ReactNode;
}

/**
 * Moves a value toward its target like a weight on a spring: it overshoots, swings back
 * and settles, and a new target mid-flight keeps the current speed. Reduced motion jumps
 * straight to the target.
 */
export function Spring({ to, stiffness = 180, damping = 12, children }: SpringProps) {
  const [value, setValue] = useState(to);
  const state = useRef({ x: to, v: 0 });

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();
    const step = (now: number) => {
      const s = state.current;
      if (reduce) {
        s.x = to;
        s.v = 0;
        setValue(to);
        return;
      }
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const force = -stiffness * (s.x - to) - damping * s.v;
      s.v += force * dt;
      s.x += s.v * dt;
      if (Math.abs(s.v) < 0.01 && Math.abs(s.x - to) < 0.01) {
        s.x = to;
        s.v = 0;
        setValue(to);
        return;
      }
      setValue(s.x);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to, stiffness, damping]);

  return <>{children(value)}</>;
}
