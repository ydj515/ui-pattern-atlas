import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface TabItem {
  readonly id: string;
  readonly label: string;
  readonly content: ReactNode;
}

export interface TabsProps {
  readonly items: readonly TabItem[];
  /** Accessible name of the tab list. */
  readonly label: string;
  readonly defaultTabId?: string;
  readonly onTabChange?: (tabId: string) => void;
}

/**
 * WAI-ARIA tabs with automatic activation and a roving `tabIndex`.
 * Arrow keys move between tabs, Home/End jump to the first/last tab.
 */
export function Tabs({ items, label, defaultTabId, onTabChange }: TabsProps) {
  const [selectedId, setSelectedId] = useState(defaultTabId ?? items[0]?.id);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const baseId = useId();

  function select(tabId: string) {
    setSelectedId(tabId);
    onTabChange?.(tabId);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = items.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = nextIndexByKey[event.key];
    const nextItem = nextIndex === undefined ? undefined : items[nextIndex];
    if (!nextItem) return;
    event.preventDefault();
    select(nextItem.id);
    tabRefs.current.get(nextItem.id)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="flex gap-1 overflow-x-auto border-b border-slate-200"
      >
        {items.map((item, index) => {
          const selected = item.id === selectedId;
          return (
            <button
              key={item.id}
              ref={(element) => {
                if (element) tabRefs.current.set(item.id, element);
                else tabRefs.current.delete(item.id);
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="-mb-px shrink-0 border-b-2 border-transparent px-3 py-2 text-sm font-medium whitespace-nowrap text-slate-500 hover:text-slate-900 aria-selected:border-slate-900 aria-selected:text-slate-900"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== selectedId}
          tabIndex={0}
          className="pt-4"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
