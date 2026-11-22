import { useEffect, useState, type RefObject } from "react";

export interface BackToTopProps {
  /** Element that scrolls; omit to use the window. */
  readonly scrollRef?: RefObject<HTMLElement | null>;
  /** Where focus goes after scrolling up, usually the page heading (tabIndex -1). */
  readonly focusRef?: RefObject<HTMLElement | null>;
  /** Show the button after scrolling this far. */
  readonly threshold?: number;
  readonly label?: string;
  readonly className?: string;
}

/**
 * Button that appears after the reader has scrolled a long way and takes them back to the
 * start. It also moves focus to the top heading, so keyboard users are not left at the
 * bottom of the page. Smooth scrolling is skipped when reduced motion is on.
 */
export function BackToTop({
  scrollRef,
  focusRef,
  threshold = 400,
  label = "맨 위로",
  className = "",
}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroller: HTMLElement | Window = scrollRef?.current ?? window;
    const read = () => (scrollRef?.current ? scrollRef.current.scrollTop : window.scrollY);
    const update = () => setVisible(read() > threshold);
    update();
    scroller.addEventListener("scroll", update, { passive: true });
    return () => scroller.removeEventListener("scroll", update);
  }, [scrollRef, threshold]);

  function goTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const options: ScrollToOptions = { top: 0, behavior: reduce ? "auto" : "smooth" };
    if (scrollRef?.current) {
      if (scrollRef.current.scrollTo) scrollRef.current.scrollTo(options);
      else scrollRef.current.scrollTop = 0;
    } else {
      window.scrollTo(options);
    }
    focusRef?.current?.focus({ preventScroll: true });
  }

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={goTop}
      className={`inline-flex h-10 items-center gap-1.5 rounded-full bg-slate-900 px-4 text-sm font-medium text-white shadow-lg hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      <span aria-hidden="true">↑</span>
      {label}
    </button>
  );
}
