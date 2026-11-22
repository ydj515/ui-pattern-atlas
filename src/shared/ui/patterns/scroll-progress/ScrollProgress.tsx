import { useEffect, useState, type RefObject } from "react";

export interface ScrollProgressProps {
  /** Element that scrolls; omit to follow the page. */
  readonly scrollRef?: RefObject<HTMLElement | null>;
  readonly className?: string;
}

/**
 * Thin bar along the top that fills as the reader scrolls through a long article. It is
 * a visual aid only (aria-hidden); the scrollbar already tells assistive technology where
 * the reader is.
 */
export function ScrollProgress({ scrollRef, className = "" }: ScrollProgressProps) {
  const [fraction, setFraction] = useState(0);

  useEffect(() => {
    const element = scrollRef?.current;
    const target: HTMLElement | Window = element ?? window;
    function update() {
      const top = element ? element.scrollTop : window.scrollY;
      const max = element
        ? element.scrollHeight - element.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      setFraction(max > 0 ? Math.min(1, top / max) : 0);
    }
    update();
    target.addEventListener("scroll", update, { passive: true });
    return () => target.removeEventListener("scroll", update);
  }, [scrollRef]);

  return (
    <div aria-hidden="true" className={`h-1 bg-slate-100 ${className}`}>
      <div
        className="h-full origin-left bg-blue-600"
        style={{ transform: `scaleX(${fraction})` }}
      />
    </div>
  );
}
