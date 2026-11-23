import { useId } from "react";

export interface PaymentOption {
  readonly id: string;
  readonly label: string;
  readonly note?: string;
}

export interface PaymentMethodProps {
  readonly options: readonly PaymentOption[];
  readonly value: string;
  readonly onChange: (id: string) => void;
  /** Shown under the card option when it is chosen, e.g. ["일시불", "3개월"]. */
  readonly installments?: readonly string[];
  readonly installment?: string;
  readonly onInstallmentChange?: (value: string) => void;
  readonly cardId?: string;
  readonly legend?: string;
  readonly installmentLabel?: string;
}

/**
 * Payment method as large radio cards. Details that only one method needs, such as
 * card instalments, appear inside that card once it is chosen instead of up front.
 */
export function PaymentMethod({
  options,
  value,
  onChange,
  installments = [],
  installment,
  onInstallmentChange,
  cardId = "card",
  legend = "결제 수단",
  installmentLabel = "할부",
}: PaymentMethodProps) {
  const name = useId();
  return (
    <fieldset className="grid gap-2 text-sm">
      <legend className="mb-1 font-semibold text-slate-900">{legend}</legend>
      {options.map((option) => (
        <div
          key={option.id}
          className="rounded-xl border border-slate-200 has-checked:border-slate-900 has-checked:bg-slate-50"
        >
          <label className="flex cursor-pointer items-center gap-3 px-3 py-2.5">
            <input
              type="radio"
              name={name}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span className="flex-1">
              <span className="block font-medium text-slate-900">{option.label}</span>
              {option.note ? <span className="text-xs text-slate-500">{option.note}</span> : null}
            </span>
          </label>
          {option.id === cardId && value === cardId && installments.length > 0 ? (
            <label className="flex items-center gap-2 border-t border-slate-200 px-3 py-2 text-xs text-slate-700">
              {installmentLabel}
              <select
                value={installment}
                onChange={(event) => onInstallmentChange?.(event.target.value)}
                className="rounded border border-slate-300 px-2 py-1"
              >
                {installments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      ))}
    </fieldset>
  );
}
