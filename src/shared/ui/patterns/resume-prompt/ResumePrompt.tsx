export interface ResumePromptProps {
  /** What the person was doing, e.g. the course or document name. */
  readonly title: string;
  /** Where they stopped, e.g. "3강 12:40". */
  readonly position: string;
  /** How far through it, 0 to 1. */
  readonly progress: number;
  readonly onResume: () => void;
  readonly onRestart: () => void;
  readonly onDismiss: () => void;
  readonly labels?: {
    readonly heading: string;
    readonly stopped: (position: string) => string;
    readonly resume: string;
    readonly restart: string;
    readonly dismiss: string;
  };
}

const DEFAULT_LABELS = {
  heading: "다시 오셨네요",
  stopped: (position: string) => `${position}에서 멈췄어요`,
  resume: "이어서 보기",
  restart: "처음부터",
  dismiss: "닫기",
};

/**
 * Greets a returning person with exactly where they stopped and one button to go on,
 * without making them find their place again.
 */
export function ResumePrompt({
  title,
  position,
  progress,
  onResume,
  onRestart,
  onDismiss,
  labels = DEFAULT_LABELS,
}: ResumePromptProps) {
  const percent = Math.round(Math.min(1, Math.max(0, progress)) * 100);
  return (
    <section
      aria-label={labels.heading}
      className="relative grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm"
    >
      <button
        type="button"
        aria-label={labels.dismiss}
        onClick={onDismiss}
        className="absolute top-2 right-2 grid size-7 place-items-center rounded-full text-slate-400"
      >
        ×
      </button>
      <p className="text-xs text-slate-500">{labels.heading}</p>
      <h3 className="pr-6 font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{labels.stopped(position)}</p>
      <progress
        value={percent}
        max={100}
        aria-label={`${title} ${percent}%`}
        className="h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-slate-900 [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-slate-900"
      />
      <div className="mt-1 flex gap-2">
        <button
          type="button"
          onClick={onResume}
          className="flex-1 rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
        >
          {labels.resume}
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700"
        >
          {labels.restart}
        </button>
      </div>
    </section>
  );
}
