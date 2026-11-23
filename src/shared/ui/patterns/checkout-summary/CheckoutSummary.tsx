import { useId, useState } from "react";

export interface CheckoutLine {
  readonly label: string;
  /** Negative for discounts. */
  readonly amount: number;
}

export interface CheckoutSummaryLabels {
  readonly title: string;
  readonly total: string;
  readonly consent: string;
  readonly pay: (total: string) => string;
}

export interface CheckoutSummaryProps {
  readonly lines: readonly CheckoutLine[];
  readonly onPay: (total: number) => void;
  readonly format?: (value: number) => string;
  readonly labels?: CheckoutSummaryLabels;
}

const won = (value: number) =>
  `${value < 0 ? "−" : ""}${Math.abs(value).toLocaleString("ko-KR")}원`;

const DEFAULT_LABELS: CheckoutSummaryLabels = {
  title: "결제 금액",
  total: "최종 결제 금액",
  consent: "주문 내용을 확인했고 결제에 동의해요(필수)",
  pay: (total) => `${total} 결제하기`,
};

/**
 * Last look before paying: every amount that makes up the total on its own line,
 * discounts shown as minus amounts, and a pay button that repeats the exact total and
 * waits for the required agreement.
 */
export function CheckoutSummary({
  lines,
  onPay,
  format = won,
  labels = DEFAULT_LABELS,
}: CheckoutSummaryProps) {
  const id = useId();
  const [agreed, setAgreed] = useState(false);
  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  return (
    <section aria-labelledby={id} className="grid gap-3 text-sm">
      <h3 id={id} className="font-semibold text-slate-900">
        {labels.title}
      </h3>
      <dl className="grid gap-1.5">
        {lines.map((line) => (
          <div key={line.label} className="flex justify-between">
            <dt className="text-slate-600">{line.label}</dt>
            <dd className={`tabular-nums ${line.amount < 0 ? "text-rose-600" : "text-slate-900"}`}>
              {format(line.amount)}
            </dd>
          </div>
        ))}
        <div className="mt-1 flex justify-between border-t border-slate-200 pt-2 text-base font-bold text-slate-900">
          <dt>{labels.total}</dt>
          <dd aria-live="polite" className="tabular-nums">
            {format(total)}
          </dd>
        </div>
      </dl>
      <label className="flex items-start gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-0.5"
        />
        {labels.consent}
      </label>
      <button
        type="button"
        disabled={!agreed}
        onClick={() => onPay(total)}
        className="rounded-lg bg-slate-900 py-2.5 font-semibold text-white disabled:opacity-40"
      >
        {labels.pay(format(total))}
      </button>
    </section>
  );
}
