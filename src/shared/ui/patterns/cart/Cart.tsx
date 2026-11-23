import { useId } from "react";

export interface CartItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly selected: boolean;
}

export interface CartLabels {
  readonly selectAll: string;
  readonly decrease: (name: string) => string;
  readonly increase: (name: string) => string;
  readonly remove: (name: string) => string;
  readonly total: string;
  readonly order: (count: number) => string;
  readonly empty: string;
}

export interface CartProps {
  readonly items: readonly CartItem[];
  readonly onChange: (items: readonly CartItem[]) => void;
  readonly onOrder: (items: readonly CartItem[]) => void;
  readonly maxQuantity?: number;
  readonly format?: (value: number) => string;
  readonly labels?: CartLabels;
}

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

const DEFAULT_LABELS: CartLabels = {
  selectAll: "전체 선택",
  decrease: (name) => `${name} 수량 줄이기`,
  increase: (name) => `${name} 수량 늘리기`,
  remove: (name) => `${name} 빼기`,
  total: "주문 금액",
  order: (count) => `${count}개 상품 주문하기`,
  empty: "장바구니가 비어 있어요",
};

/**
 * Cart where each line can be included or left for later, its quantity changed and
 * removed. The total and the order button count only the selected lines, so what is
 * paid for is never a surprise.
 */
export function Cart({
  items,
  onChange,
  onOrder,
  maxQuantity = 9,
  format = won,
  labels = DEFAULT_LABELS,
}: CartProps) {
  const id = useId();
  const selected = items.filter((item) => item.selected);
  const total = selected.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const update = (itemId: string, change: Partial<CartItem>) =>
    onChange(items.map((item) => (item.id === itemId ? { ...item, ...change } : item)));

  if (items.length === 0) return <p className="text-sm text-slate-500">{labels.empty}</p>;

  return (
    <div className="grid gap-3 text-sm">
      <label className="flex items-center gap-2 text-slate-700">
        <input
          type="checkbox"
          checked={selected.length === items.length}
          ref={(node) => {
            if (node) node.indeterminate = selected.length > 0 && selected.length < items.length;
          }}
          onChange={(event) =>
            onChange(items.map((item) => ({ ...item, selected: event.target.checked })))
          }
        />
        {labels.selectAll} ({selected.length}/{items.length})
      </label>
      <ul className="divide-y divide-slate-100 border-y border-slate-100">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              aria-labelledby={`${id}-${item.id}`}
              checked={item.selected}
              onChange={(event) => update(item.id, { selected: event.target.checked })}
            />
            <span className="min-w-0 flex-1">
              <span id={`${id}-${item.id}`} className="block truncate text-slate-900">
                {item.name}
              </span>
              <span className="text-xs text-slate-500 tabular-nums">
                {format(item.price * item.quantity)}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <button
                type="button"
                aria-label={labels.decrease(item.name)}
                disabled={item.quantity <= 1}
                onClick={() => update(item.id, { quantity: item.quantity - 1 })}
                className="grid size-6 place-items-center rounded border border-slate-300 disabled:opacity-30"
              >
                −
              </button>
              <output aria-live="polite" className="w-5 text-center tabular-nums">
                {item.quantity}
              </output>
              <button
                type="button"
                aria-label={labels.increase(item.name)}
                disabled={item.quantity >= maxQuantity}
                onClick={() => update(item.id, { quantity: item.quantity + 1 })}
                className="grid size-6 place-items-center rounded border border-slate-300 disabled:opacity-30"
              >
                +
              </button>
            </span>
            <button
              type="button"
              aria-label={labels.remove(item.name)}
              onClick={() => onChange(items.filter((entry) => entry.id !== item.id))}
              className="text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <p className="flex justify-between">
        <span className="text-slate-600">{labels.total}</span>
        <b aria-live="polite" className="text-slate-900 tabular-nums">
          {format(total)}
        </b>
      </p>
      <button
        type="button"
        disabled={selected.length === 0}
        onClick={() => onOrder(selected)}
        className="rounded-lg bg-slate-900 py-2 font-semibold text-white disabled:opacity-40"
      >
        {labels.order(selected.length)}
      </button>
    </div>
  );
}
