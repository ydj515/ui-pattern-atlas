import { useId } from "react";

export interface NpsScaleProps {
  readonly question: string;
  readonly value: number | null;
  readonly onChange: (value: number) => void;
  readonly lowLabel?: string;
  readonly highLabel?: string;
}

/**
 * 0 to 10 likelihood scale as a row of radio buttons with the end labels spelled out.
 * Every score looks the same before choosing, so the scale does not nudge people
 * toward a number.
 */
export function NpsScale({
  question,
  value,
  onChange,
  lowLabel = "전혀 아니에요",
  highLabel = "매우 그래요",
}: NpsScaleProps) {
  const name = useId();
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">{question}</legend>
      <div className="mt-3 grid grid-cols-11 gap-1">
        {Array.from({ length: 11 }, (_, score) => (
          <label
            key={score}
            className="grid h-9 cursor-pointer place-items-center rounded-md border border-slate-200 text-sm text-slate-700 has-checked:border-slate-900 has-checked:bg-slate-900 has-checked:text-white has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name={name}
              value={score}
              checked={value === score}
              onChange={() => onChange(score)}
              className="sr-only"
            />
            {score}
          </label>
        ))}
      </div>
      <p className="mt-1 flex justify-between text-xs text-slate-500">
        <span>0 {lowLabel}</span>
        <span>10 {highLabel}</span>
      </p>
    </fieldset>
  );
}
