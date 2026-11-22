import { useState, type ReactNode } from "react";

export interface FadeProps {
  readonly show: boolean;
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Fades content in when it appears and out before it is removed. The entrance uses CSS
 * @starting-style (Tailwind `starting:`), the exit waits for transitionend, and reduced
 * motion removes it right away.
 */
export function Fade({ show, children, className = "" }: FadeProps) {
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
      className={`transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0 ${show ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
