export interface KpiCardProps {
  readonly label: string;
  /** Formatted current value, e.g. "1,240만 원". */
  readonly value: string;
  /** Change against the comparison period as a ratio: 0.12 is +12%. */
  readonly change: number;
  /** What it is compared with, e.g. "지난주 대비". */
  readonly comparison: string;
  /** Which direction is good; a fall in 반품률 is good news. */
  readonly goodWhen?: "up" | "down";
  readonly changeLabels?: {
    readonly up: (percent: string) => string;
    readonly down: (percent: string) => string;
    readonly same: string;
  };
}

const DEFAULT_LABELS = {
  up: (percent: string) => `${percent} 증가`,
  down: (percent: string) => `${percent} 감소`,
  same: "변동 없음",
};

/**
 * One key number with its change against a stated period. The change has an arrow, a
 * sign and words, and its colour says whether the change is good for this metric, so
 * colour is never the only cue.
 */
export function KpiCard({
  label,
  value,
  change,
  comparison,
  goodWhen = "up",
  changeLabels = DEFAULT_LABELS,
}: KpiCardProps) {
  const percent = `${Math.abs(Math.round(change * 1000) / 10)}%`;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "same";
  const tone =
    direction === "same"
      ? "text-slate-500"
      : direction === goodWhen
        ? "text-emerald-700"
        : "text-rose-700";
  return (
    <section aria-label={label} className="rounded-xl border border-slate-200 bg-white p-3">
      <h3 className="text-xs text-slate-600">{label}</h3>
      <p className="mt-1 text-xl font-bold text-slate-900 tabular-nums">{value}</p>
      <p className={`mt-1 flex items-center gap-1 text-xs font-medium ${tone}`}>
        <span aria-hidden="true">
          {direction === "up" ? "▲" : direction === "down" ? "▼" : "–"}
        </span>
        <span>
          {comparison} {direction === "same" ? changeLabels.same : changeLabels[direction](percent)}
        </span>
      </p>
    </section>
  );
}
