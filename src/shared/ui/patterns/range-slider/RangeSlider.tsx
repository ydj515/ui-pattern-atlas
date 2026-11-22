import { useId } from "react";

export interface RangeSliderProps {
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly value: readonly [number, number];
  readonly onChange: (value: readonly [number, number]) => void;
  readonly format?: (value: number) => string;
  readonly minLabel?: string;
  readonly maxLabel?: string;
}

const thumb =
  "pointer-events-none absolute inset-x-0 top-0 h-5 w-full appearance-none bg-transparent focus-visible:outline-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:bg-white focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-blue-600/25";

/**
 * Two thumbs on one track for a minimum and a maximum. Each thumb is its own native
 * range input with its own name ("최솟값", "최댓값"), so both work with the keyboard;
 * the thumbs cannot cross each other.
 */
export function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  format = String,
  minLabel = "최솟값",
  maxLabel = "최댓값",
}: RangeSliderProps) {
  const id = useId();
  const [low, high] = value;
  const toPercent = (number: number) => ((number - min) / (max - min)) * 100;

  return (
    <div role="group" aria-labelledby={`${id}-label`}>
      <div className="flex items-baseline justify-between">
        <span id={`${id}-label`} className="text-sm font-medium text-slate-800">
          {label}
        </span>
        <span className="text-sm font-semibold text-slate-900 tabular-nums">
          {format(low)} – {format(high)}
        </span>
      </div>
      <div className="relative mt-3 h-5">
        <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-200" />
        <span
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-blue-600"
          style={{ left: `${toPercent(low)}%`, right: `${100 - toPercent(high)}%` }}
        />
        <input
          type="range"
          aria-label={`${label} ${minLabel}`}
          aria-valuetext={format(low)}
          min={min}
          max={max}
          step={step}
          value={low}
          onChange={(event) => onChange([Math.min(Number(event.target.value), high - step), high])}
          className={thumb}
        />
        <input
          type="range"
          aria-label={`${label} ${maxLabel}`}
          aria-valuetext={format(high)}
          min={min}
          max={max}
          step={step}
          value={high}
          onChange={(event) => onChange([low, Math.max(Number(event.target.value), low + step)])}
          className={thumb}
        />
      </div>
    </div>
  );
}
