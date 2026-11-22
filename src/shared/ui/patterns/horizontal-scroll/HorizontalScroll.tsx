import { useEffect, useRef, useState, type ReactNode } from "react";

export interface HorizontalScrollProps {
  readonly label: string;
  readonly children: ReactNode;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
}

/**
 * Row of cards that scrolls sideways with snap points, plus previous/next buttons that
 * move one view at a time and turn off at either end. The row itself is a focusable,
 * named region, so arrow keys scroll it; on touch screens people just swipe.
 */
export function HorizontalScroll({
  label,
  children,
  prevLabel = "이전 항목",
  nextLabel = "다음 항목",
}: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function update() {
    const element = ref.current;
    if (!element) return;
    setEdges({
      start: element.scrollLeft <= 1,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 1,
    });
  }

  useEffect(update, []);

  function page(direction: -1 | 1) {
    const element = ref.current;
    if (!element) return;
    const left = element.scrollLeft + direction * element.clientWidth * 0.8;
    if (element.scrollTo) element.scrollTo({ left, behavior: "smooth" });
    else element.scrollLeft = left;
    update();
  }

  const buttonClass =
    "grid size-8 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">{label}</h3>
        <div className="flex gap-1.5">
          <button
            type="button"
            aria-label={prevLabel}
            disabled={edges.start}
            onClick={() => page(-1)}
            className={buttonClass}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={edges.end}
            onClick={() => page(1)}
            className={buttonClass}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 motion-reduce:scroll-auto"
      >
        {children}
      </div>
    </div>
  );
}
