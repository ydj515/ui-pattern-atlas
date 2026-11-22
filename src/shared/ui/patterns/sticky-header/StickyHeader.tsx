import { useEffect, useState, type ReactNode, type RefObject } from "react";

/** True once the element (or the page) has scrolled past `offset` px. */
export function useScrolled(scrollRef?: RefObject<HTMLElement | null>, offset = 4) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const element = scrollRef?.current;
    const target: HTMLElement | Window = element ?? window;
    const update = () => setScrolled((element ? element.scrollTop : window.scrollY) > offset);
    update();
    target.addEventListener("scroll", update, { passive: true });
    return () => target.removeEventListener("scroll", update);
  }, [scrollRef, offset]);
  return scrolled;
}

export interface StickyHeaderProps {
  readonly title: string;
  readonly action?: ReactNode;
  /** Adds a divider and shadow once content scrolls under it. */
  readonly scrolled: boolean;
}

/**
 * Header that stays at the top while the content scrolls (position: sticky). A shadow
 * appears only once something is underneath, so it does not look heavy at rest. Keep it
 * short; tall sticky headers eat the screen on phones.
 */
export function StickyHeader({ title, action, scrolled }: StickyHeaderProps) {
  return (
    <header
      className={`sticky top-0 z-10 flex h-12 items-center justify-between bg-white/95 px-4 backdrop-blur transition-shadow duration-200 motion-reduce:transition-none ${
        scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"
      }`}
    >
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      {action}
    </header>
  );
}
