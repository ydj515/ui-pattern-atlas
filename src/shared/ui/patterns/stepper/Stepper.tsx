export interface StepperProps {
  readonly steps: readonly string[];
  /** Index of the current step. */
  readonly current: number;
  readonly label?: string;
  readonly doneLabel?: string;
}

/**
 * Shows where the user is in a fixed sequence (cart → shipping → payment → done).
 * An ordered list: finished steps get a check mark and "(완료)" for screen readers, the
 * current one has aria-current="step". It only shows progress; it is not navigation.
 */
export function Stepper({ steps, current, label = "진행 단계", doneLabel = "완료" }: StepperProps) {
  return (
    <ol aria-label={label} className="flex w-full items-start">
      {steps.map((step, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <li
            key={step}
            aria-current={active ? "step" : undefined}
            className="relative flex flex-1 flex-col items-center gap-1.5 text-center text-xs"
          >
            {index > 0 ? (
              <span
                aria-hidden="true"
                className={`absolute top-3.5 right-1/2 left-[-50%] h-0.5 ${index <= current ? "bg-blue-600" : "bg-slate-200"}`}
              />
            ) : null}
            <span
              aria-hidden="true"
              className={`relative grid size-7 place-items-center rounded-full border-2 text-xs font-semibold ${
                done
                  ? "border-blue-600 bg-blue-600 text-white"
                  : active
                    ? "border-blue-600 bg-white text-blue-700"
                    : "border-slate-300 bg-white text-slate-400"
              }`}
            >
              {done ? "✓" : index + 1}
            </span>
            <span
              className={
                active ? "font-semibold text-slate-900" : done ? "text-slate-700" : "text-slate-400"
              }
            >
              {step}
              {done ? <span className="sr-only"> ({doneLabel})</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
