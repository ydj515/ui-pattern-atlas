import { useId } from "react";

export interface SwitchProps {
  readonly checked: boolean;
  readonly onCheckedChange: (checked: boolean) => void;
  readonly label: string;
  readonly description?: string;
  readonly disabled?: boolean;
}

/**
 * On/off control that applies immediately, like a light switch.
 * Uses `role="switch"` on a native button so Space and Enter both toggle it.
 */
export function Switch({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
}: SwitchProps) {
  const buttonId = useId();
  const descriptionId = useId();

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <label htmlFor={buttonId} className="text-sm font-medium text-slate-900">
          {label}
        </label>
        {description ? (
          <p id={descriptionId} className="mt-0.5 text-xs text-slate-500">
            {description}
          </p>
        ) : null}
      </div>
      <button
        id={buttonId}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-describedby={description ? descriptionId : undefined}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className="group relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-slate-300 transition-colors aria-checked:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="size-5 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform group-aria-checked:translate-x-5.5 motion-reduce:transition-none"
        />
      </button>
    </div>
  );
}
