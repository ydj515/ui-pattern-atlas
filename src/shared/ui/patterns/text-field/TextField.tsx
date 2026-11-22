import { useId, type InputHTMLAttributes } from "react";

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "className"
> {
  readonly label: string;
  /** Format or rule shown under the field before anything goes wrong. */
  readonly hint?: string;
  /** Replaces the hint while the value is invalid. */
  readonly error?: string;
  /** Visible text for required fields; the input also gets `required`. */
  readonly requiredLabel?: string;
}

/**
 * Labelled text input with a hint and an error message.
 *
 * The label is always visible (a placeholder is not a label). Hint and error are
 * linked with aria-describedby, and the error also sets aria-invalid.
 */
export function TextField({
  label,
  hint,
  error,
  required,
  requiredLabel = "필수",
  ...inputProps
}: TextFieldProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error ?? hint;

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline gap-1.5 text-sm font-medium text-slate-800"
      >
        {label}
        {required ? (
          <span className="text-xs font-normal text-slate-500">({requiredLabel})</span>
        ) : null}
      </label>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none aria-invalid:border-rose-500 aria-invalid:focus:ring-rose-500/20"
        {...inputProps}
      />
      {message ? (
        <p
          id={messageId}
          className={`mt-1.5 text-xs ${error ? "text-rose-600" : "text-slate-500"}`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
