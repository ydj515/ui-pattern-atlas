export interface BulkItem {
  readonly id: string;
  readonly name: string;
  readonly detail?: string;
}

export interface BulkActionsProps {
  readonly items: readonly BulkItem[];
  readonly selected: ReadonlySet<string>;
  readonly onSelectedChange: (selected: ReadonlySet<string>) => void;
  /** Called with the chosen action and the selected ids. */
  readonly onAction: (action: "archive" | "delete", ids: readonly string[]) => void;
  readonly labels?: {
    readonly count: (count: number) => string;
    readonly archive: string;
    readonly delete: string;
    readonly clear: string;
    readonly toolbar: string;
  };
}

const DEFAULT_LABELS = {
  count: (count: number) => `${count}개 선택`,
  archive: "보관",
  delete: "삭제",
  clear: "선택 해제",
  toolbar: "선택한 항목 작업",
};

/**
 * A list where checking rows brings up one bar of actions for all of them, with the count
 * the action will touch always in view.
 */
export function BulkActions({
  items,
  selected,
  onSelectedChange,
  onAction,
  labels = DEFAULT_LABELS,
}: BulkActionsProps) {
  const ids = items.filter((item) => selected.has(item.id)).map((item) => item.id);
  const toggle = (id: string, checked: boolean) => {
    const next = new Set(selected);
    if (checked) next.add(id);
    else next.delete(id);
    onSelectedChange(next);
  };
  return (
    <div className="grid gap-2 text-sm">
      <div
        role="toolbar"
        aria-label={labels.toolbar}
        hidden={ids.length === 0}
        className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white"
      >
        <span className="flex-1 text-xs" aria-live="polite">
          {labels.count(ids.length)}
        </span>
        <button
          type="button"
          onClick={() => onAction("archive", ids)}
          className="rounded-md px-2 py-1 text-xs"
        >
          {labels.archive}
        </button>
        <button
          type="button"
          onClick={() => onAction("delete", ids)}
          className="rounded-md bg-rose-500 px-2 py-1 text-xs font-medium"
        >
          {labels.delete}
        </button>
        <button
          type="button"
          onClick={() => onSelectedChange(new Set())}
          className="rounded-md px-2 py-1 text-xs text-slate-300"
        >
          {labels.clear}
        </button>
      </div>
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex items-center gap-3 px-3 py-2.5 has-checked:bg-slate-50">
              <input
                type="checkbox"
                checked={selected.has(item.id)}
                onChange={(event) => toggle(item.id, event.target.checked)}
              />
              <span className="flex-1 text-slate-900">{item.name}</span>
              {item.detail ? <span className="text-xs text-slate-500">{item.detail}</span> : null}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
