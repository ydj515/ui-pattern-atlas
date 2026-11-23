export interface RewardPointsProps {
  readonly price: number;
  /** Earn rate, e.g. 0.01 for 1%. */
  readonly rate: number;
  /** When the points arrive and other conditions. */
  readonly condition: string;
  readonly format?: (value: number) => string;
  readonly earnLabel?: (points: string, percent: number) => string;
}

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

/**
 * Points to be earned, shown as an amount with the rate and the condition for getting
 * them (usually after the purchase is confirmed), so "적립" is not read as a discount.
 */
export function RewardPoints({
  price,
  rate,
  condition,
  format = won,
  earnLabel = (points, percent) => `${points} 적립 예정 (${percent}%)`,
}: RewardPointsProps) {
  const points = Math.floor(price * rate);
  return (
    <p className="grid text-sm">
      <span aria-live="polite" className="font-semibold text-emerald-700 tabular-nums">
        {earnLabel(format(points), Math.round(rate * 100))}
      </span>
      <span className="text-xs text-slate-500">{condition}</span>
    </p>
  );
}
