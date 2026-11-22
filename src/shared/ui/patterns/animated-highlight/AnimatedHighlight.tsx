import { useEffect, useRef, useState, type ReactNode } from "react";

export interface AnimatedHighlightProps {
  readonly children: ReactNode;
  readonly delay?: number;
}

/**
 * Marker that sweeps behind a key phrase, left to right, the first time it scrolls into
 * view. It is a real <mark>, so the emphasis does not depend on the animation; without
 * IntersectionObserver or with reduced motion it is simply highlighted.
 */
export function AnimatedHighlight({ children, delay = 200 }: AnimatedHighlightProps) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setOn(true);
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <mark
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-gradient-to-r from-amber-200 to-amber-200 bg-left bg-no-repeat px-0.5 text-inherit transition-[background-size] duration-700 ease-out motion-reduce:bg-size-[100%_100%] motion-reduce:transition-none ${on ? "bg-size-[100%_100%]" : "bg-size-[0%_100%]"}`}
    >
      {children}
    </mark>
  );
}
