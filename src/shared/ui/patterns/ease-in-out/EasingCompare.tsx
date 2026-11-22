import { useEffect, useEffectEvent, useRef } from "react";

export interface EasingCurve {
  readonly label: string;
  /** Any CSS easing: linear, ease-in, cubic-bezier(...). */
  readonly easing: string;
}

export interface EasingCompareProps {
  readonly curves: readonly EasingCurve[];
  /** Increase it to play all tracks again from the start. */
  readonly runKey: number;
  readonly duration?: number;
}

/**
 * Tracks that move a dot across with different easing curves at the same duration, so
 * the difference is only in how the speed changes. Reduced motion jumps to the end.
 */
export function EasingCompare({ curves, runKey, duration = 1200 }: EasingCompareProps) {
  const dots = useRef<(HTMLSpanElement | null)[]>([]);

  const run = useEffectEvent(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    curves.forEach((curve, index) => {
      dots.current[index]?.animate?.([{ left: "0%" }, { left: "calc(100% - 1rem)" }], {
        duration: reduce ? 0 : duration,
        easing: curve.easing,
        fill: "forwards",
      });
    });
  });

  useEffect(() => {
    if (runKey > 0) run();
  }, [runKey]);

  return (
    <ul className="grid gap-3">
      {curves.map((curve, index) => (
        <li key={curve.label} className="grid gap-1">
          <span className="flex justify-between text-xs text-slate-600">
            <span>{curve.label}</span>
            <code className="text-slate-400">{curve.easing}</code>
          </span>
          <span className="relative block h-4 rounded-full bg-slate-100">
            <span
              ref={(element) => {
                dots.current[index] = element;
              }}
              className="absolute top-0 left-0 size-4 rounded-full bg-blue-600"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
