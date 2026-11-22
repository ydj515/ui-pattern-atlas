import { useEffect, useId, useRef, type ReactNode } from "react";

export interface TourStopProps {
  /** True for the stop currently shown. */
  readonly active: boolean;
  readonly step: number;
  readonly total: number;
  readonly title: string;
  readonly body: string;
  readonly onNext: () => void;
  readonly onPrev: () => void;
  readonly onSkip: () => void;
  readonly children: ReactNode;
  readonly align?: "start" | "end";
  readonly labels?: {
    readonly prev: string;
    readonly next: string;
    readonly done: string;
    readonly skip: string;
  };
}

const DEFAULT_LABELS = { prev: "이전", next: "다음", done: "마치기", skip: "건너뛰기" };

/**
 * One stop of a guided tour: it spotlights its control and explains it, with the step
 * count, 이전 / 다음 and 건너뛰기. Wrap each control the tour visits; the parent keeps the
 * current step. Focus moves to the stop's buttons, and Escape skips the tour.
 */
export function TourStop({
  active,
  step,
  total,
  title,
  body,
  onNext,
  onPrev,
  onSkip,
  children,
  align = "start",
  labels = DEFAULT_LABELS,
}: TourStopProps) {
  const id = useId();
  const nextRef = useRef<HTMLButtonElement>(null);
  const last = step === total;

  useEffect(() => {
    if (active) nextRef.current?.focus();
  }, [active]);

  return (
    <span className="relative inline-flex">
      {children}
      {active ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-xl ring-2 ring-white shadow-[0_0_0_9999px_rgba(15,23,42,0.55)]"
          />
          <span
            role="dialog"
            aria-labelledby={id}
            onKeyDown={(event) => {
              if (event.key === "Escape") onSkip();
            }}
            className={`absolute top-full z-10 mt-3 w-56 rounded-xl bg-white p-3 text-left shadow-xl ${align === "end" ? "right-0" : "left-0"}`}
          >
            <span className="flex items-center justify-between text-xs text-slate-500">
              <span>
                {step} / {total}
              </span>
              <button type="button" onClick={onSkip} className="rounded px-1 hover:bg-slate-100">
                {labels.skip}
              </button>
            </span>
            <span id={id} className="mt-1 block text-sm font-semibold text-slate-900">
              {title}
            </span>
            <span className="mt-0.5 block text-xs text-slate-600">{body}</span>
            <span className="mt-3 flex justify-end gap-1">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={onPrev}
                  className="rounded-md border border-slate-200 px-2 py-1 text-xs"
                >
                  {labels.prev}
                </button>
              ) : null}
              <button
                ref={nextRef}
                type="button"
                onClick={onNext}
                className="rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
              >
                {last ? labels.done : labels.next}
              </button>
            </span>
          </span>
        </>
      ) : null}
    </span>
  );
}
