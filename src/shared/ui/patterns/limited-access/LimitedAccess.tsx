import type { ReactNode } from "react";

export interface LimitedAccessProps {
  /** e.g. "사진 3장만 볼 수 있어요". */
  readonly summary: string;
  readonly manageLabel?: string;
  readonly onManage: () => void;
  readonly children: ReactNode;
}

/**
 * Library view when people allowed only some items (selected photos). It works with
 * what it got, says so in one line, and offers to change the selection right where it
 * is needed instead of asking for everything up front.
 */
export function LimitedAccess({
  summary,
  manageLabel = "선택 변경",
  onManage,
  children,
}: LimitedAccessProps) {
  return (
    <section className="grid gap-2">
      <div
        role="status"
        className="flex items-center justify-between gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-700"
      >
        <span>{summary}</span>
        <button type="button" onClick={onManage} className="shrink-0 font-semibold text-blue-700">
          {manageLabel}
        </button>
      </div>
      {children}
    </section>
  );
}
