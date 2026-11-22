import { useId } from "react";

interface ProgressBarProps {
  readonly label: string;
  readonly percent: number;
  /**
   * How long the fill takes to reach a new value. Match it to how often the value
   * updates (e.g. every 220 ms) so the bar moves at an even speed instead of jumping.
   */
  readonly smoothMs?: number;
}

/**
 * Determinate progress. The native <progress> element carries the value for assistive
 * technology; the visible fill is a scaled bar so it can glide between updates.
 */
export function ProgressBar({ label, percent, smoothMs = 300 }: ProgressBarProps) {
  const id = useId();
  const value = Math.min(100, Math.max(0, Number.isFinite(percent) ? percent : 0));
  return (
    <div className="grid gap-2 text-sm text-slate-700">
      <div className="flex justify-between gap-3">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <span aria-hidden="true" className="tabular-nums">
          {Math.round(value)}%
        </span>
      </div>
      <progress id={id} value={value} max={100} className="sr-only" />
      <div aria-hidden="true" className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full origin-left rounded-full bg-blue-700 transition-transform ease-linear motion-reduce:transition-none"
          style={{ transform: `scaleX(${value / 100})`, transitionDuration: `${smoothMs}ms` }}
        />
      </div>
    </div>
  );
}
