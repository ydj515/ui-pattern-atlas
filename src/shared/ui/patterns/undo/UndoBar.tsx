import { useEffect, useRef, useState } from "react";

export interface UndoBarProps {
  /** What just happened, e.g. "메일 1개를 삭제했어요". */
  readonly message: string;
  readonly onUndo: () => void;
  /** Called when the time runs out: commit the action for real here. */
  readonly onExpire: () => void;
  readonly undoLabel?: string;
  readonly durationMs?: number;
}

/**
 * Snackbar that gives a short window to take an action back.
 *
 * Do the action optimistically in the UI, render this bar, and only commit it in
 * `onExpire`. The bar shows the remaining time and pauses while hovered or focused,
 * so nobody loses the chance to undo while reaching for the button (WCAG 2.2.1).
 * Re-mount it (change its `key`) for each new action.
 */
export function UndoBar({
  message,
  onUndo,
  onExpire,
  undoLabel = "되돌리기",
  durationMs = 5000,
}: UndoBarProps) {
  const [paused, setPaused] = useState(false);
  // Time left before the action is committed; survives pauses and parent re-renders.
  const remainingRef = useRef(durationMs);

  useEffect(() => {
    if (paused) return;
    const startedAt = Date.now();
    const timer = window.setTimeout(onExpire, remainingRef.current);
    return () => {
      window.clearTimeout(timer);
      remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAt));
    };
  }, [paused, onExpire]);

  return (
    <div
      role="status"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex w-full max-w-sm items-center gap-3 overflow-hidden rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg"
    >
      <p className="flex-1">{message}</p>
      <button
        type="button"
        onClick={onUndo}
        className="shrink-0 rounded-md px-2 py-1 font-semibold text-amber-300 hover:bg-white/10"
      >
        {undoLabel}
      </button>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-amber-300 motion-reduce:hidden"
        style={{
          animation: `undo-bar-shrink ${durationMs}ms linear forwards`,
          animationPlayState: paused ? "paused" : "running",
        }}
      />
      <style>
        {"@keyframes undo-bar-shrink { from { transform: scaleX(1) } to { transform: scaleX(0) } }"}
      </style>
    </div>
  );
}
