import { useEffect, useState } from "react";

export interface ThinkingIndicatorProps {
  readonly label?: string;
  /** Shows elapsed seconds after this many seconds, for long waits. */
  readonly showSecondsAfter?: number;
  readonly seconds?: (value: number) => string;
}

/**
 * Small "thinking" bubble with three pulsing dots while an answer is being prepared.
 * After a few seconds it adds the elapsed time, so a long wait does not look stuck. It
 * is a status region; the dots stop for reduced motion.
 */
export function ThinkingIndicator({
  label = "생각하는 중",
  showSecondsAfter = 3,
  seconds = (value) => `${value}초`,
}: ThinkingIndicatorProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="status"
      className="inline-flex items-center gap-2 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-slate-600 shadow-sm"
    >
      <span aria-hidden="true" className="flex gap-1">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 animate-bounce rounded-full bg-slate-400 motion-reduce:animate-none"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </span>
      {label}
      {elapsed >= showSecondsAfter ? (
        <span className="text-xs text-slate-400 tabular-nums">{seconds(elapsed)}</span>
      ) : null}
    </div>
  );
}
