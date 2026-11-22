import { useRef, useState, type ReactNode } from "react";

export interface SwipePage {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

export interface SwipeNavigationProps {
  readonly label: string;
  readonly pages: readonly SwipePage[];
  readonly prevLabel?: string;
  readonly nextLabel?: string;
}

/**
 * Screens side by side that a horizontal swipe moves between (CSS scroll snap), with
 * previous/next buttons and the page title as text for anyone not swiping. The visible
 * page is tracked from the scroll position.
 */
export function SwipeNavigation({
  label,
  pages,
  prevLabel = "이전",
  nextLabel = "다음",
}: SwipeNavigationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function go(next: number) {
    const element = ref.current;
    const target = Math.max(0, Math.min(pages.length - 1, next));
    setIndex(target);
    if (!element) return;
    const left = target * element.clientWidth;
    if (element.scrollTo) element.scrollTo({ left, behavior: "smooth" });
    else element.scrollLeft = left;
  }

  return (
    <section
      aria-label={label}
      className="overflow-hidden rounded-xl border border-slate-200 bg-white"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-2 py-1.5">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => go(index - 1)}
          className="rounded-md px-2 py-1 text-sm disabled:opacity-30"
        >
          <span aria-hidden="true">‹ </span>
          {prevLabel}
        </button>
        <h3 aria-live="polite" className="text-sm font-semibold text-slate-900">
          {pages[index]?.title}
        </h3>
        <button
          type="button"
          disabled={index === pages.length - 1}
          onClick={() => go(index + 1)}
          className="rounded-md px-2 py-1 text-sm disabled:opacity-30"
        >
          {nextLabel}
          <span aria-hidden="true"> ›</span>
        </button>
      </div>
      <div
        ref={ref}
        onScroll={(event) => {
          const element = event.currentTarget;
          if (element.clientWidth) setIndex(Math.round(element.scrollLeft / element.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIndex) => (
          <div
            key={page.id}
            className="w-full shrink-0 snap-start"
            aria-hidden={pageIndex !== index}
            inert={pageIndex !== index}
          >
            {page.content}
          </div>
        ))}
      </div>
    </section>
  );
}
