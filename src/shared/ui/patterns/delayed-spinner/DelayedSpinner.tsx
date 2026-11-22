import { useEffect, useRef, useState, type ReactNode } from "react";

export interface DelayedLoadingOptions {
  /** Waits this long before showing anything; fast answers never flash a spinner. */
  readonly delayMs?: number;
  /** Once shown, keeps the spinner at least this long so it does not blink. */
  readonly minDurationMs?: number;
}

/**
 * Turns a raw `loading` flag into "should the spinner be visible right now".
 * While it returns true, keep showing the spinner instead of the new content.
 */
export function useDelayedLoading(
  loading: boolean,
  { delayMs = 400, minDurationMs = 600 }: DelayedLoadingOptions = {},
) {
  const [visible, setVisible] = useState(false);
  const shownAtRef = useRef(0);

  useEffect(() => {
    if (loading && !visible) {
      const timer = window.setTimeout(() => {
        shownAtRef.current = Date.now();
        setVisible(true);
      }, delayMs);
      return () => window.clearTimeout(timer);
    }
    if (!loading && visible) {
      const left = minDurationMs - (Date.now() - shownAtRef.current);
      const timer = window.setTimeout(() => setVisible(false), Math.max(0, left));
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [loading, visible, delayMs, minDurationMs]);

  return visible;
}

export interface DelayedSpinnerProps extends DelayedLoadingOptions {
  readonly loading: boolean;
  readonly label?: string;
  /** The loaded content. Hidden while loading and while the spinner finishes its minimum time. */
  readonly children: ReactNode;
}

/**
 * Shows a spinner only when the wait is long enough to notice, then the content.
 * During the short delay nothing is shown, which reads as "instant" for fast answers.
 */
export function DelayedSpinner({
  loading,
  label = "불러오는 중",
  children,
  ...options
}: DelayedSpinnerProps) {
  const spinnerVisible = useDelayedLoading(loading, options);

  if (spinnerVisible) {
    return (
      <span role="status" className="inline-flex items-center gap-2 text-sm text-slate-600">
        <span
          aria-hidden="true"
          className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 motion-reduce:animate-none"
        />
        {label}
      </span>
    );
  }
  return loading ? null : children;
}
