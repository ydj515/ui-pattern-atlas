import { useRef, useState, type PointerEvent, type ReactNode } from "react";

export interface SwipeToDismissProps {
  readonly title: string;
  readonly children: ReactNode;
  readonly onDismiss: () => void;
  readonly closeLabel?: string;
  /** Drag distance (px) that closes the sheet. */
  readonly threshold?: number;
}

/**
 * Bottom sheet that closes when its handle is dragged down far enough; otherwise it
 * springs back. A close button and Escape do the same, so the gesture is optional.
 */
export function SwipeToDismiss({
  title,
  children,
  onDismiss,
  closeLabel = "닫기",
  threshold = 80,
}: SwipeToDismissProps) {
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<number | null>(null);

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    startRef.current = event.clientY;
    setDragging(true);
  }

  function handleUp() {
    startRef.current = null;
    setDragging(false);
    if (drag > threshold) onDismiss();
    else setDrag(0);
  }

  return (
    <section
      role="dialog"
      aria-label={title}
      onKeyDown={(event) => {
        if (event.key === "Escape") onDismiss();
      }}
      className={`rounded-t-2xl bg-white shadow-xl ${dragging ? "" : "transition-transform duration-200 motion-reduce:transition-none"}`}
      style={{ transform: `translateY(${drag}px)` }}
    >
      <div
        onPointerDown={handleDown}
        onPointerMove={(event) => {
          if (startRef.current !== null) setDrag(Math.max(0, event.clientY - startRef.current));
        }}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        className="flex cursor-grab touch-none justify-center pt-2 pb-1"
      >
        <span aria-hidden="true" className="h-1 w-10 rounded-full bg-slate-300" />
      </div>
      <div className="flex items-center justify-between px-4 pb-2">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <button
          type="button"
          onClick={onDismiss}
          className="rounded-md px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
        >
          {closeLabel}
        </button>
      </div>
      <div className="px-4 pb-4 text-sm text-slate-700">{children}</div>
    </section>
  );
}
