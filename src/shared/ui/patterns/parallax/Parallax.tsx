import { useRef, type ReactNode } from "react";

export interface ParallaxProps {
  /** Layer that moves slower than the content (a photo, an illustration). */
  readonly background: ReactNode;
  readonly backgroundHeight: number;
  readonly children: ReactNode;
  readonly label: string;
  readonly height?: number;
  /** 0 scrolls with the page, 1 stays put; 0.5 moves at half speed. */
  readonly speed?: number;
}

/**
 * Scroll area whose background layer moves slower than the content in front of it,
 * which reads as depth. The offset is written straight to the style on scroll (no
 * re-render), and reduced motion scrolls everything together.
 */
export function Parallax({
  background,
  backgroundHeight,
  children,
  label,
  height = 280,
  speed = 0.5,
}: ParallaxProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      onScroll={(event) => {
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const offset = reduce ? 0 : event.currentTarget.scrollTop * speed;
        if (layerRef.current) layerRef.current.style.transform = `translateY(${offset}px)`;
      }}
      className="relative overflow-y-auto overscroll-contain focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      style={{ height }}
    >
      <div
        ref={layerRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 will-change-transform"
        style={{ height: backgroundHeight }}
      >
        {background}
      </div>
      <div className="relative" style={{ paddingTop: backgroundHeight }}>
        {children}
      </div>
    </div>
  );
}
