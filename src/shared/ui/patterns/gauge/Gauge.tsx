export interface GaugeProps {
  readonly value: number;
  readonly min?: number;
  readonly max: number;
  /** Optional reference mark on the scale, e.g. a goal. */
  readonly target?: number;
  /** Accessible name, e.g. "오늘 걸음 수". */
  readonly label: string;
  readonly format?: (value: number) => string;
  readonly targetLabel?: (target: string) => string;
}

const ARC = "M 20 100 A 80 80 0 0 1 180 100";

/**
 * Half-circle meter for one value on a bounded scale, with an optional target mark.
 * It is a role="meter" with the value as text, so the number never depends on reading
 * the arc. The filled arc eases to a new value.
 */
export function Gauge({
  value,
  min = 0,
  max,
  target,
  label,
  format = (n) => n.toLocaleString("ko-KR"),
  targetLabel = (text) => `목표 ${text}`,
}: GaugeProps) {
  const ratio = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const targetRatio =
    target === undefined ? null : Math.min(Math.max((target - min) / (max - min), 0), 1);
  const angle = (r: number) => Math.PI * (1 - r);
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={`${format(value)} / ${format(max)}`}
      className="relative w-48"
    >
      <svg viewBox="0 0 200 112" aria-hidden="true" className="w-full">
        <path
          d={ARC}
          fill="none"
          strokeWidth={14}
          strokeLinecap="round"
          className="stroke-slate-200"
        />
        <path
          d={ARC}
          fill="none"
          strokeWidth={14}
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${ratio * 100} 100`}
          className="stroke-blue-600 transition-[stroke-dasharray] duration-500 motion-reduce:transition-none"
        />
        {targetRatio !== null ? (
          <line
            x1={100 + 64 * Math.cos(angle(targetRatio))}
            y1={100 - 64 * Math.sin(angle(targetRatio))}
            x2={100 + 96 * Math.cos(angle(targetRatio))}
            y2={100 - 96 * Math.sin(angle(targetRatio))}
            strokeWidth={2.5}
            className="stroke-slate-900"
          />
        ) : null}
      </svg>
      <p className="absolute inset-x-0 bottom-0 text-center leading-tight">
        <span className="block text-xl font-bold text-slate-900 tabular-nums">{format(value)}</span>
        <span className="text-xs text-slate-500 tabular-nums">
          {format(min)}~{format(max)}
          {target !== undefined ? ` · ${targetLabel(format(target))}` : ""}
        </span>
      </p>
    </div>
  );
}
