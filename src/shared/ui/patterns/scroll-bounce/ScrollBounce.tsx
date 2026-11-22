import { useRef, useState, type PointerEvent, type ReactNode } from "react";

/** Capture only once the pointer really drags, so plain clicks still reach buttons inside. */
function captureOnDrag(event: PointerEvent<HTMLElement>, distance: number) {
  if (distance > 4 && !event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
}

export interface ScrollBounceProps {
  readonly children: ReactNode;
  readonly label: string;
  readonly height?: number;
}

/**
 * Scroll area that stretches a little when pulled past the top or bottom and springs
 * back, so people feel the end of the list. It also sets overscroll-behavior: contain so
 * reaching the end does not start scrolling the page behind it.
 */
export function ScrollBounce({ children, label, height = 240 }: ScrollBounceProps) {
  const [stretch, setStretch] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ y: number; top: number } | null>(null);

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    startRef.current = { y: event.clientY, top: event.currentTarget.scrollTop };
    setDragging(true);
  }

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    if (!start) return;
    captureOnDrag(event, Math.abs(event.clientY - start.y));
    const element = event.currentTarget;
    const max = element.scrollHeight - element.clientHeight;
    const target = start.top - (event.clientY - start.y);
    element.scrollTop = target;
    // Past an edge, move a third of the finger's distance: it feels like resistance.
    if (target < 0) setStretch(-target / 3);
    else if (target > max) setStretch(-(target - max) / 3);
    else setStretch(0);
  }

  function handleUp() {
    startRef.current = null;
    setDragging(false);
    setStretch(0);
  }

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      className="touch-none overflow-y-auto overscroll-contain select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      style={{ height }}
    >
      <div
        className={
          dragging ? "" : "transition-transform duration-300 ease-out motion-reduce:transition-none"
        }
        style={{ transform: `translateY(${stretch}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
