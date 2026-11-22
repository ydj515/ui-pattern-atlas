import { useId, useState, type ReactNode } from "react";

export interface BeforeAfterSliderProps {
  readonly before: ReactNode;
  readonly after: ReactNode;
  readonly beforeLabel?: string;
  readonly afterLabel?: string;
  /** Name of the range input, e.g. "보정 전후 비교". */
  readonly label: string;
  readonly initial?: number;
}

/**
 * Two pictures stacked, with a handle that reveals more of one or the other. The handle
 * is a native range input laid over the picture, so it works by dragging, by clicking
 * anywhere, and with arrow keys; aria-valuetext says how much of each side is shown.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "전",
  afterLabel = "후",
  label,
  initial = 50,
}: BeforeAfterSliderProps) {
  const id = useId();
  const [position, setPosition] = useState(initial);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl select-none">
      <div aria-hidden="true" className="absolute inset-0">
        {after}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white"
      >
        {beforeLabel}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white"
      >
        {afterLabel}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs text-slate-700 shadow">
          ‹›
        </span>
      </span>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={position}
        aria-valuetext={`${beforeLabel} ${position}%, ${afterLabel} ${100 - position}%`}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="peer absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 peer-focus-visible:ring-inset"
      />
    </div>
  );
}
