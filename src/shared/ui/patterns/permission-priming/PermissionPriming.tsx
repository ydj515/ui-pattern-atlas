import type { ReactNode } from "react";

export interface PermissionPrimingProps {
  readonly icon: ReactNode;
  readonly title: string;
  /** Concrete reasons: what people get, and what you will not do. */
  readonly reasons: readonly string[];
  readonly allowLabel: string;
  readonly laterLabel?: string;
  readonly onAllow: () => void;
  readonly onLater: () => void;
}

/**
 * Screen shown before the system permission prompt that says why the app needs it, at
 * the moment it is needed. 나중에 is a real choice that does not trigger the system
 * prompt, so a "no" here leaves the system prompt for a better time.
 */
export function PermissionPriming({
  icon,
  title,
  reasons,
  allowLabel,
  laterLabel = "나중에",
  onAllow,
  onLater,
}: PermissionPrimingProps) {
  return (
    <section aria-label={title} className="rounded-2xl bg-white p-5 text-center">
      <div
        aria-hidden="true"
        className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-700"
      >
        {icon}
      </div>
      <h2 className="text-base font-bold text-slate-900">{title}</h2>
      <ul className="mt-3 grid gap-1.5 text-left text-sm text-slate-700">
        {reasons.map((reason) => (
          <li key={reason} className="flex gap-2">
            <span aria-hidden="true" className="text-blue-600">
              ✓
            </span>
            {reason}
          </li>
        ))}
      </ul>
      <div className="mt-4 grid gap-2">
        <button
          type="button"
          onClick={onAllow}
          className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
        >
          {allowLabel}
        </button>
        <button
          type="button"
          onClick={onLater}
          className="rounded-lg py-2 text-sm text-slate-600 hover:bg-slate-100"
        >
          {laterLabel}
        </button>
      </div>
    </section>
  );
}
