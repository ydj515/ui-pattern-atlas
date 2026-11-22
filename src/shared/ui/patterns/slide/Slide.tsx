import { useState, type ReactNode } from "react";

const AWAY = {
  bottom: "translate-y-full starting:translate-y-full",
  top: "-translate-y-full starting:-translate-y-full",
  left: "-translate-x-full starting:-translate-x-full",
  right: "translate-x-full starting:translate-x-full",
} as const;
const ENTER = {
  bottom: "starting:translate-y-full",
  top: "starting:-translate-y-full",
  left: "starting:-translate-x-full",
  right: "starting:translate-x-full",
} as const;

export type SlideFrom = keyof typeof AWAY;

export interface SlideProps {
  readonly show: boolean;
  readonly from: SlideFrom;
  readonly children: ReactNode;
}

/**
 * Moves content in from one edge and back out the same way, so people see where it came
 * from and where it went. Put it inside an overflow-hidden box; reduced motion shows and
 * removes it without movement.
 */
export function Slide({ show, from, children }: SlideProps) {
  const [mounted, setMounted] = useState(show);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (show && !mounted) setMounted(true);
  if (!show && mounted && reduce) setMounted(false);
  if (!mounted) return null;

  return (
    <div
      aria-hidden={!show}
      onTransitionEnd={(event) => {
        // Ignore transitions that bubble up from the content.
        if (!show && event.target === event.currentTarget) setMounted(false);
      }}
      className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${show ? `translate-0 ${ENTER[from]}` : AWAY[from]}`}
    >
      {children}
    </div>
  );
}
