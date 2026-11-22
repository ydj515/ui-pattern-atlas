import type { ReactNode } from "react";

export interface ListItem {
  readonly id: string;
  readonly title: string;
  /** Second line, e.g. size and date. */
  readonly meta?: string;
  /** Decorative leading visual (icon, avatar). */
  readonly leading?: ReactNode;
  /** Short value on the right, e.g. "어제". */
  readonly trailing?: string;
}

export interface ListProps {
  readonly label: string;
  readonly items: readonly ListItem[];
  readonly onSelect: (id: string) => void;
}

/**
 * Rows with an icon, a title, a second line and a value on the right. Each row is one
 * button, so the whole row is the hit area and its name reads title first. Use a real
 * list so screen readers announce how many items there are.
 */
export function List({ label, items, onSelect }: ListProps) {
  return (
    <ul
      aria-label={label}
      className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white"
    >
      {items.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => onSelect(item.id)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none focus-visible:ring-inset"
          >
            {item.leading ? (
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600"
              >
                {item.leading}
              </span>
            ) : null}
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-slate-900">
                {item.title}
              </span>
              {item.meta ? (
                <span className="block truncate text-xs text-slate-500">{item.meta}</span>
              ) : null}
            </span>
            {item.trailing ? (
              <span className="shrink-0 text-xs text-slate-500">{item.trailing}</span>
            ) : null}
            <span aria-hidden="true" className="shrink-0 text-slate-300">
              ›
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
