import { useId } from "react";

export interface TrackingStep {
  readonly label: string;
  /** When it happened; empty for steps still ahead. */
  readonly time?: string;
}

export interface OrderTrackingProps {
  readonly steps: readonly TrackingStep[];
  /** Index of the latest step that has happened. */
  readonly current: number;
  readonly eta: string;
  readonly carrier: string;
  readonly trackingNumber: string;
  readonly onCopy: (trackingNumber: string) => void;
  readonly copyLabel?: string;
  readonly currentLabel?: string;
}

/**
 * Delivery progress as an ordered list: steps that happened keep their time, the
 * current one is marked as the current step, and the expected arrival and tracking
 * number sit above so they can be read and copied.
 */
export function OrderTracking({
  steps,
  current,
  eta,
  carrier,
  trackingNumber,
  onCopy,
  copyLabel = "운송장 번호 복사",
  currentLabel = "지금 단계",
}: OrderTrackingProps) {
  const id = useId();
  return (
    <section aria-labelledby={id} className="grid gap-3 text-sm">
      <h3 id={id} className="text-base font-bold text-slate-900">
        {eta}
      </h3>
      <p className="flex items-center justify-between text-xs text-slate-600">
        <span className="tabular-nums">
          {carrier} {trackingNumber}
        </span>
        <button type="button" onClick={() => onCopy(trackingNumber)} className="underline">
          {copyLabel}
        </button>
      </p>
      <ol className="grid gap-0">
        {steps.map((step, index) => {
          const done = index <= current;
          return (
            <li
              key={step.label}
              aria-current={index === current ? "step" : undefined}
              className="relative flex gap-3 pb-3 last:pb-0"
            >
              <span aria-hidden="true" className="relative flex flex-col items-center">
                <span
                  className={`size-3 rounded-full border-2 ${index === current ? "border-blue-700 bg-white ring-4 ring-blue-100" : done ? "border-blue-700 bg-blue-700" : "border-slate-300 bg-white"}`}
                />
                {index < steps.length - 1 ? (
                  <span
                    className={`w-0.5 flex-1 ${index < current ? "bg-blue-700" : "bg-slate-200"}`}
                  />
                ) : null}
              </span>
              <span className="-mt-0.5">
                <span className={done ? "font-medium text-slate-900" : "text-slate-400"}>
                  {step.label}
                </span>
                {index === current ? <span className="sr-only"> ({currentLabel})</span> : null}
                {done && step.time ? (
                  <span className="block text-xs text-slate-500 tabular-nums">{step.time}</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
