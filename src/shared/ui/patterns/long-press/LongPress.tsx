import { useRef, type PointerEvent, type ReactNode } from "react";

export interface LongPressProps {
  readonly children: ReactNode;
  /** Called after holding still for `delayMs`, on right-click, or on Shift+F10 / the Menu key. */
  readonly onLongPress: () => void;
  readonly onPress?: () => void;
  readonly delayMs?: number;
  /** Accessible name; mention the hidden actions, e.g. "메시지, 길게 눌러 반응 달기". */
  readonly label: string;
}

/**
 * Hold to open hidden actions (reactions, a context menu). The same actions open with a
 * right-click or the keyboard's context-menu keys, and the hold is cancelled if the finger
 * moves, so scrolling never triggers it.
 */
export function LongPress({
  children,
  onLongPress,
  onPress,
  delayMs = 500,
  label,
}: LongPressProps) {
  const timerRef = useRef(0);
  const firedRef = useRef(false);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  function cancel() {
    window.clearTimeout(timerRef.current);
    startRef.current = null;
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup="menu"
      onPointerDown={(event: PointerEvent<HTMLButtonElement>) => {
        firedRef.current = false;
        startRef.current = { x: event.clientX, y: event.clientY };
        timerRef.current = window.setTimeout(() => {
          firedRef.current = true;
          onLongPress();
        }, delayMs);
      }}
      onPointerMove={(event) => {
        const start = startRef.current;
        if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8) cancel();
      }}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      onPointerCancel={cancel}
      onClick={() => {
        if (!firedRef.current) onPress?.();
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        cancel();
        onLongPress();
      }}
      onKeyDown={(event) => {
        if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
          event.preventDefault();
          onLongPress();
        }
      }}
      className="touch-manipulation text-left select-none [-webkit-touch-callout:none]"
    >
      {children}
    </button>
  );
}
