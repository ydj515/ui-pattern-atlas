import { useId } from "react";

export interface SegmentedOption<TValue extends string> {
  readonly value: TValue;
  readonly label: string;
}

export interface SegmentedControlProps<TValue extends string> {
  readonly label: string;
  readonly options: readonly SegmentedOption<TValue>[];
  readonly value: TValue;
  readonly onValueChange: (value: TValue) => void;
  /** Show the group label visually. Hidden labels are still read by screen readers. */
  readonly showLabel?: boolean;
}

/**
 * Single choice among 2–5 short options, built on native radio inputs so
 * arrow-key navigation and form semantics come from the browser.
 */
export function SegmentedControl<TValue extends string>({
  label,
  options,
  value,
  onValueChange,
  showLabel = false,
}: SegmentedControlProps<TValue>) {
  const name = useId();

  return (
    <fieldset>
      <legend className={showLabel ? "mb-2 text-sm font-medium text-slate-900" : "sr-only"}>
        {label}
      </legend>
      <div className="inline-flex rounded-xl bg-slate-100 p-1">
        {options.map((option) => (
          <label key={option.value} className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={() => onValueChange(option.value)}
              className="peer sr-only"
            />
            <span className="block cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-500 transition-colors peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-slate-900 hover:text-slate-900 motion-reduce:transition-none">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
