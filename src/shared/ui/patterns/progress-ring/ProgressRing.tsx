export interface ProgressRingProps {
  /** 0–100. */
  readonly value: number;
  /** What is progressing, e.g. "사진 백업". Read as the progressbar's name. */
  readonly label: string;
  /** Outer size in px. */
  readonly size?: number;
  readonly strokeWidth?: number;
}

/**
 * Circular progress for tight spaces (a card corner, an upload thumbnail).
 *
 * It is a real progressbar with the current value, so the arc is not the only signal.
 * The percentage in the middle is hidden from screen readers to avoid reading it twice.
 */
export function ProgressRing({ value, label, size = 56, strokeWidth = 5 }: ProgressRingProps) {
  const clamped = Math.round(Math.min(100, Math.max(0, value)));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className="relative inline-grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped / 100)}
          className={`transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none ${
            clamped === 100 ? "stroke-emerald-500" : "stroke-blue-600"
          }`}
        />
      </svg>
      <span aria-hidden="true" className="text-xs font-semibold text-slate-900 tabular-nums">
        {clamped}%
      </span>
    </div>
  );
}
