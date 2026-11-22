import { useId } from "react";

export interface StarRatingProps {
  readonly label: string;
  readonly value: number;
  readonly onChange: (value: number) => void;
  /** 1 for whole stars, 0.5 for half stars. */
  readonly step?: 1 | 0.5;
  readonly max?: number;
  readonly format?: (value: number) => string;
}

const STAR =
  "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z";

/**
 * Stars backed by native radio buttons, so arrow keys move the rating and screen
 * readers hear "4.5점" for each choice. With step 0.5 each star has a left and a right
 * half to click.
 */
export function StarRating({
  label,
  value,
  onChange,
  step = 1,
  max = 5,
  format = (score) => `${score}점`,
}: StarRatingProps) {
  const name = useId();
  const choices = Array.from({ length: max / step }, (_, index) => (index + 1) * step);

  return (
    <fieldset className="flex items-center gap-3">
      <legend className="sr-only">{label}</legend>
      <div className="relative flex">
        {Array.from({ length: max }, (_, index) => {
          const fill = Math.max(0, Math.min(1, value - index));
          return (
            <svg key={index} viewBox="0 0 24 24" aria-hidden="true" className="size-8">
              <defs>
                <clipPath id={`${name}-${index}`}>
                  <rect width={24 * fill} height="24" />
                </clipPath>
              </defs>
              <path d={STAR} className="fill-slate-200" />
              <path d={STAR} clipPath={`url(#${name}-${index})`} className="fill-amber-400" />
            </svg>
          );
        })}
        <div className="absolute inset-0 flex">
          {choices.map((choice) => (
            <label
              key={choice}
              className="h-full cursor-pointer"
              style={{ width: `${(step / max) * 100}%` }}
            >
              <input
                type="radio"
                name={name}
                value={choice}
                checked={value === choice}
                onChange={() => onChange(choice)}
                aria-label={format(choice)}
                className="peer sr-only"
              />
              <span className="block size-full rounded peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600" />
            </label>
          ))}
        </div>
      </div>
      <span aria-hidden="true" className="text-sm font-semibold text-slate-800 tabular-nums">
        {value > 0 ? format(value) : ""}
      </span>
    </fieldset>
  );
}
