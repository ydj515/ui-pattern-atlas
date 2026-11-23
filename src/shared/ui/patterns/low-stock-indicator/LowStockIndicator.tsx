export interface LowStockIndicatorProps {
  /** Real stock count. */
  readonly stock: number;
  /** At or below this, the count is shown. */
  readonly lowAt?: number;
  readonly labels?: {
    readonly soldOut: string;
    readonly inStock: string;
    readonly left: (count: number) => string;
  };
}

const DEFAULT_LABELS = {
  soldOut: "품절",
  inStock: "재고 있음",
  left: (count: number) => `남은 수량 ${count}개`,
};

/**
 * Stock status from real inventory: in stock, a count once it runs low, or sold out.
 * It states the number plainly without alarm wording, and it uses text and an icon
 * shape, not only color.
 */
export function LowStockIndicator({
  stock,
  lowAt = 5,
  labels = DEFAULT_LABELS,
}: LowStockIndicatorProps) {
  const state = stock <= 0 ? "out" : stock <= lowAt ? "low" : "ok";
  const tone =
    state === "out" ? "text-slate-500" : state === "low" ? "text-amber-700" : "text-emerald-700";
  return (
    <p
      aria-live="polite"
      className={`inline-flex items-center gap-1.5 text-sm font-medium ${tone}`}
    >
      <span
        aria-hidden="true"
        className={`size-2 ${state === "out" ? "rounded-sm bg-slate-400" : state === "low" ? "rotate-45 bg-amber-500" : "rounded-full bg-emerald-500"}`}
      />
      {state === "out" ? labels.soldOut : state === "low" ? labels.left(stock) : labels.inStock}
    </p>
  );
}
