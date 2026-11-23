export type AutosaveStatus = "idle" | "saving" | "saved" | "offline";

export interface AutosaveIndicatorProps {
  readonly status: AutosaveStatus;
  readonly labels?: {
    readonly idle: string;
    readonly saving: string;
    readonly saved: string;
    readonly offline: string;
  };
}

const DEFAULT_LABELS = {
  idle: "",
  saving: "저장 중…",
  saved: "방금 저장됨",
  offline: "연결이 끊겨 이 기기에만 저장했어요",
};

const DOT: Record<AutosaveStatus, string> = {
  idle: "bg-transparent",
  saving: "bg-amber-400 animate-pulse motion-reduce:animate-none",
  saved: "bg-emerald-500",
  offline: "bg-slate-400",
};

/**
 * One quiet line next to an editor that says whether the latest change is saved, so no
 * save button is needed and nobody wonders if leaving is safe.
 */
export function AutosaveIndicator({ status, labels = DEFAULT_LABELS }: AutosaveIndicatorProps) {
  return (
    <p role="status" className="flex min-h-5 items-center gap-1.5 text-xs text-slate-500">
      <span aria-hidden="true" className={`size-1.5 rounded-full ${DOT[status]}`} />
      {labels[status]}
    </p>
  );
}
