import { useId, useState } from "react";

export interface SubscriptionCancellationProps {
  readonly plan: string;
  /** The last day already paid for, already formatted. */
  readonly paidUntil: string;
  /** What stops after that day, one line each. */
  readonly endings: readonly string[];
  readonly reasons: readonly string[];
  readonly onCancel: (reason: string | null) => void;
  readonly onPause: () => void;
  readonly labels?: {
    readonly title: (plan: string) => string;
    readonly until: (date: string) => string;
    readonly reasonLegend: string;
    readonly cancel: string;
    readonly pause: string;
  };
}

const DEFAULT_LABELS = {
  title: (plan: string) => `${plan} 구독을 해지할까요?`,
  until: (date: string) => `${date}까지는 지금처럼 쓸 수 있어요`,
  reasonLegend: "해지하는 이유 (선택)",
  cancel: "해지하기",
  pause: "한 달 쉬기",
};

/**
 * Cancelling in one screen: when access ends, what stops, an optional reason and a pause
 * offered as an equal choice, not a wall between the person and the cancel button.
 */
export function SubscriptionCancellation({
  plan,
  paidUntil,
  endings,
  reasons,
  onCancel,
  onPause,
  labels = DEFAULT_LABELS,
}: SubscriptionCancellationProps) {
  const name = useId();
  const [reason, setReason] = useState<string | null>(null);
  return (
    <section className="grid gap-3 text-sm">
      <h3 className="font-semibold text-slate-900">{labels.title(plan)}</h3>
      <p className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700">{labels.until(paidUntil)}</p>
      <ul className="grid list-disc gap-1 pl-5 text-slate-600">
        {endings.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <fieldset className="grid gap-1">
        <legend className="mb-1 text-xs text-slate-500">{labels.reasonLegend}</legend>
        {reasons.map((option) => (
          <label key={option} className="flex items-center gap-2 text-slate-700">
            <input
              type="radio"
              name={name}
              checked={reason === option}
              onChange={() => setReason(option)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={onPause}
          className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700"
        >
          {labels.pause}
        </button>
        <button
          type="button"
          onClick={() => onCancel(reason)}
          className="rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
        >
          {labels.cancel}
        </button>
      </div>
    </section>
  );
}
