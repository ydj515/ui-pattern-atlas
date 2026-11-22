import { useEffect, useEffectEvent, useRef, type ReactNode } from "react";

export type PageTransitionKind = "push" | "fade" | "modal";

export interface PageTransitionProps {
  /** Changes whenever a different screen is shown. */
  readonly screenKey: string;
  readonly kind: PageTransitionKind;
  /** "back" reverses a push, so returning feels like going back. */
  readonly direction?: "forward" | "back";
  readonly children: ReactNode;
}

function frames(kind: PageTransitionKind, direction: "forward" | "back"): Keyframe[] {
  if (kind === "fade") return [{ opacity: 0 }, { opacity: 0, offset: 0.35 }, { opacity: 1 }];
  if (kind === "modal") {
    return direction === "back"
      ? [
          { opacity: 0.6, transform: "scale(0.96)" },
          { opacity: 1, transform: "none" },
        ]
      : [{ transform: "translateY(100%)" }, { transform: "none" }];
  }
  return direction === "back"
    ? [
        { transform: "translateX(-30%)", opacity: 0.6 },
        { transform: "none", opacity: 1 },
      ]
    : [{ transform: "translateX(100%)" }, { transform: "none" }];
}

/**
 * Animates the new screen in whenever `screenKey` changes: push slides from the side,
 * fade through dips to blank first, modal rises from the bottom. Focus moves to the new
 * screen, and reduced motion turns every kind into a short fade.
 */
export function PageTransition({
  screenKey,
  kind,
  direction = "forward",
  children,
}: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const firstRef = useRef(true);

  const enter = useEffectEvent(() => {
    const element = ref.current;
    if (!element) return;
    element.focus({ preventScroll: true });
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    element.animate?.(reduce ? [{ opacity: 0 }, { opacity: 1 }] : frames(kind, direction), {
      duration: reduce ? 150 : 320,
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
  });

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    enter();
  }, [screenKey]);

  return (
    <div ref={ref} tabIndex={-1} className="h-full outline-none">
      {children}
    </div>
  );
}
