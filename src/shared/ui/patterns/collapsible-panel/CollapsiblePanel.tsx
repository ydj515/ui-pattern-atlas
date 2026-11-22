import { useId, type ReactNode } from "react";

export interface CollapsiblePanelProps {
  readonly title: string;
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly children: ReactNode;
  readonly collapseLabel?: string;
  readonly expandLabel?: string;
  /** Width when open, in px. */
  readonly width?: number;
}

/**
 * Side area (properties, filters, comments) that folds into a narrow rail to give the
 * main content more room. The rail keeps a button with aria-expanded, so the panel can
 * always be brought back; folded content is hidden from keyboard and screen readers.
 */
export function CollapsiblePanel({
  title,
  open,
  onOpenChange,
  children,
  collapseLabel = "패널 접기",
  expandLabel = "패널 펼치기",
  width = 176,
}: CollapsiblePanelProps) {
  const id = useId();
  return (
    <aside
      aria-label={title}
      className="flex shrink-0 flex-col border-l border-slate-200 bg-white transition-[width] duration-200 motion-reduce:transition-none"
      style={{ width: open ? width : 40 }}
    >
      <div className="flex h-10 items-center justify-between gap-2 border-b border-slate-100 px-2">
        {open ? (
          <h3 className="truncate pl-1 text-xs font-semibold text-slate-900">{title}</h3>
        ) : null}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          aria-label={open ? collapseLabel : expandLabel}
          onClick={() => onOpenChange(!open)}
          className="grid size-7 shrink-0 place-items-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <span aria-hidden="true">{open ? "»" : "«"}</span>
        </button>
      </div>
      <div id={id} hidden={!open} className="min-w-0 flex-1 overflow-y-auto p-3 text-sm">
        {children}
      </div>
    </aside>
  );
}
