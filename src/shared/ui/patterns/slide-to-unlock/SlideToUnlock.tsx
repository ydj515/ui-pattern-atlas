import { useId, useRef, useState } from "react";

const KNOB = 48;

export interface SlideToUnlockProps {
  readonly label: string;
  readonly onUnlock: () => void;
  /** Text inside the track, e.g. "밀어서 잠금 해제". */
  readonly hint?: string;
}

/**
 * Track with a knob that has to be slid all the way to confirm, as on early phone lock
 * screens. It is a native range input underneath, so arrow keys and End work too; letting
 * go before the end slides the knob back. A press on the bare track is ignored, so the
 * value cannot jump to the end without the slide.
 */
export function SlideToUnlock({ label, onUnlock, hint = "밀어서 잠금 해제" }: SlideToUnlockProps) {
  const id = useId();
  const [value, setValue] = useState(0);
  // "knob" while a pointer drags the knob, "track" when it pressed elsewhere, null for keys.
  const pointerRef = useRef<"knob" | "track" | null>(null);

  function change(next: number) {
    if (pointerRef.current === "track") return;
    if (next >= 100) {
      pointerRef.current = null;
      setValue(0);
      onUnlock();
    } else {
      setValue(next);
    }
  }

  function release() {
    pointerRef.current = null;
    setValue(0);
  }

  return (
    <div className="relative h-12 w-64 overflow-hidden rounded-full bg-slate-800">
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center pl-10 text-sm text-white/70"
        style={{ opacity: 1 - value / 80 }}
      >
        {hint}
      </span>
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 grid size-10 place-items-center rounded-full bg-white text-slate-800 shadow ${value === 0 ? "transition-transform duration-300 motion-reduce:transition-none" : ""}`}
        style={{ transform: `translateX(${(value / 100) * (256 - KNOB)}px)` }}
      >
        →
      </span>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        aria-valuetext={value >= 100 ? "해제" : `${value}%`}
        onPointerDown={(event) => {
          const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
          pointerRef.current = x <= KNOB ? "knob" : "track";
        }}
        onChange={(event) => change(Number(event.target.value))}
        onPointerUp={release}
        onPointerCancel={release}
        onBlur={() => setValue(0)}
        className="peer absolute inset-0 size-full cursor-grab opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400"
      />
    </div>
  );
}
