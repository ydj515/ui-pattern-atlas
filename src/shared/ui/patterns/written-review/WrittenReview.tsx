import { useId, useState, type FormEvent } from "react";

export interface WrittenReviewProps {
  readonly onSubmit: (review: { stars: number; body: string }) => void;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly placeholder?: string;
  readonly labels?: {
    readonly stars: string;
    readonly body: string;
    readonly submit: string;
    readonly needStars: string;
    readonly hint: (min: number) => string;
  };
}

const DEFAULT_LABELS = {
  stars: "별점",
  body: "후기",
  submit: "후기 올리기",
  needStars: "별점을 골라 주세요",
  hint: (min: number) => `${min}자 이상 써 주세요`,
};

/**
 * Review form with stars and text. The length rule and the character count are visible
 * while typing, and the form checks on submit, pointing to the first problem instead
 * of disabling the button.
 */
export function WrittenReview({
  onSubmit,
  minLength = 10,
  maxLength = 300,
  placeholder,
  labels = DEFAULT_LABELS,
}: WrittenReviewProps) {
  const id = useId();
  const [stars, setStars] = useState(0);
  const [body, setBody] = useState("");
  const [tried, setTried] = useState(false);
  const starsMissing = tried && stars === 0;
  const tooShort = tried && body.trim().length < minLength;

  function submit(event: FormEvent) {
    event.preventDefault();
    setTried(true);
    if (stars === 0) {
      document.getElementById(`${id}-star-1`)?.focus();
      return;
    }
    if (body.trim().length < minLength) {
      document.getElementById(`${id}-body`)?.focus();
      return;
    }
    onSubmit({ stars, body: body.trim() });
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-3">
      <fieldset aria-describedby={starsMissing ? `${id}-stars-error` : undefined}>
        <legend className="text-sm font-medium text-slate-900">{labels.stars}</legend>
        <div className="mt-1 flex">
          {[1, 2, 3, 4, 5].map((score) => (
            <label key={score} className="cursor-pointer">
              <input
                id={`${id}-star-${score}`}
                type="radio"
                name={`${id}-stars`}
                checked={stars === score}
                onChange={() => setStars(score)}
                aria-label={`${score}점`}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={`block rounded px-0.5 text-2xl leading-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 ${score <= stars ? "text-amber-400" : "text-slate-200"}`}
              >
                ★
              </span>
            </label>
          ))}
        </div>
        <p id={`${id}-stars-error`} className="h-4 text-xs text-rose-600">
          {starsMissing ? labels.needStars : ""}
        </p>
      </fieldset>
      <div className="grid gap-1">
        <label htmlFor={`${id}-body`} className="text-sm font-medium text-slate-900">
          {labels.body}
        </label>
        <textarea
          id={`${id}-body`}
          rows={3}
          value={body}
          maxLength={maxLength}
          placeholder={placeholder}
          aria-invalid={tooShort}
          aria-describedby={`${id}-hint`}
          onChange={(event) => setBody(event.target.value)}
          className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm aria-invalid:border-rose-500"
        />
        <p
          id={`${id}-hint`}
          className={`flex justify-between text-xs ${tooShort ? "text-rose-600" : "text-slate-500"}`}
        >
          <span>{labels.hint(minLength)}</span>
          <span className="tabular-nums">
            {body.trim().length}/{maxLength}
          </span>
        </p>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {labels.submit}
      </button>
    </form>
  );
}
