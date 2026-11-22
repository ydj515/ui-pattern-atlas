import type { ReactNode } from "react";

export interface SplitViewProps {
  readonly list: ReactNode;
  readonly detail: ReactNode;
  /** On narrow containers only one pane shows; this picks which. */
  readonly showDetail: boolean;
  readonly onBack: () => void;
  readonly backLabel?: string;
}

/**
 * List and detail side by side when there is room, one at a time when there is not.
 * It reacts to its own width (container query), not the window, so it also works inside
 * panels. On the narrow layout the detail gets a back button to the list.
 */
export function SplitView({
  list,
  detail,
  showDetail,
  onBack,
  backLabel = "목록",
}: SplitViewProps) {
  return (
    <div className="@container h-full">
      <div className="grid h-full @sm:grid-cols-[9rem_1fr]">
        <div
          className={`min-h-0 overflow-y-auto border-slate-200 @sm:block @sm:border-r ${showDetail ? "hidden" : "block"}`}
        >
          {list}
        </div>
        <div className={`min-h-0 overflow-y-auto @sm:block ${showDetail ? "block" : "hidden"}`}>
          <button
            type="button"
            onClick={onBack}
            className="m-2 rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 @sm:hidden"
          >
            <span aria-hidden="true">← </span>
            {backLabel}
          </button>
          {detail}
        </div>
      </div>
    </div>
  );
}
