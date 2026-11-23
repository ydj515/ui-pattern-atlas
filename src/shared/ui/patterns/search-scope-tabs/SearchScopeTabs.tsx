import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";

export interface SearchScope {
  readonly id: string;
  readonly label: string;
  readonly count: number;
}

export interface SearchScopeTabsProps {
  /** Name of the tab list, e.g. "검색 범위". */
  readonly label: string;
  readonly scopes: readonly SearchScope[];
  readonly value: string;
  readonly onChange: (id: string) => void;
  /** Results of the selected scope. */
  readonly children: ReactNode;
}

/**
 * Tabs that switch what the same search looks in (all, products, brands…), each with
 * its result count. The query stays; ←/→, Home and End move between tabs.
 */
export function SearchScopeTabs({
  label,
  scopes,
  value,
  onChange,
  children,
}: SearchScopeTabsProps) {
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = scopes.findIndex((scope) => scope.id === value);
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % scopes.length
        : event.key === "ArrowLeft"
          ? (index - 1 + scopes.length) % scopes.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? scopes.length - 1
              : -1;
    if (next < 0) return;
    event.preventDefault();
    const scope = scopes[next];
    if (!scope) return;
    onChange(scope.id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className="flex gap-4 border-b border-slate-200"
      >
        {scopes.map((scope, index) => {
          const selected = scope.id === value;
          return (
            <button
              key={scope.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${scope.id}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(scope.id)}
              className="-mb-px border-b-2 border-transparent pb-2 text-sm text-slate-500 aria-selected:border-slate-900 aria-selected:font-semibold aria-selected:text-slate-900"
            >
              {scope.label} <span className="tabular-nums">{scope.count}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${value}`}
        className="pt-3"
      >
        {children}
      </div>
    </div>
  );
}
