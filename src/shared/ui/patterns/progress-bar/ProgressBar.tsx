import { useId } from "react";

interface ProgressBarProps {
  readonly label: string;
  readonly percent: number;
}

export function ProgressBar({ label, percent }: ProgressBarProps) {
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
      <progress id={id} value={value} max={100} className="h-2 w-full accent-blue-700" />
    </div>
  );
}
