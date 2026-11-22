import { useEffect, useRef, useState, type ReactNode } from "react";

const HIDDEN = {
  "fade-up": "translate-y-6 opacity-0",
  "scale-in": "scale-90 opacity-0",
  fade: "opacity-0",
} as const;

export interface RevealProps {
  readonly children: ReactNode;
  readonly variant?: keyof typeof HIDDEN;
  /** Delay in ms, for revealing siblings one after another. */
  readonly delay?: number;
}

/**
 * Fades content in the first time it scrolls into view (IntersectionObserver). Content
 * is shown immediately where the observer is missing, and reduced motion shows it
 * without movement, so nothing stays hidden.
 */
export function Reveal({ children, variant = "fade-up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-opacity ${visible ? "" : HIDDEN[variant]}`}
    >
      {children}
    </div>
  );
}
