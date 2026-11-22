import type { ReactNode } from "react";

export interface DescriptionItem {
  readonly term: string;
  readonly details: ReactNode;
}

export interface DescriptionListProps {
  readonly items: readonly DescriptionItem[];
  readonly title?: string;
}

/**
 * Label and value pairs (order details, profile, specs) as a real <dl>, so each value is
 * read with its label. Labels sit in a narrow column on wide screens and above the value
 * on narrow ones.
 */
export function DescriptionList({ items, title }: DescriptionListProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white px-4 py-3" aria-label={title}>
      {title ? <h3 className="pb-2 text-sm font-semibold text-slate-900">{title}</h3> : null}
      <dl className="divide-y divide-slate-100 text-sm">
        {items.map((item) => (
          <div key={item.term} className="grid gap-0.5 py-2 sm:grid-cols-[6rem_1fr] sm:gap-3">
            <dt className="text-slate-500">{item.term}</dt>
            <dd className="text-slate-900">{item.details}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
