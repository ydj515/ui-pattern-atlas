import { useId } from "react";

export interface ColorOption {
  readonly value: string;
  /** Spoken name, e.g. "파랑". */
  readonly name: string;
}

export interface ColorPickerProps {
  readonly label: string;
  readonly colors: readonly ColorOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly customLabel?: string;
}

/**
 * A row of preset swatches (native radios, so each colour has a name and arrow keys
 * work) plus the browser's colour input for anything else. The chosen value is shown
 * as text, so the choice never depends on seeing the colour.
 */
export function ColorPicker({
  label,
  colors,
  value,
  onChange,
  customLabel = "직접 고르기",
}: ColorPickerProps) {
  const name = useId();
  const isPreset = colors.some((color) => color.value.toLowerCase() === value.toLowerCase());
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-800">{label}</legend>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {colors.map((color) => (
          <label key={color.value} className="relative cursor-pointer" title={color.name}>
            <input
              type="radio"
              name={name}
              value={color.value}
              checked={value.toLowerCase() === color.value.toLowerCase()}
              onChange={() => onChange(color.value)}
              aria-label={color.name}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="block size-8 rounded-full ring-1 ring-slate-900/10 ring-offset-2 peer-checked:ring-2 peer-checked:ring-slate-900 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600"
              style={{ backgroundColor: color.value }}
            />
          </label>
        ))}
        <label className="flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300 py-1 pr-3 pl-1 text-xs text-slate-700 has-focus-visible:ring-2 has-focus-visible:ring-blue-600">
          <input
            type="color"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className={`size-6 cursor-pointer rounded-full border-0 bg-transparent p-0 ${isPreset ? "" : "ring-2 ring-slate-900"}`}
          />
          {customLabel}
        </label>
      </div>
      <p className="mt-2 font-mono text-xs text-slate-500">{value.toUpperCase()}</p>
    </fieldset>
  );
}
