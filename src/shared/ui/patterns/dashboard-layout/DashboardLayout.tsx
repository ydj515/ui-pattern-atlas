import type { ReactNode } from "react";

export interface Metric {
  readonly label: string;
  readonly value: string;
  /** Change against the previous period, e.g. "+12%". */
  readonly change?: string;
  readonly positive?: boolean;
}

export interface DashboardLayoutProps {
  readonly metrics: readonly Metric[];
  readonly chart: ReactNode;
  readonly detail: ReactNode;
  readonly toolbar?: ReactNode;
}

/**
 * Dashboard laid out in reading order: the few headline numbers first, the trend chart
 * second, the detailed table last. Metric cards are a list so the count is announced, and
 * changes say "증가/감소" in text, not only with colour and arrows.
 */
export function DashboardLayout({ metrics, chart, detail, toolbar }: DashboardLayoutProps) {
  return (
    <div className="space-y-3">
      {toolbar}
      <ul className="grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <li key={metric.label} className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs text-slate-500">{metric.label}</p>
            <p className="mt-1 text-lg font-semibold text-slate-900 tabular-nums">{metric.value}</p>
            {metric.change ? (
              <p className={`text-xs ${metric.positive ? "text-emerald-700" : "text-rose-700"}`}>
                <span aria-hidden="true">{metric.positive ? "▲" : "▼"} </span>
                {metric.change}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="rounded-xl border border-slate-200 bg-white p-3">{chart}</div>
      <div className="rounded-xl border border-slate-200 bg-white">{detail}</div>
    </div>
  );
}
