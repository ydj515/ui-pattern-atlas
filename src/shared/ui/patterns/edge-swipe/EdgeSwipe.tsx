import { useRef, useState, type PointerEvent, type ReactNode } from "react";

const EDGE = 24;

/** Capture only once the pointer really drags, so plain clicks still reach buttons inside. */
function captureOnDrag(event: PointerEvent<HTMLElement>, distance: number) {
  if (distance > 4 && !event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
}

export interface EdgeSwipeProps {
  readonly children: ReactNode;
  /** Panel revealed by swiping in from the left edge. */
  readonly panel: ReactNode;
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly panelLabel: string;
  readonly width?: number;
}

/**
 * Swipe in from the left edge to pull out a panel (menu, back). Only drags that start
 * within the first 24 px count, so normal horizontal scrolling still works. A menu button
 * and Escape open and close it too.
 */
export function EdgeSwipe({
  children,
  panel,
  open,
  onOpenChange,
  panelLabel,
  width = 180,
}: EdgeSwipeProps) {
  const [drag, setDrag] = useState<number | null>(null);
  const startRef = useRef<number | null>(null);
  const downRef = useRef(0);
  const offset = drag ?? (open ? width : 0);

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    const left = event.currentTarget.getBoundingClientRect().left;
    if (!open && event.clientX - left > EDGE) return;
    downRef.current = event.clientX;
    startRef.current = event.clientX - (open ? width : 0);
  }

  function handleUp() {
    if (startRef.current === null) return;
    startRef.current = null;
    if (drag !== null) onOpenChange(drag > width / 2);
    setDrag(null);
  }

  return (
    <div
      onPointerDown={handleDown}
      onPointerMove={(event) => {
        if (startRef.current === null) return;
        const moved = Math.abs(event.clientX - downRef.current);
        captureOnDrag(event, moved);
        if (moved > 4) setDrag(Math.min(width, Math.max(0, event.clientX - startRef.current)));
      }}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) onOpenChange(false);
      }}
      className="relative h-full touch-pan-y overflow-hidden"
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-slate-900"
        style={{ opacity: (offset / width) * 0.3, pointerEvents: open ? "auto" : "none" }}
        onClick={() => onOpenChange(false)}
      />
      <nav
        aria-label={panelLabel}
        hidden={!open && drag === null}
        className={`absolute inset-y-0 left-0 bg-white shadow-xl ${drag === null ? "transition-transform duration-200 motion-reduce:transition-none" : ""}`}
        style={{ width, transform: `translateX(${offset - width}px)` }}
      >
        {panel}
      </nav>
    </div>
  );
}
