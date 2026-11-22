import { useId, useLayoutEffect, useRef, type InputHTMLAttributes } from "react";

/** Formats digits into a mask where "0" is a digit slot, e.g. "000-0000-0000". */
export function formatWithMask(digits: string, mask: string) {
  let result = "";
  let index = 0;
  for (const slot of mask) {
    if (index >= digits.length) break;
    if (slot === "0") {
      result += digits[index];
      index += 1;
    } else {
      result += slot;
    }
  }
  return result;
}

export interface MaskedInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "onChange" | "className"
> {
  readonly label: string;
  readonly mask: string;
  /** Digits only, without the separators. */
  readonly value: string;
  readonly onChange: (digits: string) => void;
  readonly hint?: string;
}

/**
 * Input that inserts separators (hyphens, spaces) as digits are typed. The value you
 * store is the raw digits; the caret stays after the digit that was just typed even
 * when a separator is inserted before it. Pasting a formatted number works too.
 */
export function MaskedInput({
  label,
  mask,
  value,
  onChange,
  hint,
  ...inputProps
}: MaskedInputProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const caretDigitsRef = useRef<number | null>(null);
  const maxDigits = [...mask].filter((slot) => slot === "0").length;
  const formatted = formatWithMask(value, mask);

  useLayoutEffect(() => {
    const input = inputRef.current;
    const digitsBefore = caretDigitsRef.current;
    if (!input || digitsBefore === null || document.activeElement !== input) return;
    // Put the caret back after the same number of digits it had before formatting.
    let position = 0;
    let seen = 0;
    while (position < formatted.length && seen < digitsBefore) {
      if (/\d/.test(formatted[position] ?? "")) seen += 1;
      position += 1;
    }
    input.setSelectionRange(position, position);
    caretDigitsRef.current = null;
  }, [formatted]);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        inputMode="numeric"
        value={formatted}
        maxLength={mask.length}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={(event) => {
          const { value: raw, selectionStart } = event.target;
          caretDigitsRef.current = raw
            .slice(0, selectionStart ?? raw.length)
            .replace(/\D/g, "").length;
          onChange(raw.replace(/\D/g, "").slice(0, maxDigits));
        }}
        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
        {...inputProps}
      />
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
