import { useId, useState } from "react";

export interface LowestPriceLabelProps {
  /** e.g. "최근 30일 최저가". */
  readonly label: string;
  /** How it was checked: period and scope. */
  readonly basis: readonly string[];
  readonly basisLabel?: string;
}

/**
 * "Lowest price" claim that always comes with its basis (period, which sellers) one
 * tap away, so the claim can be checked instead of taken on trust.
 */
export function LowestPriceLabel({
  label,
  basis,
  basisLabel = "기준 보기",
}: LowestPriceLabelProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <div className="grid gap-1">
      <p className="flex items-center gap-2">
        <span className="rounded bg-blue-600 px-1.5 py-0.5 text-xs font-semibold text-white">
          {label}
        </span>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="text-xs text-slate-600 underline underline-offset-2"
        >
          {basisLabel}
        </button>
      </p>
      <ul
        id={id}
        hidden={!open}
        className="grid gap-0.5 rounded-lg bg-slate-50 p-2 text-xs text-slate-700"
      >
        {basis.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
