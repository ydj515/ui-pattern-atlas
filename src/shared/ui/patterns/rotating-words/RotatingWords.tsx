import { useEffect, useState } from "react";

export interface RotatingWordsProps {
  /** Text before the changing word. */
  readonly lead: string;
  readonly words: readonly string[];
  readonly interval?: number;
  readonly pauseLabel?: string;
  readonly playLabel?: string;
}

/**
 * Sentence whose last word changes in place, rising out as the next one rises in.
 * Screen readers read every word once instead of each change; a pause button stops it
 * (WCAG 2.2.2), and reduced motion keeps the first word.
 */
export function RotatingWords({
  lead,
  words,
  interval = 2000,
  pauseLabel = "멈추기",
  playLabel = "재생",
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const running = !paused && !reduce && words.length > 1;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [running, interval, words.length]);

  return (
    <div className="flex items-center gap-3">
      <p className="text-2xl font-bold text-slate-900">
        <span className="sr-only">
          {lead} {words.join(", ")}
        </span>
        <span aria-hidden="true">
          {lead}{" "}
          <span className="relative inline-grid overflow-hidden align-bottom">
            {words.map((word, wordIndex) => (
              <span
                key={word}
                className={`col-start-1 row-start-1 text-blue-700 transition duration-500 ease-out motion-reduce:transition-none ${wordIndex === index ? "translate-y-0 opacity-100" : wordIndex === (index - 1 + words.length) % words.length ? "-translate-y-full opacity-0" : "translate-y-full opacity-0"}`}
              >
                {word}
              </span>
            ))}
          </span>
        </span>
      </p>
      {words.length > 1 && !reduce ? (
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700"
        >
          {paused ? playLabel : pauseLabel}
        </button>
      ) : null}
    </div>
  );
}
