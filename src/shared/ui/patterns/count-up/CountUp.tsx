import { useEffect, useState } from "react";

export interface CountUpProps {
  /** Final value. */
  readonly to: number;
  readonly from?: number;
  readonly duration?: number;
  readonly format?: (value: number) => string;
}

const defaultFormat = (value: number) => Math.round(value).toLocaleString("ko-KR");

/**
 * Number that runs up from `from` and slows down as it lands on `to` (ease-out).
 * Screen readers get only the final value, and reduced motion shows it right away.
 */
export function CountUp({ to, from = 0, duration = 1200, format = defaultFormat }: CountUpProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const t = reduce ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [from, to, duration]);

  return (
    <span className="tabular-nums">
      <span aria-hidden="true">{format(value)}</span>
      <span className="sr-only">{format(to)}</span>
    </span>
  );
}
