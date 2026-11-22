import { useId } from "react";

export interface SystemPermissionDialogProps {
  /** What the device asks, e.g. "‘동네가게’에서 사진에 접근하려고 합니다". */
  readonly title: string;
  /** The app's purpose string, shown under the title by the system. */
  readonly message: string;
  readonly allowLabel: string;
  readonly denyLabel: string;
  readonly limitedLabel?: string;
  readonly onDecide: (decision: "allow" | "limited" | "deny") => void;
}

/**
 * Stand-in for the device's own permission prompt, for prototypes and docs. On a real
 * device the system draws it and the app only supplies the message, which should say
 * exactly what the access is for. It is shown after the app's own explanation.
 */
export function SystemPermissionDialog({
  title,
  message,
  allowLabel,
  denyLabel,
  limitedLabel,
  onDecide,
}: SystemPermissionDialogProps) {
  const id = useId();
  const button = "border-t border-slate-300/70 py-2.5 text-sm text-blue-600 hover:bg-slate-200/60";
  return (
    <div
      role="alertdialog"
      aria-labelledby={id}
      aria-describedby={`${id}-message`}
      className="w-64 overflow-hidden rounded-2xl bg-slate-100/95 text-center shadow-2xl backdrop-blur"
    >
      <div className="px-4 pt-4 pb-3">
        <h2 id={id} className="text-sm font-semibold text-slate-900">
          {title}
        </h2>
        <p id={`${id}-message`} className="mt-1 text-xs text-slate-700">
          {message}
        </p>
      </div>
      <div className="grid">
        {limitedLabel ? (
          <button type="button" onClick={() => onDecide("limited")} className={button}>
            {limitedLabel}
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => onDecide("allow")}
          className={`${button} font-semibold`}
        >
          {allowLabel}
        </button>
        <button type="button" onClick={() => onDecide("deny")} className={button}>
          {denyLabel}
        </button>
      </div>
    </div>
  );
}
