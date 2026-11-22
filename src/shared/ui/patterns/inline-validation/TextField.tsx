import { useId, type ComponentPropsWithoutRef } from "react";

export interface TextFieldProps extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  readonly label: string;
  /** Persistent hint shown under the label. */
  readonly description?: string;
  /** Validation message. When set, the field is marked invalid and the message is announced. */
  readonly error?: string;
}

/**
 * Text input with a visible label, an optional hint and an inline error message.
 * The hint and the error are linked with `aria-describedby`.
 */
export function TextField({ label, description, error, className, ...inputProps }: TextFieldProps) {
  const inputId = useId();
  const descriptionId = useId();
  const errorId = useId();
  const describedBy = [description ? descriptionId : null, error ? errorId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      {description ? (
        <p id={descriptionId} className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      ) : null}
      <input
        {...inputProps}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-xs placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 focus:outline-none aria-invalid:border-rose-500 aria-invalid:focus:ring-rose-100"
      />
      <p
        id={errorId}
        aria-live="polite"
        className="mt-1.5 min-h-5 text-xs font-medium text-rose-600"
      >
        {error ? (
          <>
            <span aria-hidden="true">! </span>
            {error}
          </>
        ) : null}
      </p>
    </div>
  );
}
