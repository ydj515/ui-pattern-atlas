import { useId, type ReactNode } from "react";

export interface ExpandCardProps {
  readonly title: string;
  readonly summary: ReactNode;
  readonly children: ReactNode;
  readonly expanded: boolean;
  readonly onExpandedChange: (expanded: boolean) => void;
}

/**
 * Card that grows in place to show its details. The height animates with
 * grid-template-rows (0fr → 1fr), so it follows the real content height without
 * measuring, and the collapsed details are inert.
 */
export function ExpandCard({
  title,
  summary,
  children,
  expanded,
  onExpandedChange,
}: ExpandCardProps) {
  const id = useId();
  return (
    <section
      className={`rounded-2xl border bg-white transition-[box-shadow,border-color] duration-300 motion-reduce:transition-none ${expanded ? "border-slate-300 shadow-lg" : "border-slate-200 shadow-sm"}`}
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => onExpandedChange(!expanded)}
        className="flex w-full items-center gap-3 rounded-2xl p-4 text-left focus-visible:outline-2 focus-visible:outline-blue-600"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-slate-900">{title}</span>
          <span className="block text-xs text-slate-600">{summary}</span>
        </span>
        <span
          aria-hidden="true"
          className={`text-slate-500 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div
        id={id}
        inert={!expanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
