import type { ReactNode } from "react";

export interface PermissionRecoveryProps {
  readonly title: string;
  readonly body: string;
  /** "retry" when the app may ask again; "settings" once the system will not ask. */
  readonly mode: "retry" | "settings";
  readonly retryLabel?: string;
  readonly settingsLabel?: string;
  readonly onRetry: () => void;
  readonly onOpenSettings: () => void;
  /** The way to go on without the permission. */
  readonly fallback: ReactNode;
}

/**
 * What to show after a permission was refused: what does not work now, one way to turn
 * it on (ask again if the system still allows it, otherwise open settings), and a way to
 * carry on without it.
 */
export function PermissionRecovery({
  title,
  body,
  mode,
  retryLabel = "다시 허용하기",
  settingsLabel = "설정 열기",
  onRetry,
  onOpenSettings,
  fallback,
}: PermissionRecoveryProps) {
  return (
    <section role="status" className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-xs text-slate-700">{body}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={mode === "retry" ? onRetry : onOpenSettings}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
        >
          {mode === "retry" ? retryLabel : settingsLabel}
        </button>
        {fallback}
      </div>
    </section>
  );
}
