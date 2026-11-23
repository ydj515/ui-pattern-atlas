export interface TrashItem {
  readonly id: string;
  readonly name: string;
  /** Days left before the item is deleted for good. */
  readonly daysLeft: number;
}

export interface TrashProps {
  readonly items: readonly TrashItem[];
  readonly onRestore: (id: string) => void;
  readonly labels?: {
    readonly title: string;
    readonly note: string;
    readonly empty: string;
    readonly daysLeft: (days: number) => string;
    readonly restore: string;
    readonly restoreName: (name: string) => string;
  };
}

const DEFAULT_LABELS = {
  title: "휴지통",
  note: "휴지통의 항목은 30일 뒤 영구 삭제돼요",
  empty: "휴지통이 비어 있어요",
  daysLeft: (days: number) => `${days}일 뒤 영구 삭제`,
  restore: "복원",
  restoreName: (name: string) => `${name} 복원`,
};

/**
 * Deleted items wait here for a fixed time, each with the days it has left and a restore
 * button, so deleting does not have to ask first.
 */
export function Trash({ items, onRestore, labels = DEFAULT_LABELS }: TrashProps) {
  return (
    <section className="grid gap-2 text-sm">
      <h3 className="font-semibold text-slate-900">{labels.title}</h3>
      <p className="text-xs text-slate-500">{labels.note}</p>
      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 px-3 py-6 text-center text-slate-500">
          {labels.empty}
        </p>
      ) : (
        <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-3 px-3 py-2.5">
              <span className="flex-1">
                <span className="block text-slate-900">{item.name}</span>
                <span
                  className={`text-xs ${item.daysLeft <= 3 ? "text-rose-600" : "text-slate-500"}`}
                >
                  {labels.daysLeft(item.daysLeft)}
                </span>
              </span>
              <button
                type="button"
                aria-label={labels.restoreName(item.name)}
                onClick={() => onRestore(item.id)}
                className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {labels.restore}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
