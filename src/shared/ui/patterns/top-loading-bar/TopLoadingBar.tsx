import { useEffect, useState } from "react";

export interface TopLoadingBarProps {
  readonly loading: boolean;
  /** Read by screen readers while the bar is shown. */
  readonly label?: string;
  /** Wait this long before showing anything, so fast navigations do not flash. */
  readonly delayMs?: number;
  readonly className?: string;
}

/**
 * Thin bar along the top edge while a page or view loads. It creeps toward 90% while
 * waiting (the real duration is unknown), jumps to 100% when loading ends and fades out.
 * Position it yourself (fixed top-0 for a page, absolute inside a container).
 */
export function TopLoadingBar({
  loading,
  label = "페이지 불러오는 중",
  delayMs = 150,
  className = "",
}: TopLoadingBarProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // While loading: show after the delay, then creep toward 90%.
  useEffect(() => {
    if (!loading) return undefined;
    let trickle = 0;
    const show = window.setTimeout(() => {
      setVisible(true);
      setProgress(0.1);
      trickle = window.setInterval(() => setProgress((value) => value + (0.9 - value) * 0.15), 200);
    }, delayMs);
    return () => {
      window.clearTimeout(show);
      window.clearInterval(trickle);
    };
  }, [loading, delayMs]);

  // When loading ends while shown: fill up, then fade out.
  useEffect(() => {
    if (loading || !visible) return undefined;
    const finish = window.setTimeout(() => setProgress(1), 0);
    const hide = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 350);
    return () => {
      window.clearTimeout(finish);
      window.clearTimeout(hide);
    };
  }, [loading, visible]);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-hidden={!visible}
      className={`pointer-events-none h-0.5 overflow-hidden transition-opacity duration-300 ${visible && progress < 1 ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <div
        className="h-full origin-left bg-blue-600 transition-transform duration-200 ease-out motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
