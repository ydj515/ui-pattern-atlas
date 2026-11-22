import { useId } from "react";

export interface SliderProps {
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly value: number;
  readonly onChange: (value: number) => void;
  /** Human text for the value, read by screen readers too (aria-valuetext). */
  readonly format?: (value: number) => string;
}

/**
 * Pick a value by dragging. A styled native range input: arrow keys, Page Up/Down,
 * Home/End and touch all work, and `format` turns the number into words for display
 * and for aria-valuetext ("35,000원" instead of "35000").
 */
export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  format = String,
}: SliderProps) {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-slate-800">
          {label}
        </label>
        <output htmlFor={id} className="text-sm font-semibold text-slate-900 tabular-nums">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={format(value)}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{
          background: `linear-gradient(to right, #2563eb ${percent}%, #e2e8f0 ${percent}%)`,
        }}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full focus-visible:outline-none [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:bg-white focus-visible:[&::-webkit-slider-thumb]:ring-4 focus-visible:[&::-webkit-slider-thumb]:ring-blue-600/25"
      />
    </div>
  );
}
