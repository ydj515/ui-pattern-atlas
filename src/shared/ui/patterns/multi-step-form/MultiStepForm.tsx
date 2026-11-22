import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

export interface FormStep {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
  /** Return false to stay on the step (show the field errors yourself). */
  readonly validate?: () => boolean;
}

export interface MultiStepFormProps {
  readonly steps: readonly FormStep[];
  readonly onComplete: () => void;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
  readonly submitLabel?: string;
  /** Progress text, e.g. (current, total) => `${current}/${total}단계`. */
  readonly progressLabel?: (current: number, total: number) => string;
}

/**
 * Splits a long form into steps with a progress list, 이전/다음 buttons and one submit
 * at the end. Moving between steps keeps what was typed and moves focus to the new
 * step's heading so screen reader users hear where they are.
 */
export function MultiStepForm({
  steps,
  onComplete,
  prevLabel = "이전",
  nextLabel = "다음",
  submitLabel = "완료",
  progressLabel = (current, total) => `${current}/${total}단계`,
}: MultiStepFormProps) {
  const [index, setIndex] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const movedRef = useRef(false);
  const step = steps[index]!;
  const last = index === steps.length - 1;

  useEffect(() => {
    if (movedRef.current) headingRef.current?.focus();
  }, [index]);

  function go(next: number) {
    movedRef.current = true;
    setIndex(next);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step.validate && !step.validate()) return;
    if (last) onComplete();
    else go(index + 1);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <ol className="flex gap-1.5" aria-label={progressLabel(index + 1, steps.length)}>
        {steps.map((item, itemIndex) => (
          <li
            key={item.id}
            aria-current={itemIndex === index ? "step" : undefined}
            className={`h-1 flex-1 rounded-full ${itemIndex <= index ? "bg-blue-600" : "bg-slate-200"}`}
          >
            <span className="sr-only">{item.title}</span>
          </li>
        ))}
      </ol>
      <div>
        <p className="text-xs text-slate-500">{progressLabel(index + 1, steps.length)}</p>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="text-base font-semibold text-slate-900 focus:outline-none"
        >
          {step.title}
        </h3>
      </div>
      <div>{step.content}</div>
      <div className="flex justify-between gap-2">
        {index > 0 ? (
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {prevLabel}
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          {last ? submitLabel : nextLabel}
        </button>
      </div>
    </form>
  );
}
