import { useId } from "react";

export interface RatingSliderProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly min?: number;
  readonly max?: number;
  readonly lowLabel: string;
  readonly highLabel: string;
  readonly format?: (value: number) => string;
}

/**
 * Score on a native range input with the current value shown above the thumb and the
 * end meanings under the track. Arrow keys step by one, and the value text is what
 * screen readers announce.
 */
export function RatingSlider({
  label,
  value,
  onChange,
  min = 0,
  max = 10,
  lowLabel,
  highLabel,
  format = (score) => `${score}점`,
}: RatingSliderProps) {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>
      <div className="relative pt-7">
        <span
          aria-hidden="true"
          className="absolute top-0 -translate-x-1/2 rounded-md bg-slate-900 px-1.5 py-0.5 text-xs font-semibold text-white tabular-nums"
          style={{ left: `calc(${percent}% + ${(50 - percent) * 0.2}px)` }}
        >
          {format(value)}
        </span>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          aria-valuetext={format(value)}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full accent-blue-600"
        />
      </div>
      <p className="flex justify-between text-xs text-slate-500">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </p>
    </div>
  );
}
