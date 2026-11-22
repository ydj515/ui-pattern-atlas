import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

/** Capture only once the pointer really drags, so plain clicks still reach buttons inside. */
function captureOnDrag(event: PointerEvent<HTMLElement>, distance: number) {
  if (distance > 4 && !event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
}

export interface MomentumScrollProps {
  readonly children: ReactNode;
  readonly label: string;
  readonly height?: number;
  /** How quickly the glide slows down per frame (0–1, lower stops sooner). */
  readonly friction?: number;
}

/**
 * Scroll area that keeps gliding after a mouse drag and slows down gradually, the way
 * touch scrolling already does natively. Touch and wheel stay native; the glide is skipped
 * when reduced motion is requested.
 */
export function MomentumScroll({
  children,
  label,
  height = 240,
  friction = 0.95,
}: MomentumScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    y: number;
    top: number;
    lastY: number;
    lastTime: number;
    velocity: number;
  } | null>(null);
  const frameRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    cancelAnimationFrame(frameRef.current);
    dragRef.current = {
      y: event.clientY,
      top: event.currentTarget.scrollTop,
      lastY: event.clientY,
      lastTime: performance.now(),
      velocity: 0,
    };
  }

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    captureOnDrag(event, Math.abs(event.clientY - drag.y));
    const now = performance.now();
    drag.velocity = (drag.lastY - event.clientY) / Math.max(1, now - drag.lastTime);
    drag.lastY = event.clientY;
    drag.lastTime = now;
    event.currentTarget.scrollTop = drag.top - (event.clientY - drag.y);
  }

  function handleUp() {
    const drag = dragRef.current;
    dragRef.current = null;
    const element = ref.current;
    if (!drag || !element || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
      return;
    let velocity = drag.velocity * 16;
    const glide = () => {
      element.scrollTop += velocity;
      velocity *= friction;
      if (Math.abs(velocity) > 0.5) frameRef.current = requestAnimationFrame(glide);
    };
    frameRef.current = requestAnimationFrame(glide);
  }

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      className="cursor-grab overflow-y-auto overscroll-contain select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:cursor-grabbing"
      style={{ height }}
    >
      {children}
    </div>
  );
}
