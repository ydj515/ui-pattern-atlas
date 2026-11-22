import { useEffect, useState, type RefObject } from "react";

export interface TocItem {
  readonly id: string;
  readonly label: string;
}

export interface TableOfContentsProps {
  readonly items: readonly TocItem[];
  /** Element that scrolls; omit to follow the window. */
  readonly scrollRef?: RefObject<HTMLElement | null>;
  readonly label?: string;
  /** Distance from the top of the scroll area where a heading counts as reached. */
  readonly offset?: number;
}

/**
 * List of the page's sections that marks the one being read (aria-current="location")
 * as the reader scrolls. Clicking a link scrolls to its section. The last section is
 * marked when the bottom is reached, even if it is too short to reach the top.
 */
export function TableOfContents({
  items,
  scrollRef,
  label = "목차",
  offset = 24,
}: TableOfContentsProps) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const scroller: HTMLElement | Window = scrollRef?.current ?? window;
    function update() {
      const container = scrollRef?.current;
      const top = container ? container.getBoundingClientRect().top : 0;
      const atEnd = container
        ? container.scrollTop + container.clientHeight >= container.scrollHeight - 2
        : window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const reached = items.filter((item) => {
        const element = document.getElementById(item.id);
        return element ? element.getBoundingClientRect().top - top <= offset : false;
      });
      setCurrent(
        atEnd && reached.length > 0 ? (items.at(-1)?.id ?? null) : (reached.at(-1)?.id ?? null),
      );
    }
    update();
    scroller.addEventListener("scroll", update, { passive: true });
    return () => scroller.removeEventListener("scroll", update);
  }, [items, scrollRef, offset]);

  return (
    <nav aria-label={label}>
      <ul className="space-y-1 border-l border-slate-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={current === item.id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView?.({ behavior: "smooth", block: "start" });
              }}
              className="-ml-px block border-l-2 border-transparent py-0.5 pl-3 text-sm text-slate-500 hover:text-slate-900 aria-[current=location]:border-blue-600 aria-[current=location]:font-semibold aria-[current=location]:text-slate-900"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
