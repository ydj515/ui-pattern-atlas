export interface PasswordStrengthMeterProps {
  /** 0 (empty) to 4 (very strong). */
  readonly score: 0 | 1 | 2 | 3 | 4;
  /** Words for scores 1–4, e.g. ["약함", "보통", "강함", "아주 강함"]. */
  readonly labels: readonly [string, string, string, string];
  /** Short tip for improving it, shown under the bars. */
  readonly hint?: string;
  readonly title?: string;
}

const colors = ["bg-rose-500", "bg-amber-500", "bg-emerald-500", "bg-emerald-600"] as const;

/**
 * Four bars plus a word for how strong the password is. The word, not the colour, carries
 * the result, and it is announced politely as it changes. Compute the score with a real
 * estimator (e.g. zxcvbn); simple rules are easy to game.
 */
export function PasswordStrengthMeter({
  score,
  labels,
  hint,
  title = "비밀번호 강도",
}: PasswordStrengthMeterProps) {
  return (
    <div className="space-y-1.5">
      <div aria-hidden="true" className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={`h-1.5 rounded-full transition-colors duration-200 motion-reduce:transition-none ${score >= step ? colors[score - 1] : "bg-slate-200"}`}
          />
        ))}
      </div>
      <p aria-live="polite" className="flex justify-between text-xs">
        <span className="text-slate-500">{title}</span>
        <span className="font-medium text-slate-800">{score > 0 ? labels[score - 1] : ""}</span>
      </p>
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
