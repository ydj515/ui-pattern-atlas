import { useRef, useState, type PointerEvent, type ReactNode } from "react";

export interface PinchToZoomProps {
  readonly children: ReactNode;
  readonly label: string;
  readonly min?: number;
  readonly max?: number;
  readonly zoomInLabel?: string;
  readonly zoomOutLabel?: string;
  readonly resetLabel?: string;
}

/**
 * Picture that zooms with two fingers (pointer events), Ctrl/⌘ + wheel or a trackpad
 * pinch, and with + / − buttons for everyone else. Double-click toggles between 1× and 2×.
 * The zoom level is shown as text.
 */
export function PinchToZoom({
  children,
  label,
  min = 1,
  max = 3,
  zoomInLabel = "확대",
  zoomOutLabel = "축소",
  resetLabel = "원래 크기",
}: PinchToZoomProps) {
  const [scale, setScale] = useState(1);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const startRef = useRef<{ distance: number; scale: number } | null>(null);
  const clamp = (value: number) => Math.min(max, Math.max(min, value));
  const distance = () => {
    const [a, b] = [...pointers.current.values()];
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  };

  function handleDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) startRef.current = { distance: distance(), scale };
  }

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const start = startRef.current;
    if (start && pointers.current.size === 2 && start.distance > 0)
      setScale(clamp(start.scale * (distance() / start.distance)));
  }

  function handleUp(event: PointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) startRef.current = null;
  }

  const button =
    "grid size-8 place-items-center rounded-full bg-white/90 text-sm text-slate-800 shadow hover:bg-white disabled:opacity-40";

  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-100">
      <div
        role="img"
        aria-label={`${label}, ${Math.round(scale * 100)}%`}
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        onDoubleClick={() => setScale((value) => (value > 1 ? 1 : 2))}
        onWheel={(event) => {
          if (!event.ctrlKey && !event.metaKey) return;
          event.preventDefault();
          setScale((value) => clamp(value * (event.deltaY < 0 ? 1.1 : 0.9)));
        }}
        className="touch-none"
      >
        <div
          className="origin-center transition-transform duration-100 motion-reduce:transition-none"
          style={{ transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
      <div className="absolute right-2 bottom-2 flex items-center gap-1">
        <span
          aria-live="polite"
          className="mr-1 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white tabular-nums"
        >
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          aria-label={zoomOutLabel}
          disabled={scale <= min}
          onClick={() => setScale((value) => clamp(value - 0.5))}
          className={button}
        >
          <span aria-hidden="true">−</span>
        </button>
        <button
          type="button"
          aria-label={zoomInLabel}
          disabled={scale >= max}
          onClick={() => setScale((value) => clamp(value + 0.5))}
          className={button}
        >
          <span aria-hidden="true">+</span>
        </button>
        <button
          type="button"
          onClick={() => setScale(1)}
          className="rounded-full bg-white/90 px-2 py-1 text-xs text-slate-800 shadow"
        >
          {resetLabel}
        </button>
      </div>
    </div>
  );
}
