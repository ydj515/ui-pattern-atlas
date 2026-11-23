export interface DiscountBadgeProps {
  /** Verified reference price (e.g. the price it actually sold at for 30 days). */
  readonly referencePrice: number | null;
  readonly price: number;
  /** What the reference is, e.g. "최근 30일 판매가". */
  readonly referenceLabel: string;
  readonly format?: (value: number) => string;
  readonly labels?: {
    /** Visible basis, e.g. "최근 30일 판매가 39,000원 기준". */
    readonly basis: (reference: string) => string;
    /** Sentence read by screen readers. */
    readonly spoken: (reference: string, percent: number) => string;
  };
}

const DEFAULT_LABELS = {
  basis: (reference: string) => `${reference} 기준`,
  spoken: (reference: string, percent: number) => `${reference}보다 ${percent}% 낮은 가격`,
};

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

/**
 * Discount percentage computed from a verified reference price, rounded down so it
 * never overstates the saving. With no verified reference it shows nothing, and screen
 * readers hear the whole sentence with the reference, not just "45%".
 */
export function DiscountBadge({
  referencePrice,
  price,
  referenceLabel,
  format = won,
  labels = DEFAULT_LABELS,
}: DiscountBadgeProps) {
  if (!referencePrice || referencePrice <= price) return null;
  const reference = `${referenceLabel} ${format(referencePrice)}`;
  const percent = Math.floor(((referencePrice - price) / referencePrice) * 100);
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        aria-hidden="true"
        className="rounded bg-rose-600 px-1.5 py-0.5 text-sm font-bold text-white tabular-nums"
      >
        {percent}%
      </span>
      <span aria-hidden="true" className="text-xs text-slate-500">
        {labels.basis(reference)}
      </span>
      <span className="sr-only">{labels.spoken(reference, percent)}</span>
    </span>
  );
}
