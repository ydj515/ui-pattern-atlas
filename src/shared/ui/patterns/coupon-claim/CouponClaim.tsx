export interface CouponClaimProps {
  /** e.g. "5,000원 할인". */
  readonly title: string;
  /** Conditions people must meet: minimum order, period, products. */
  readonly conditions: readonly string[];
  readonly claimed: boolean;
  readonly onClaim: () => void;
  readonly claimLabel?: string;
  readonly claimedLabel?: string;
}

/**
 * Coupon with its conditions spelled out before it is claimed, and a button that turns
 * into a done state once claimed. The conditions are part of the coupon, not a footnote.
 */
export function CouponClaim({
  title,
  conditions,
  claimed,
  onClaim,
  claimLabel = "쿠폰 받기",
  claimedLabel = "받았어요",
}: CouponClaimProps) {
  return (
    <section
      aria-label={title}
      className="flex overflow-hidden rounded-xl border border-dashed border-rose-300 bg-rose-50"
    >
      <div className="flex-1 p-3">
        <p className="text-lg font-bold text-rose-700">{title}</p>
        <ul className="mt-1 grid gap-0.5 text-xs text-slate-700">
          {conditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        disabled={claimed}
        onClick={onClaim}
        className="w-24 border-l border-dashed border-rose-300 bg-rose-600 text-sm font-semibold text-white disabled:bg-white disabled:text-rose-700"
      >
        {claimed ? claimedLabel : claimLabel}
      </button>
    </section>
  );
}
