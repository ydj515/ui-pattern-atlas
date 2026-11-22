import type { ReactNode } from "react";

export interface EmptyStateProps {
  /** Decorative illustration or icon. It is hidden from assistive technology. */
  readonly icon?: ReactNode;
  readonly title: string;
  readonly description?: string;
  /** The next step that gets the user out of the empty state. */
  readonly action?: ReactNode;
}

/** Explains why there is nothing to show and what the user can do next. */
export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
      {icon ? (
        <div
          aria-hidden="true"
          className="mb-4 grid size-12 place-items-center rounded-full bg-slate-100 text-slate-500"
        >
          {icon}
        </div>
      ) : null}
      <p className="text-base font-semibold text-slate-900">{title}</p>
      {description ? (
        <p className="mt-1.5 max-w-xs text-sm leading-6 text-slate-500">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
