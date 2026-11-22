export type ProgressToastStatus = "running" | "done" | "error";

export interface ProgressToastProps {
  /** What is in progress, e.g. "회의록.pdf 올리는 중". */
  readonly title: string;
  /** 0–100. */
  readonly progress: number;
  readonly status: ProgressToastStatus;
  /** Short result line shown when done or failed, e.g. "올리기 완료". */
  readonly resultText?: string;
  readonly onCancel?: () => void;
  readonly cancelLabel?: string;
}

const barColor: Record<ProgressToastStatus, string> = {
  running: "bg-blue-500",
  done: "bg-emerald-500",
  error: "bg-rose-500",
};

/**
 * Toast that stays while a long task (upload, export) runs, shows its progress and can
 * cancel it. Position it yourself (e.g. fixed bottom right). The text lives in a polite
 * status region; the bar is a progressbar with the current value.
 */
export function ProgressToast({
  title,
  progress,
  status,
  resultText,
  onCancel,
  cancelLabel = "취소",
}: ProgressToastProps) {
  const value = Math.round(Math.min(100, Math.max(0, progress)));

  return (
    <div className="w-72 rounded-xl bg-slate-900 p-4 text-sm text-white shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <p role="status" className="flex-1">
          {status === "running" ? `${title} ${value}%` : resultText}
        </p>
        {status === "running" && onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="shrink-0 rounded-md px-2 py-1 font-semibold text-slate-300 hover:bg-white/10 hover:text-white"
          >
            {cancelLabel}
          </button>
        ) : null}
      </div>
      <div
        role="progressbar"
        aria-label={title}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15"
      >
        <div
          className={`h-full origin-left rounded-full transition-transform duration-300 motion-reduce:transition-none ${barColor[status]}`}
          style={{ transform: `scaleX(${value / 100})` }}
        />
      </div>
    </div>
  );
}
