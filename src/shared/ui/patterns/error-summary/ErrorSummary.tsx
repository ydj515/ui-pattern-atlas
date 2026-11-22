import { useEffect, useId, useRef } from "react";

export interface FieldError {
  /** `id` of the input the error belongs to. */
  readonly fieldId: string;
  readonly message: string;
}

export interface ErrorSummaryProps {
  readonly errors: readonly FieldError[];
  /** Heading built from the error count, so the number is announced first. */
  readonly title?: (count: number) => string;
}

const defaultTitle = (count: number) => `입력한 내용 ${count}개를 확인해 주세요`;

/**
 * List of every form error above the form, shown after a failed submit.
 *
 * The summary takes focus when it appears so screen reader and keyboard users hear how
 * many problems there are. Each item links to its field and moves focus there.
 * Keep the inline message next to each field as well.
 */
export function ErrorSummary({ errors, title = defaultTitle }: ErrorSummaryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (errors.length > 0) ref.current?.focus();
  }, [errors]);

  if (errors.length === 0) return null;

  return (
    <div
      ref={ref}
      role="alert"
      tabIndex={-1}
      aria-labelledby={titleId}
      className="rounded-xl border-2 border-rose-500 bg-rose-50 p-4 text-rose-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
    >
      <h2 id={titleId} className="text-sm font-semibold">
        {title(errors.length)}
      </h2>
      <ul className="mt-2 space-y-1 text-sm">
        {errors.map((error) => (
          <li key={error.fieldId}>
            <a
              href={`#${error.fieldId}`}
              onClick={(event) => {
                // Focus the field itself instead of only scrolling to it.
                event.preventDefault();
                document.getElementById(error.fieldId)?.focus();
              }}
              className="font-medium underline underline-offset-2 hover:text-rose-700"
            >
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
