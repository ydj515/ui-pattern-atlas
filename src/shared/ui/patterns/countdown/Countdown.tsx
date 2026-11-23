import { useEffect, useState } from "react";

export interface CountdownProps {
  /** The real end time; the countdown never restarts after it. */
  readonly endsAt: Date;
  /** Spoken and shown end time, e.g. "11월 30일 23:59". */
  readonly endLabel: string;
  readonly endedLabel?: string;
  readonly leftLabel?: string;
}

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Time left until a real end time, with the end time itself written next to it. It
 * stops at zero and says the offer ended instead of starting over, and the ticking
 * digits are hidden from screen readers, which get the end time once.
 */
export function Countdown({
  endsAt,
  endLabel,
  endedLabel = "할인이 끝났어요",
  leftLabel = "남은 시간",
}: CountdownProps) {
  const [now, setNow] = useState(() => Date.now());
  const left = endsAt.getTime() - now;
  const ended = left <= 0;

  useEffect(() => {
    if (ended) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [ended]);

  if (ended) {
    return (
      <p role="status" className="text-sm font-semibold text-slate-500">
        {endedLabel}
      </p>
    );
  }
  const { hours, minutes, seconds } = parts(left);
  return (
    <p className="flex flex-wrap items-baseline gap-2 text-sm text-slate-700">
      <span aria-hidden="true">{leftLabel}</span>
      <span aria-hidden="true" className="font-mono text-lg font-bold text-rose-600 tabular-nums">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
      <span className="text-xs text-slate-500">{endLabel} 종료</span>
    </p>
  );
}
