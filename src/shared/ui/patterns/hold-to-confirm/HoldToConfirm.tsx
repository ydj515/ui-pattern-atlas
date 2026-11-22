import { useEffect, useId, useRef, useState } from "react";

export interface HoldToConfirmProps {
  readonly label: string;
  readonly onConfirm: () => void;
  /** How long to hold, in ms. */
  readonly holdMs?: number;
  /** Explains the gesture; linked to the button. */
  readonly hint: string;
}

/**
 * Button that only fires after being held down (pointer, Space or Enter) for a moment,
 * to stop destructive actions happening by accident. A fill shows the progress; letting
 * go early cancels. The hint explains the gesture, since it is not obvious.
 */
export function HoldToConfirm({ label, onConfirm, holdMs = 1500, hint }: HoldToConfirmProps) {
  const [holding, setHolding] = useState(false);
  const timerRef = useRef(0);
  const hintId = useId();

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function start() {
    if (holding) return;
    setHolding(true);
    timerRef.current = window.setTimeout(() => {
      setHolding(false);
      onConfirm();
    }, holdMs);
  }

  function cancel() {
    window.clearTimeout(timerRef.current);
    setHolding(false);
  }

  return (
    <div>
      <button
        type="button"
        aria-describedby={hintId}
        onPointerDown={start}
        onPointerUp={cancel}
        onPointerLeave={cancel}
        onPointerCancel={cancel}
        onKeyDown={(event) => {
          if ((event.key === " " || event.key === "Enter") && !event.repeat) {
            event.preventDefault();
            start();
          }
        }}
        onKeyUp={(event) => {
          if (event.key === " " || event.key === "Enter") cancel();
        }}
        onContextMenu={(event) => event.preventDefault()}
        className="relative h-11 w-full touch-none overflow-hidden rounded-lg border border-rose-300 bg-white px-4 text-sm font-semibold text-rose-700 select-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left bg-rose-100 motion-reduce:transition-none"
          style={{
            transform: holding ? "scaleX(1)" : "scaleX(0)",
            transition: holding ? `transform ${holdMs}ms linear` : "transform 150ms ease-out",
          }}
        />
        <span className="relative">{label}</span>
      </button>
      <p id={hintId} className="mt-1.5 text-xs text-slate-500">
        {hint}
      </p>
    </div>
  );
}
