import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface ScrollableTabsProps {
  readonly label: string;
  readonly tabs: readonly string[];
  readonly selected: number;
  readonly onSelect: (index: number) => void;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
  /** Content of the selected tab. */
  readonly children: ReactNode;
}

/**
 * Tab list that scrolls sideways when the tabs do not fit, with arrow buttons that turn
 * off at either end. The selected tab is always scrolled into view. Keyboard follows the
 * WAI-ARIA tabs pattern: ←/→ move and select, Home/End jump.
 */
export function ScrollableTabs({
  label,
  tabs,
  selected,
  onSelect,
  prevLabel = "이전 탭",
  nextLabel = "다음 탭",
  children,
}: ScrollableTabsProps) {
  const id = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [edges, setEdges] = useState({ start: true, end: false });

  function update() {
    const list = listRef.current;
    if (!list) return;
    setEdges({
      start: list.scrollLeft <= 1,
      end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 1,
    });
  }

  useEffect(() => {
    tabRefs.current[selected]?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    update();
  }, [selected]);

  function select(index: number) {
    const next = (index + tabs.length) % tabs.length;
    onSelect(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const moves: Record<string, number> = {
      ArrowRight: selected + 1,
      ArrowLeft: selected - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
  }

  function scrollBy(direction: -1 | 1) {
    const list = listRef.current;
    if (!list) return;
    const left = list.scrollLeft + direction * list.clientWidth * 0.7;
    if (list.scrollTo) list.scrollTo({ left, behavior: "smooth" });
    else list.scrollLeft = left;
    update();
  }

  const arrowClass =
    "grid size-8 shrink-0 place-items-center rounded-md text-slate-600 hover:bg-slate-100 disabled:opacity-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none";

  return (
    <div>
      <div className="flex items-center border-b border-slate-200">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          disabled={edges.start}
          onClick={() => scrollBy(-1)}
          className={arrowClass}
          title={prevLabel}
        >
          ‹
        </button>
        <div
          ref={listRef}
          role="tablist"
          aria-label={label}
          onScroll={update}
          onKeyDown={handleKeyDown}
          className="flex min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-selected={index === selected}
              aria-controls={`${id}-panel`}
              tabIndex={index === selected ? 0 : -1}
              onClick={() => select(index)}
              className="relative shrink-0 px-3 py-2.5 text-sm whitespace-nowrap text-slate-500 hover:text-slate-900 focus-visible:bg-slate-100 focus-visible:outline-none aria-selected:font-semibold aria-selected:text-slate-900 aria-selected:after:absolute aria-selected:after:inset-x-3 aria-selected:after:bottom-0 aria-selected:after:h-0.5 aria-selected:after:bg-slate-900"
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          disabled={edges.end}
          onClick={() => scrollBy(1)}
          className={arrowClass}
          title={nextLabel}
        >
          ›
        </button>
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${selected}`}
        tabIndex={0}
        className="pt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        {children}
      </div>
    </div>
  );
}
