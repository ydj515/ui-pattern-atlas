import { useId } from "react";

export interface RadioOption {
  readonly value: string;
  readonly label: string;
  /** Second line, e.g. price and timing. */
  readonly description?: string;
}

export interface RadioGroupProps {
  readonly legend: string;
  readonly options: readonly RadioOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
}

/**
 * One choice out of a few, all visible at once. Built on native radio inputs in a
 * fieldset, so arrow keys, Tab order and form submission work as in plain HTML.
 * The whole card is the label, so the hit area is large.
 */
export function RadioGroup({ legend, options, value, onChange }: RadioGroupProps) {
  const name = useId();
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-800">{legend}</legend>
      <div className="mt-2 space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 has-checked:border-blue-600 has-checked:bg-blue-50 has-focus-visible:ring-2 has-focus-visible:ring-blue-600/30"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="mt-0.5 size-4 accent-blue-600"
            />
            <span>
              <span className="block text-sm font-medium text-slate-900">{option.label}</span>
              {option.description ? (
                <span className="block text-xs text-slate-500">{option.description}</span>
              ) : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
