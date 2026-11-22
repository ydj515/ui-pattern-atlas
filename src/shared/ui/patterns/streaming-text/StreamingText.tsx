import { useEffect, useState } from "react";

export interface StreamingTextProps {
  /** Full answer; it is revealed a few characters at a time. */
  readonly text: string;
  readonly running: boolean;
  readonly onDone: () => void;
  /** Characters added per tick. */
  readonly chunk?: number;
  readonly interval?: number;
}

/**
 * Answer that appears as it is written, with a caret while it streams. The region is
 * aria-busy until it ends, so screen readers read the finished answer once instead of
 * every fragment; stopping keeps what was written so far.
 */
export function StreamingText({
  text,
  running,
  onDone,
  chunk = 3,
  interval = 40,
}: StreamingTextProps) {
  const [shown, setShown] = useState(0);
  const chars = Array.from(text);
  const done = shown >= chars.length;

  useEffect(() => {
    if (!running || done) return;
    const timer = window.setInterval(
      () => setShown((count) => Math.min(chars.length, count + chunk)),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [running, done, chars.length, chunk, interval]);

  useEffect(() => {
    if (done) onDone();
  }, [done, onDone]);

  return (
    <p
      aria-busy={running && !done}
      aria-live="polite"
      className="text-sm leading-relaxed whitespace-pre-wrap text-slate-900"
    >
      {chars.slice(0, shown).join("")}
      {running && !done ? (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-slate-400 motion-reduce:animate-none"
        />
      ) : null}
    </p>
  );
}
