import { useState } from "react";

export interface ResponseFeedbackProps {
  readonly text: string;
  readonly onRate: (rating: "good" | "bad" | null) => void;
  readonly onRegenerate: () => void;
  readonly labels?: {
    readonly copy: string;
    readonly copied: string;
    readonly good: string;
    readonly bad: string;
    readonly regenerate: string;
  };
}

const DEFAULT_LABELS = {
  copy: "복사",
  copied: "복사했어요",
  good: "좋은 답변",
  bad: "아쉬운 답변",
  regenerate: "다시 생성",
};

function Icon({ d, filled = false }: { readonly d: string; readonly filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-4 stroke-current stroke-2 ${filled ? "fill-current" : "fill-none"}`}
    >
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Icon row under an answer: copy, good, bad and regenerate. Good and bad are
 * mutually exclusive toggles that can be undone; every icon button has a name and a
 * tooltip-like title.
 */
export function ResponseFeedback({
  text,
  onRate,
  onRegenerate,
  labels = DEFAULT_LABELS,
}: ResponseFeedbackProps) {
  const [rating, setRating] = useState<"good" | "bad" | null>(null);
  const [copied, setCopied] = useState(false);
  const button =
    "grid size-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 aria-pressed:text-slate-900";

  function rate(next: "good" | "bad") {
    const value = rating === next ? null : next;
    setRating(value);
    onRate(value);
  }

  return (
    <div role="group" aria-label="답변 도구" className="flex items-center gap-0.5">
      <button
        type="button"
        aria-label={copied ? labels.copied : labels.copy}
        title={labels.copy}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
          } catch {
            setCopied(false);
          }
        }}
        className={button}
      >
        <Icon d={copied ? "M5 12l5 5 9-10" : "M9 9h10v10H9zM5 15V5h10"} />
      </button>
      <button
        type="button"
        aria-pressed={rating === "good"}
        aria-label={labels.good}
        title={labels.good}
        onClick={() => rate("good")}
        className={button}
      >
        <Icon
          d="M7 11v9H4v-9h3Zm0 0 4-8c1.5 0 2.5 1 2.5 2.5V9h5a2 2 0 0 1 2 2.3l-1.2 6.5A2.5 2.5 0 0 1 16.8 20H7"
          filled={rating === "good"}
        />
      </button>
      <button
        type="button"
        aria-pressed={rating === "bad"}
        aria-label={labels.bad}
        title={labels.bad}
        onClick={() => rate("bad")}
        className={`${button} rotate-180`}
      >
        <Icon
          d="M7 11v9H4v-9h3Zm0 0 4-8c1.5 0 2.5 1 2.5 2.5V9h5a2 2 0 0 1 2 2.3l-1.2 6.5A2.5 2.5 0 0 1 16.8 20H7"
          filled={rating === "bad"}
        />
      </button>
      <button
        type="button"
        aria-label={labels.regenerate}
        title={labels.regenerate}
        onClick={onRegenerate}
        className={button}
      >
        <Icon d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" />
      </button>
      <span role="status" className="sr-only">
        {copied ? labels.copied : ""}
      </span>
    </div>
  );
}
