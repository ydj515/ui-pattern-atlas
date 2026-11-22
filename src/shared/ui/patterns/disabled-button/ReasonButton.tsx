import { useId, useState, type ReactNode } from "react";

export interface ReasonButtonProps {
  readonly children: ReactNode;
  readonly onClick: () => void;
  /** Why the button cannot be used yet. Leave undefined when it can be used. */
  readonly disabledReason?: string;
}

/**
 * Button that explains why it cannot be pressed yet, instead of silently greying out.
 *
 * It uses aria-disabled, not disabled, so it stays focusable and screen readers read
 * the reason (linked with aria-describedby). Pressing it anyway highlights the reason.
 */
export function ReasonButton({ children, onClick, disabledReason }: ReasonButtonProps) {
  const reasonId = useId();
  const [nudged, setNudged] = useState(false);
  const disabled = disabledReason !== undefined;

  return (
    <div>
      <button
        type="button"
        aria-disabled={disabled || undefined}
        aria-describedby={disabled ? reasonId : undefined}
        onClick={() => {
          if (disabled) setNudged(true);
          else onClick();
        }}
        className="h-10 w-full rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none aria-disabled:cursor-not-allowed aria-disabled:bg-slate-200 aria-disabled:text-slate-500"
      >
        {children}
      </button>
      {disabled ? (
        <p
          id={reasonId}
          role={nudged ? "alert" : undefined}
          className={`mt-1.5 text-xs ${nudged ? "font-medium text-rose-600" : "text-slate-500"}`}
        >
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
