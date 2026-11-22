import { useId } from "react";

export interface EmojiRatingProps {
  readonly question: string;
  readonly value: number | null;
  readonly onChange: (value: number) => void;
  /** Five labels from worst to best. */
  readonly labels: readonly [string, string, string, string, string];
}

const MOUTHS = [
  "M8 17c1.5-2 6.5-2 8 0",
  "M8 16.5c1.5-1 6.5-1 8 0",
  "M8 16h8",
  "M8 15.5c1.5 1 6.5 1 8 0",
  "M7.5 14.5c1.5 3 7.5 3 9 0",
];

/**
 * Satisfaction scale drawn as five faces in order, from frowning to smiling. They are
 * radio buttons with text labels, so the order and meaning do not rely on reading the
 * faces, and the chosen label is shown below.
 */
export function EmojiRating({ question, value, onChange, labels }: EmojiRatingProps) {
  const name = useId();
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">{question}</legend>
      <div className="mt-3 flex justify-between gap-1">
        {MOUTHS.map((mouth, index) => {
          const score = index + 1;
          return (
            <label key={mouth} className="group grid cursor-pointer justify-items-center gap-1">
              <input
                type="radio"
                name={name}
                value={score}
                checked={value === score}
                onChange={() => onChange(score)}
                aria-label={labels[index]}
                className="peer sr-only"
              />
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-10 rounded-full text-slate-400 transition peer-checked:scale-110 peer-checked:text-amber-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 motion-reduce:transition-none"
              >
                <circle cx="12" cy="12" r="10" className="fill-current opacity-20" />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="10" r="1.2" fill="currentColor" />
                <circle cx="15" cy="10" r="1.2" fill="currentColor" />
                <path
                  d={mouth}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </label>
          );
        })}
      </div>
      <p aria-hidden="true" className="mt-2 h-5 text-center text-sm font-semibold text-slate-800">
        {value ? labels[value - 1] : ""}
      </p>
    </fieldset>
  );
}
