import { useRef, useState, type PointerEvent, type ReactNode } from "react";

const ACTION_WIDTH = 72;

/** Capture only once the pointer really drags, so plain clicks still reach buttons inside. */
function captureOnDrag(event: PointerEvent<HTMLElement>, distance: number) {
  if (distance > 4 && !event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
}

export interface SwipeToDeleteProps {
  readonly children: ReactNode;
  readonly onDelete: () => void;
  /** Name of the delete button, e.g. "회의록 삭제". */
  readonly deleteLabel: string;
  readonly actionText?: string;
}

/**
 * Row that slides left to reveal a delete button; a long swipe deletes straight away.
 * The delete button is a real button in the tab order and shows when the row has focus,
 * so the action never depends on the gesture.
 */
export function SwipeToDelete({
  children,
  onDelete,
  deleteLabel,
  actionText = "삭제",
}: SwipeToDeleteProps) {
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ x: number; offset: number } | null>(null);
  const widthRef = useRef(0);

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    startRef.current = { x: event.clientX, offset };
    widthRef.current = event.currentTarget.offsetWidth;
    setDragging(true);
  }

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    if (!start) return;
    captureOnDrag(event, Math.abs(event.clientX - start.x));
    setOffset(Math.min(0, start.offset + event.clientX - start.x));
  }

  function handleUp() {
    startRef.current = null;
    setDragging(false);
    const width = widthRef.current || 1;
    if (-offset > width * 0.6) onDelete();
    else setOffset(-offset > ACTION_WIDTH / 2 ? -ACTION_WIDTH : 0);
  }

  return (
    <div className="group relative overflow-hidden bg-rose-600">
      <button
        type="button"
        aria-label={deleteLabel}
        onClick={onDelete}
        onFocus={() => setOffset(-ACTION_WIDTH)}
        onBlur={() => setOffset(0)}
        className="absolute inset-y-0 right-0 text-sm font-semibold text-white focus-visible:outline-none"
        style={{ width: ACTION_WIDTH }}
      >
        {actionText}
      </button>
      <div
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        className={`relative touch-pan-y bg-white select-none ${dragging ? "" : "transition-transform duration-200 motion-reduce:transition-none"}`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
