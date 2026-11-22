import { useId } from "react";

export interface WhatsNewItem {
  readonly title: string;
  readonly body: string;
}

export interface WhatsNewProps {
  readonly version: string;
  readonly items: readonly WhatsNewItem[];
  readonly onClose: () => void;
  readonly title?: string;
  readonly closeLabel?: string;
}

/**
 * Short list of what changed in an update, shown once after it. Three items at most,
 * each a benefit in plain words, and one button to close it.
 */
export function WhatsNew({
  version,
  items,
  onClose,
  title = "새로워진 점",
  closeLabel = "확인",
}: WhatsNewProps) {
  const id = useId();
  return (
    <section role="dialog" aria-labelledby={id} className="rounded-2xl bg-white p-5 shadow-xl">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id={id} className="text-lg font-bold text-slate-900">
          {title}
        </h2>
        <p className="text-xs text-slate-500">{version}</p>
      </div>
      <ul className="mt-3 grid gap-3 border-t border-slate-100 pt-3">
        {items.map((item) => (
          <li key={item.title}>
            <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
            <span className="block text-xs text-slate-600">{item.body}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        autoFocus
        onClick={onClose}
        className="mt-4 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {closeLabel}
      </button>
    </section>
  );
}
