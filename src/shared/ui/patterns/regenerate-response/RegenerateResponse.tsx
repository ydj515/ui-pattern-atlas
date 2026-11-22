import type { ReactNode } from "react";

export interface RegenerateResponseProps {
  /** All answers to the same question, oldest first. */
  readonly versions: readonly ReactNode[];
  readonly current: number;
  readonly onCurrentChange: (index: number) => void;
  readonly onRegenerate: () => void;
  readonly generating: boolean;
  readonly labels?: {
    readonly previous: string;
    readonly next: string;
    readonly regenerate: string;
    readonly generating: string;
    readonly position: (index: number, total: number) => string;
  };
}

const DEFAULT_LABELS = {
  previous: "이전 답변",
  next: "다음 답변",
  regenerate: "다시 생성",
  generating: "새 답변을 만드는 중",
  position: (index: number, total: number) => `${index} / ${total}`,
};

/**
 * Answer with its earlier versions kept: 다시 생성 adds a new answer to the same
 * question, and ‹ 2 / 2 › moves between them so a good earlier answer is never lost.
 */
export function RegenerateResponse({
  versions,
  current,
  onCurrentChange,
  onRegenerate,
  generating,
  labels = DEFAULT_LABELS,
}: RegenerateResponseProps) {
  const total = versions.length;
  return (
    <div className="grid gap-2">
      <div
        aria-live="polite"
        className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-slate-900 shadow-sm"
      >
        {generating ? (
          <span className="text-slate-500">{labels.generating}</span>
        ) : (
          versions[current]
        )}
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-600">
        <button
          type="button"
          aria-label={labels.previous}
          disabled={current === 0 || generating}
          onClick={() => onCurrentChange(current - 1)}
          className="grid size-7 place-items-center rounded-md hover:bg-slate-100 disabled:opacity-30"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <span className="tabular-nums">{labels.position(current + 1, total)}</span>
        <button
          type="button"
          aria-label={labels.next}
          disabled={current === total - 1 || generating}
          onClick={() => onCurrentChange(current + 1)}
          className="grid size-7 place-items-center rounded-md hover:bg-slate-100 disabled:opacity-30"
        >
          <span aria-hidden="true">›</span>
        </button>
        <button
          type="button"
          disabled={generating}
          onClick={onRegenerate}
          className="ml-2 rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50 disabled:opacity-50"
        >
          {labels.regenerate}
        </button>
      </div>
    </div>
  );
}
