import { useId, useState } from "react";

export interface ReceiptLine {
  readonly name: string;
  readonly quantity: number;
  readonly price: number;
}

export interface ReceiptSummaryProps {
  readonly items: readonly ReceiptLine[];
  readonly discount?: number;
  readonly shipping?: number;
  readonly paidWith: string;
  readonly currency?: (value: number) => string;
  readonly labels?: {
    readonly items: (count: number) => string;
    readonly subtotal: string;
    readonly discount: string;
    readonly shipping: string;
    readonly total: string;
    readonly free: string;
  };
}

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;
const DEFAULT_LABELS = {
  items: (count: number) => `품목 ${count}개`,
  subtotal: "상품 금액",
  discount: "할인",
  shipping: "배송비",
  free: "무료",
  total: "결제 금액",
};

/**
 * Order summary that leads with the total and how it was paid, with the line items one
 * tap away. Amounts are right-aligned with tabular numbers, and discounts carry a minus
 * sign, not only a color.
 */
export function ReceiptSummary({
  items,
  discount = 0,
  shipping = 0,
  paidWith,
  currency = won,
  labels = DEFAULT_LABELS,
}: ReceiptSummaryProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount + shipping;
  const row = "flex justify-between gap-3";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 text-sm tabular-nums">
      <div className="flex items-baseline justify-between">
        <span className="font-semibold text-slate-900">{labels.total}</span>
        <span className="text-xl font-bold text-slate-900">{currency(total)}</span>
      </div>
      <p className="mt-0.5 text-right text-xs text-slate-500">{paidWith}</p>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="mt-3 flex w-full justify-between border-t border-slate-100 pt-3 text-left text-slate-700"
      >
        {labels.items(items.length)}
        <span
          aria-hidden="true"
          className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div id={id} hidden={!open} className="mt-2 grid gap-1.5 text-slate-700">
        {items.map((item) => (
          <p key={item.name} className={row}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{currency(item.price * item.quantity)}</span>
          </p>
        ))}
      </div>
      <dl className="mt-3 grid gap-1.5 border-t border-dashed border-slate-200 pt-3 text-slate-600">
        <div className={row}>
          <dt>{labels.subtotal}</dt>
          <dd>{currency(subtotal)}</dd>
        </div>
        {discount > 0 ? (
          <div className={row}>
            <dt>{labels.discount}</dt>
            <dd className="text-rose-600">−{currency(discount)}</dd>
          </div>
        ) : null}
        <div className={row}>
          <dt>{labels.shipping}</dt>
          <dd>{shipping === 0 ? labels.free : currency(shipping)}</dd>
        </div>
      </dl>
    </section>
  );
}
