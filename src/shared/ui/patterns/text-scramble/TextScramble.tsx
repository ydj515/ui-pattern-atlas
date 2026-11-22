import { useEffect, useState } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#";

export interface TextScrambleProps {
  readonly text: string;
  readonly duration?: number;
  readonly className?: string;
}

/**
 * Text that starts as random symbols and settles into the real characters from left to
 * right. Spaces stay put so the word shapes show early. Screen readers get the real text
 * throughout, and reduced motion shows it at once.
 */
export function TextScramble({ text, duration = 800, className = "" }: TextScrambleProps) {
  const chars = Array.from(text);
  const [shown, setShown] = useState(() =>
    chars.map((char) => (char === " " ? " " : GLYPHS[0])).join(""),
  );

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const letters = Array.from(text);
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const progress = reduce ? 1 : Math.min(1, (now - start) / duration);
      const settled = Math.floor(progress * letters.length);
      setShown(
        letters
          .map((char, index) => {
            if (index < settled || char === " ") return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [text, duration]);

  return (
    <span className={`font-mono ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}
