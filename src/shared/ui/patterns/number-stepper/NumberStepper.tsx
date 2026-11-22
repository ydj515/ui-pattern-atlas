import { useId, useState } from "react";

export interface NumberStepperProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  readonly decreaseLabel?: string;
  readonly increaseLabel?: string;
}

/**
 * Quantity input with − and + buttons. The middle is a spinbutton: arrow keys step,
 * typing opens the number pad on phones, and the value is clamped when focus leaves.
 * The buttons are disabled at the limits.
 */
export function NumberStepper({
  label,
  value,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  decreaseLabel = "줄이기",
  increaseLabel = "늘리기",
}: NumberStepperProps) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);
  const clamp = (next: number) => Math.min(max, Math.max(min, next));

  function commitDraft() {
    if (draft === null) return;
    const parsed = Number.parseInt(draft, 10);
    onChange(Number.isNaN(parsed) ? value : clamp(parsed));
    setDraft(null);
  }

  const buttonClass =
    "grid size-9 place-items-center text-lg text-slate-700 hover:bg-slate-100 disabled:text-slate-300 disabled:hover:bg-transparent";

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="mt-1.5 inline-flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
        <button
          type="button"
          aria-label={`${label} ${decreaseLabel}`}
          disabled={value <= min}
          onClick={() => onChange(clamp(value - step))}
          className={buttonClass}
        >
          <span aria-hidden="true">−</span>
        </button>
        <input
          id={id}
          role="spinbutton"
          inputMode="numeric"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max === Number.MAX_SAFE_INTEGER ? undefined : max}
          value={draft ?? String(value)}
          onChange={(event) => setDraft(event.target.value.replace(/\D/g, ""))}
          onBlur={commitDraft}
          onKeyDown={(event) => {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
              event.preventDefault();
              onChange(clamp(value + (event.key === "ArrowUp" ? step : -step)));
            } else if (event.key === "Enter") {
              commitDraft();
            }
          }}
          className="h-9 w-12 border-x border-slate-200 text-center text-sm font-semibold text-slate-900 tabular-nums focus:outline-none"
        />
        <button
          type="button"
          aria-label={`${label} ${increaseLabel}`}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + step))}
          className={buttonClass}
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}
