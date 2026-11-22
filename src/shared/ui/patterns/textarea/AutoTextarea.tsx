import { useId, useLayoutEffect, useRef } from "react";

export interface AutoTextareaProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly maxLength: number;
  readonly placeholder?: string;
  /** Rows shown before any text. */
  readonly minRows?: number;
}

/**
 * Textarea that grows with its content and shows how many characters are left.
 *
 * The counter is linked with aria-describedby. It is not a live region on every
 * keystroke; it switches to an alert style only near the limit.
 */
export function AutoTextarea({
  label,
  value,
  onChange,
  maxLength,
  placeholder,
  minRows = 2,
}: AutoTextareaProps) {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement>(null);
  const nearLimit = value.length >= maxLength * 0.9;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Reset first so the box can also shrink when text is deleted.
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight + 2}px`;
  }, [value]);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={minRows}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-describedby={`${id}-count`}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 block w-full resize-none overflow-hidden rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm leading-6 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
      />
      <p
        id={`${id}-count`}
        className={`mt-1 text-right text-xs tabular-nums ${nearLimit ? "text-rose-600" : "text-slate-500"}`}
      >
        {value.length}/{maxLength}
      </p>
    </div>
  );
}
