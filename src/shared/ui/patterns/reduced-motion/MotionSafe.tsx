import { useEffect, useEffectEvent, useRef, useSyncExternalStore, type ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia?.(QUERY);
  media?.addEventListener("change", onChange);
  return () => media?.removeEventListener("change", onChange);
}

/** True when the person turned on "reduce motion" in their system settings. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia?.(QUERY).matches ?? false,
    () => false,
  );
}

const CALM: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];

export interface MotionSafeProps {
  readonly children: ReactNode;
  /** Entrance played normally, e.g. a slide with a small overshoot. */
  readonly full: Keyframe[];
  /** Entrance played when motion is reduced; a short fade by default, never movement. */
  readonly reduced?: Keyframe[];
  readonly duration?: number;
  /** Overrides the system setting (for previews and tests). */
  readonly forceReduced?: boolean;
  readonly className?: string;
}

/**
 * Plays an entrance once on mount, swapping big movement for a short fade when the
 * person asked for less motion. The content and its meaning stay the same either way.
 */
export function MotionSafe({
  children,
  full,
  reduced = CALM,
  duration = 420,
  forceReduced,
  className,
}: MotionSafeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const systemReduced = usePrefersReducedMotion();
  const reduce = forceReduced ?? systemReduced;

  const play = useEffectEvent(() => {
    ref.current?.animate?.(reduce ? reduced : full, {
      duration: reduce ? 160 : duration,
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
  });

  useEffect(() => play(), []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
