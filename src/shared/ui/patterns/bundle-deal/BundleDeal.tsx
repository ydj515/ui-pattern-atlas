export interface BundleDealProps {
  readonly unitPrice: number;
  /** Quantity from which the bundle rate applies. */
  readonly threshold: number;
  /** Discount rate, e.g. 0.1 for 10%. */
  readonly rate: number;
  readonly quantity: number;
  readonly onQuantityChange: (quantity: number) => void;
  readonly max?: number;
  readonly format?: (value: number) => string;
  readonly labels?: {
    readonly applied: (percent: number) => string;
    readonly left: (count: number, percent: number) => string;
  };
}

const DEFAULT_LABELS = {
  applied: (percent: number) => `묶음 ${percent}% 할인 적용`,
  left: (count: number, percent: number) => `${count}개 더 담으면 ${percent}% 할인`,
};

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

/**
 * Quantity stepper that shows when the bundle price starts and what is left to reach
 * it ("1개 더 담으면 10% 할인"), then the total with and without the bundle once it
 * applies. The total is announced politely as it changes.
 */
export function BundleDeal({
  unitPrice,
  threshold,
  rate,
  quantity,
  onQuantityChange,
  max = 9,
  format = won,
  labels = DEFAULT_LABELS,
}: BundleDealProps) {
  const applies = quantity >= threshold;
  const full = unitPrice * quantity;
  const total = applies ? Math.round(full * (1 - rate)) : full;
  const percent = Math.round(rate * 100);
  const step =
    "grid size-8 place-items-center rounded-lg border border-slate-300 text-lg disabled:opacity-30";

  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="수량 빼기"
          disabled={quantity <= 1}
          onClick={() => onQuantityChange(quantity - 1)}
          className={step}
        >
          −
        </button>
        <output aria-label="수량" className="w-8 text-center font-semibold tabular-nums">
          {quantity}
        </output>
        <button
          type="button"
          aria-label="수량 더하기"
          disabled={quantity >= max}
          onClick={() => onQuantityChange(quantity + 1)}
          className={step}
        >
          +
        </button>
        <span
          className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${applies ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"}`}
        >
          {applies ? labels.applied(percent) : labels.left(threshold - quantity, percent)}
        </span>
      </div>
      <p aria-live="polite" className="text-sm text-slate-700 tabular-nums">
        {applies ? <s className="mr-2 text-slate-400">{format(full)}</s> : null}
        <b className="text-lg text-slate-900">{format(total)}</b>
      </p>
    </div>
  );
}
