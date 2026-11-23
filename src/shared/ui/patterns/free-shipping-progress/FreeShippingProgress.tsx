export interface FreeShippingProgressProps {
  readonly total: number;
  readonly threshold: number;
  readonly format?: (value: number) => string;
  readonly labels?: {
    readonly left: (amount: string) => string;
    readonly done: string;
    readonly bar: string;
  };
}

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;
const DEFAULT_LABELS = {
  left: (amount: string) => `${amount} 더 담으면 무료배송`,
  done: "무료배송이에요",
  bar: "무료배송까지",
};

/**
 * Progress toward the free-shipping minimum: the amount still needed in words and a
 * bar for the same thing. Once reached, it says so plainly.
 */
export function FreeShippingProgress({
  total,
  threshold,
  format = won,
  labels = DEFAULT_LABELS,
}: FreeShippingProgressProps) {
  const done = total >= threshold;
  return (
    <div className="grid gap-1.5">
      <p
        aria-live="polite"
        className={`text-sm font-medium ${done ? "text-emerald-700" : "text-slate-800"}`}
      >
        {done ? labels.done : labels.left(format(threshold - total))}
      </p>
      <progress
        value={Math.min(total, threshold)}
        max={threshold}
        aria-label={labels.bar}
        className="h-2 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-emerald-500 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-emerald-500 [&::-webkit-progress-value]:transition-all"
      />
    </div>
  );
}
