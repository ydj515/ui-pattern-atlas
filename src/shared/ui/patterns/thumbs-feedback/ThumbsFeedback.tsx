import { useId, useState } from "react";

export interface ThumbsFeedbackProps {
  readonly question: string;
  readonly yesLabel?: string;
  readonly noLabel?: string;
  readonly thanks?: string;
  readonly sendLabel?: string;
  /** Reasons offered after a "no". */
  readonly reasons: readonly string[];
  readonly onSubmit: (result: { helpful: boolean; reasons: readonly string[] }) => void;
}

function Thumb({ down = false }: { readonly down?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-4 fill-none stroke-current stroke-2 ${down ? "rotate-180" : ""}`}
    >
      <path
        d="M7 11v9H4v-9h3Zm0 0 4-8c1.5 0 2.5 1 2.5 2.5V9h5a2 2 0 0 1 2 2.3l-1.2 6.5A2.5 2.5 0 0 1 16.8 20H7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * "Was this helpful?" with yes and no. Yes thanks people right away; no asks one
 * optional follow-up with reason chips, so most people answer in one tap.
 */
export function ThumbsFeedback({
  question,
  yesLabel = "네",
  noLabel = "아니요",
  thanks = "의견 고마워요",
  sendLabel = "보내기",
  reasons,
  onSubmit,
}: ThumbsFeedbackProps) {
  const id = useId();
  const [step, setStep] = useState<"ask" | "why" | "done">("ask");
  const [picked, setPicked] = useState<readonly string[]>([]);
  const button =
    "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50";

  return (
    <section aria-labelledby={id} className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 id={id} className="text-sm font-semibold text-slate-900">
        {question}
      </h3>
      {step === "ask" ? (
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            className={button}
            onClick={() => {
              setStep("done");
              onSubmit({ helpful: true, reasons: [] });
            }}
          >
            <Thumb />
            {yesLabel}
          </button>
          <button type="button" className={button} onClick={() => setStep("why")}>
            <Thumb down />
            {noLabel}
          </button>
        </div>
      ) : null}
      {step === "why" ? (
        <div className="mt-3 grid gap-3">
          <div role="group" aria-label="이유" className="flex flex-wrap gap-1.5">
            {reasons.map((reason) => (
              <button
                key={reason}
                type="button"
                aria-pressed={picked.includes(reason)}
                onClick={() =>
                  setPicked((current) =>
                    current.includes(reason)
                      ? current.filter((item) => item !== reason)
                      : [...current, reason],
                  )
                }
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
              >
                {reason}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setStep("done");
              onSubmit({ helpful: false, reasons: picked });
            }}
            className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            {sendLabel}
          </button>
        </div>
      ) : null}
      <p role="status" className="mt-2 text-sm text-emerald-700">
        {step === "done" ? thanks : ""}
      </p>
    </section>
  );
}
