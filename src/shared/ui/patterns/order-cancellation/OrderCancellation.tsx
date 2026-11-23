import { useId, useState } from "react";

export interface CancelItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
}

export interface OrderCancellationLabels {
  readonly items: string;
  readonly reason: string;
  readonly noReason: string;
  readonly refund: string;
  readonly couponBack: string;
  readonly refundTotal: string;
  readonly method: string;
  readonly submit: (count: number) => string;
  readonly done: (amount: string) => string;
}

export interface OrderCancellationProps {
  readonly items: readonly CancelItem[];
  readonly reasons: readonly string[];
  /** Coupon discount that is taken back when the order drops below its condition. */
  readonly couponBack: (keptTotal: number) => number;
  readonly refundMethod: string;
  readonly onCancel: (ids: readonly string[], reason: string) => void;
  readonly format?: (value: number) => string;
  readonly labels?: OrderCancellationLabels;
}

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

const DEFAULT_LABELS: OrderCancellationLabels = {
  items: "취소할 상품",
  reason: "취소 사유",
  noReason: "사유를 골라 주세요",
  refund: "상품 금액",
  couponBack: "쿠폰 할인 회수",
  refundTotal: "환불 예정 금액",
  method: "환불 방법",
  submit: (count) => `${count}개 상품 취소하기`,
  done: (amount) => `취소를 접수했어요. ${amount}을 환불해 드려요.`,
};

/**
 * Partial or full cancellation: choose items, pick a reason, and see the refund worked
 * out before submitting, including any coupon discount that is taken back and where
 * the money goes.
 */
export function OrderCancellation({
  items,
  reasons,
  couponBack,
  refundMethod,
  onCancel,
  format = won,
  labels = DEFAULT_LABELS,
}: OrderCancellationProps) {
  const id = useId();
  const [chosen, setChosen] = useState<readonly string[]>([]);
  const [reason, setReason] = useState("");
  const [done, setDone] = useState<string | null>(null);
  const cancelled = items.filter((item) => chosen.includes(item.id));
  const amount = cancelled.reduce((sum, item) => sum + item.price, 0);
  const kept = items.reduce((sum, item) => sum + item.price, 0) - amount;
  const back = cancelled.length > 0 ? couponBack(kept) : 0;
  const refund = amount - back;

  if (done) {
    return (
      <p role="status" className="text-sm text-slate-700">
        {labels.done(done)}
      </p>
    );
  }

  return (
    <div className="grid gap-3 text-sm">
      <fieldset className="grid gap-1.5">
        <legend className="mb-1 font-semibold text-slate-900">{labels.items}</legend>
        {items.map((item) => (
          <label key={item.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={chosen.includes(item.id)}
              onChange={(event) =>
                setChosen((current) =>
                  event.target.checked
                    ? [...current, item.id]
                    : current.filter((entry) => entry !== item.id),
                )
              }
            />
            <span className="flex-1">{item.name}</span>
            <span className="tabular-nums text-slate-600">{format(item.price)}</span>
          </label>
        ))}
      </fieldset>
      <label className="grid gap-1 font-medium text-slate-800">
        {labels.reason}
        <select
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 font-normal"
        >
          <option value="">{labels.noReason}</option>
          {reasons.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <dl aria-labelledby={`${id}-total`} className="grid gap-1 rounded-lg bg-slate-50 p-3">
        <div className="flex justify-between">
          <dt className="text-slate-600">{labels.refund}</dt>
          <dd className="tabular-nums">{format(amount)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-600">{labels.couponBack}</dt>
          <dd className="text-rose-600 tabular-nums">−{format(back)}</dd>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-1 font-bold">
          <dt id={`${id}-total`}>{labels.refundTotal}</dt>
          <dd aria-live="polite" className="tabular-nums">
            {format(refund)}
          </dd>
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <dt>{labels.method}</dt>
          <dd>{refundMethod}</dd>
        </div>
      </dl>
      <button
        type="button"
        disabled={cancelled.length === 0 || reason === ""}
        onClick={() => {
          onCancel(chosen, reason);
          setDone(format(refund));
        }}
        className="rounded-lg bg-slate-900 py-2 font-semibold text-white disabled:opacity-40"
      >
        {labels.submit(cancelled.length)}
      </button>
    </div>
  );
}
