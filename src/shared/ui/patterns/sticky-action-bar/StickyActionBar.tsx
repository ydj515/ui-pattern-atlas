import type { ReactNode } from "react";

export interface StickyActionBarProps {
  /** Short summary on the left, e.g. the price. */
  readonly summary: ReactNode;
  readonly action: ReactNode;
}

/**
 * Bar pinned to the bottom of the screen with the one action people came for (구매하기,
 * 예약하기) and a short summary. It sits inside the thumb zone, clears the home indicator
 * (safe-area-inset-bottom), and the page below it gets matching bottom padding so nothing
 * is hidden behind it.
 */
export function StickyActionBar({ summary, action }: StickyActionBarProps) {
  return (
    <div className="sticky bottom-0 z-10 flex items-center justify-between gap-3 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
      <div className="min-w-0 text-sm">{summary}</div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}
