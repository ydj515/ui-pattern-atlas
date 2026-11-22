import { useEffect, useState } from "react";

export interface TypewriterProps {
  readonly text: string;
  /** Milliseconds per character. */
  readonly speed?: number;
  readonly className?: string;
}

/**
 * Sentence that appears one character at a time with a blinking caret, then stops.
 * Screen readers get the whole sentence from the start, and reduced motion shows
 * it at once.
 */
export function Typewriter({ text, speed = 70, className = "" }: TypewriterProps) {
  const [count, setCount] = useState(0);
  const chars = Array.from(text);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let shown = 0;
    const timer = window.setInterval(
      () => {
        shown = reduce ? chars.length : shown + 1;
        setCount(shown);
        if (shown >= chars.length) window.clearInterval(timer);
      },
      reduce ? 0 : speed,
    );
    return () => window.clearInterval(timer);
  }, [chars.length, speed]);

  const done = count >= chars.length;
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{chars.slice(0, count).join("")}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-current ${done ? "animate-pulse motion-reduce:animate-none" : ""}`}
      />
    </span>
  );
}
