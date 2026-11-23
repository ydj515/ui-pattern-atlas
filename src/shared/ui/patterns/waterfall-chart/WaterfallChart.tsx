import { useId, useState } from "react";

export interface WaterfallStep {
  readonly label: string;
  /** Positive adds, negative subtracts. */
  readonly value: number;
}

export interface WaterfallChartProps {
  readonly title: string;
  readonly start: WaterfallStep;
  readonly steps: readonly WaterfallStep[];
  /** Name of the final total bar, e.g. "순이익". */
  readonly endLabel: string;
  readonly format?: (value: number) => string;
  readonly legend?: { readonly up: string; readonly down: string; readonly total: string };
  readonly tableLabel?: string;
}

const H = 150;

/**
 * Waterfall: a starting total, then each increase or decrease as a floating bar from
 * the running total, ending in the result. Increases and decreases differ in colour and
 * sign; pointing at a bar reads its change and the running total.
 */
export function WaterfallChart({
  title,
  start,
  steps,
  endLabel,
  format = (value) => value.toLocaleString("ko-KR"),
  legend = { up: "늘어남", down: "줄어듦", total: "합계" },
  tableLabel = "표로 보기",
}: WaterfallChartProps) {
  const id = useId();
  const [active, setActive] = useState<number | null>(null);
  const after = steps.map(
    (_, index) =>
      start.value + steps.slice(0, index + 1).reduce((sum, step) => sum + step.value, 0),
  );
  const end = after.at(-1) ?? start.value;
  const bars = [
    { label: start.label, from: 0, to: start.value, kind: "total" as const, change: start.value },
    ...steps.map((step, index) => ({
      label: step.label,
      from: index === 0 ? start.value : (after[index - 1] ?? 0),
      to: after[index] ?? 0,
      kind: step.value >= 0 ? ("up" as const) : ("down" as const),
      change: step.value,
    })),
    { label: endLabel, from: 0, to: end, kind: "total" as const, change: end },
  ];
  const top = Math.max(...bars.map((bar) => Math.max(bar.from, bar.to)), 1);
  const y = (value: number) => H - (value / top) * (H - 16);
  const tone = { up: "bg-blue-600", down: "bg-orange-500", total: "bg-slate-600" };
  const current = active === null ? null : bars[active];
  const signed = (value: number) =>
    `${value > 0 ? "+" : value < 0 ? "−" : ""}${format(Math.abs(value))}`;

  return (
    <figure aria-labelledby={id}>
      <figcaption id={id} className="text-sm font-semibold text-slate-900">
        {title}
      </figcaption>
      <ul className="mt-2 flex gap-3 text-xs text-slate-600">
        {(["up", "down", "total"] as const).map((kind) => (
          <li key={kind} className="flex items-center gap-1">
            <span aria-hidden="true" className={`size-2.5 rounded-sm ${tone[kind]}`} />
            {legend[kind]}
          </li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="relative mt-2 flex gap-1 border-b border-slate-300"
        style={{ height: H }}
        onPointerLeave={() => setActive(null)}
      >
        {bars.map((bar, index) => {
          const high = Math.max(bar.from, bar.to);
          const low = Math.min(bar.from, bar.to);
          return (
            <span
              key={bar.label}
              className="relative flex-1"
              onPointerEnter={() => setActive(index)}
            >
              <span
                className={`absolute inset-x-0.5 rounded-sm ${tone[bar.kind]} ${active === index ? "brightness-110" : ""}`}
                style={{ top: y(high), height: Math.max(y(low) - y(high), 2) }}
              />
              <span
                className="absolute inset-x-0 text-center text-[10px] text-slate-700 tabular-nums"
                style={{ top: y(high) - 14 }}
              >
                {bar.kind === "total" ? format(bar.to) : signed(bar.change)}
              </span>
            </span>
          );
        })}
      </div>
      <div aria-hidden="true" className="flex gap-1 text-[10px] text-slate-500">
        {bars.map((bar) => (
          <span key={bar.label} className="flex-1 truncate text-center">
            {bar.label}
          </span>
        ))}
      </div>
      <p aria-hidden="true" className="mt-1 h-4 text-xs text-slate-700 tabular-nums">
        {current
          ? current.kind === "total"
            ? `${current.label} ${format(current.to)}`
            : `${current.label} ${signed(current.change)} → ${format(current.to)}`
          : ""}
      </p>
      <details className="mt-1 text-xs">
        <summary className="cursor-pointer text-slate-600">{tableLabel}</summary>
        <table className="mt-2 w-full text-left tabular-nums">
          <tbody>
            {bars.map((bar) => (
              <tr key={bar.label}>
                <th scope="row" className="font-normal text-slate-600">
                  {bar.label}
                </th>
                <td>{bar.kind === "total" ? format(bar.to) : signed(bar.change)}</td>
                <td>{format(bar.to)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
