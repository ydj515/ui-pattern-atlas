import type { ReactNode } from "react";

const toneStyles = {
  info: {
    container: "border-sky-200 bg-sky-50 text-sky-950",
    icon: "text-sky-600",
    path: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM9 10a1 1 0 0 1 2 0v3.5a1 1 0 1 1-2 0V10Z",
  },
  success: {
    container: "border-emerald-200 bg-emerald-50 text-emerald-950",
    icon: "text-emerald-600",
    path: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.7 6.2-4.2 4.5a1 1 0 0 1-1.5 0l-1.7-1.8a1 1 0 1 1 1.4-1.4l1 1 3.5-3.7a1 1 0 1 1 1.5 1.4Z",
  },
  warning: {
    container: "border-amber-200 bg-amber-50 text-amber-950",
    icon: "text-amber-600",
    path: "M8.3 3a2 2 0 0 1 3.4 0l6 10.4A2 2 0 0 1 16 16.5H4a2 2 0 0 1-1.7-3.1L8.3 3ZM10 7a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm0 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  },
  error: {
    container: "border-rose-200 bg-rose-50 text-rose-950",
    icon: "text-rose-600",
    path: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
} as const;

export type AlertBannerTone = keyof typeof toneStyles;

export interface AlertBannerProps {
  readonly tone?: AlertBannerTone;
  readonly title: string;
  readonly children?: ReactNode;
  /** Optional call to action, e.g. a link or button. */
  readonly action?: ReactNode;
  /** Renders a dismiss button when provided. */
  readonly onDismiss?: () => void;
  readonly dismissLabel?: string;
}

/**
 * Persistent, page-level message that stays until the user acts on it or dismisses it.
 * Errors use `role="alert"` so they are announced immediately when inserted.
 */
export function AlertBanner({
  tone = "info",
  title,
  children,
  action,
  onDismiss,
  dismissLabel = "Dismiss",
}: AlertBannerProps) {
  const styles = toneStyles[tone];

  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${styles.container}`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={`mt-0.5 size-5 shrink-0 ${styles.icon}`}
      >
        <path fillRule="evenodd" clipRule="evenodd" d={styles.path} />
      </svg>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        {children ? <div className="mt-1 leading-6 opacity-90">{children}</div> : null}
        {action ? <div className="mt-3">{action}</div> : null}
      </div>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label={dismissLabel}
          className="-m-1 grid size-8 shrink-0 place-items-center rounded-full opacity-70 hover:bg-black/5 hover:opacity-100"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
            <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
