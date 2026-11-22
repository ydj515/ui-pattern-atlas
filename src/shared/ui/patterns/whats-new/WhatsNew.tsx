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
      <p className="text-xs font-semibold text-blue-700">{version}</p>
      <h2 id={id} className="mt-0.5 text-lg font-bold text-slate-900">
        {title}
      </h2>
      <ol className="mt-3 grid gap-3">
        {items.map((item, index) => (
          <li key={item.title} className="flex gap-3">
            <span
              aria-hidden="true"
              className="grid size-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700"
            >
              {index + 1}
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
              <span className="block text-xs text-slate-600">{item.body}</span>
            </span>
          </li>
        ))}
      </ol>
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
