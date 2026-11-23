export interface BulletChartProps {
  readonly label: string;
  readonly value: number;
  readonly target: number;
  readonly max: number;
  /** Upper ends of the qualitative bands, low to high, e.g. [50, 75] for poor / fair / good. */
  readonly bands: readonly number[];
  readonly format?: (value: number) => string;
  readonly targetLabel?: (target: string) => string;
}

const BAND_TONES = ["bg-slate-300", "bg-slate-200", "bg-slate-100"];

/**
 * Bullet chart: a compact bar for one measure against a target line and grey bands for
 * poor, fair and good. Several stack neatly in a dashboard, and the value and target are
 * written as text beside the bar.
 */
export function BulletChart({
  label,
  value,
  target,
  max,
  bands,
  format = (n) => n.toLocaleString("ko-KR"),
  targetLabel = (text) => `목표 ${text}`,
}: BulletChartProps) {
  const percent = (n: number) => `${Math.min(Math.max(n / max, 0), 1) * 100}%`;
  const edges = [...bands, max];
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={`${format(value)}, ${targetLabel(format(target))}`}
      className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-xs"
    >
      <span className="text-slate-700">{label}</span>
      <span className="grid gap-1">
        <span aria-hidden="true" className="relative h-5 overflow-hidden rounded">
          {edges.map((edge, index) => {
            const from = index === 0 ? 0 : (edges[index - 1] ?? 0);
            return (
              <span
                key={edge}
                className={`absolute inset-y-0 ${BAND_TONES[index] ?? "bg-slate-100"}`}
                style={{ left: percent(from), width: `calc(${percent(edge)} - ${percent(from)})` }}
              />
            );
          })}
          <span
            className="absolute inset-y-1.5 left-0 z-10 rounded-r-sm bg-blue-700 transition-[width] duration-500 motion-reduce:transition-none"
            style={{ width: percent(value) }}
          />
          <span
            className="absolute inset-y-0.5 z-20 w-0.5 bg-slate-900"
            style={{ left: percent(target) }}
          />
        </span>
        <span className="flex justify-between text-slate-600 tabular-nums">
          <b className="text-slate-900">{format(value)}</b>
          <span>{targetLabel(format(target))}</span>
        </span>
      </span>
    </div>
  );
}
