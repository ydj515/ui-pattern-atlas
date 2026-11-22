import type { ReactNode } from "react";

export interface AllCaughtUpProps {
  readonly title?: string;
  readonly description?: string;
  /** Optional way to look back, e.g. "지난 알림 보기". */
  readonly action?: ReactNode;
}

/**
 * Positive empty state for a queue that has been worked through (inbox, to-dos,
 * notifications). It confirms the work is done rather than suggesting something is
 * missing, and says when new items will show up.
 */
export function AllCaughtUp({
  title = "모두 확인했어요",
  description = "새 알림이 오면 여기에 보여 드릴게요.",
  action,
}: AllCaughtUpProps) {
  return (
    <div role="status" className="rounded-xl bg-emerald-50 p-5 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-10 place-items-center rounded-full bg-white text-lg font-bold text-emerald-600"
      >
        ✓
      </span>
      <p className="mt-3 text-sm font-semibold text-emerald-950">{title}</p>
      <p className="mt-1 text-xs text-emerald-800">{description}</p>
      {action ? <div className="mt-3 text-xs">{action}</div> : null}
    </div>
  );
}
