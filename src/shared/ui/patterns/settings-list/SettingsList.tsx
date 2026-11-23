import { useId } from "react";

export type SettingsRow =
  | {
      readonly id: string;
      readonly label: string;
      readonly kind: "switch";
      readonly checked: boolean;
      readonly description?: string;
    }
  | { readonly id: string; readonly label: string; readonly kind: "value"; readonly value: string }
  | {
      readonly id: string;
      readonly label: string;
      readonly kind: "action";
      readonly tone?: "danger";
    };

export interface SettingsSection {
  readonly title: string;
  readonly rows: readonly SettingsRow[];
}

export interface SettingsListProps {
  readonly sections: readonly SettingsSection[];
  readonly onToggle: (id: string, checked: boolean) => void;
  readonly onOpen: (id: string) => void;
}

/**
 * Settings grouped under headings. Each row says what it does by its shape: a switch
 * changes at once, a value with a chevron opens a choice, and a plain action does
 * something (destructive ones in red).
 */
export function SettingsList({ sections, onToggle, onOpen }: SettingsListProps) {
  const id = useId();
  return (
    <div className="grid gap-4 text-sm">
      {sections.map((section, index) => (
        <section key={section.title} aria-labelledby={`${id}-${index}`}>
          <h3 id={`${id}-${index}`} className="mb-1 px-1 text-xs font-semibold text-slate-500">
            {section.title}
          </h3>
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {section.rows.map((row) => (
              <li key={row.id}>
                {row.kind === "switch" ? (
                  <label className="flex cursor-pointer items-center gap-3 px-3 py-2.5">
                    <span className="flex-1">
                      <span className="block text-slate-900">{row.label}</span>
                      {row.description ? (
                        <span className="text-xs text-slate-500">{row.description}</span>
                      ) : null}
                    </span>
                    <input
                      type="checkbox"
                      role="switch"
                      checked={row.checked}
                      onChange={(event) => onToggle(row.id, event.target.checked)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="relative h-5 w-9 rounded-full bg-slate-300 transition-colors peer-checked:bg-slate-900 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-4"
                    />
                  </label>
                ) : row.kind === "value" ? (
                  <button
                    type="button"
                    onClick={() => onOpen(row.id)}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
                  >
                    <span className="flex-1 text-slate-900">{row.label}</span>
                    <span className="text-slate-500">{row.value}</span>
                    <span aria-hidden="true" className="text-slate-400">
                      ›
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpen(row.id)}
                    className={`w-full px-3 py-2.5 text-left ${row.tone === "danger" ? "text-rose-600" : "text-slate-900"}`}
                  >
                    {row.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
