import { useRef } from "react";

export interface LikeButtonProps {
  readonly liked: boolean;
  readonly count: number;
  readonly onToggle: (liked: boolean) => void;
  readonly label?: string;
}

const HEART = "M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z";

/**
 * Heart toggle with its count. The count changes the moment it is pressed (update the
 * server in the background and roll back on failure); pressed state is aria-pressed,
 * and the heart pops once when turned on.
 */
export function LikeButton({ liked, count, onToggle, label = "좋아요" }: LikeButtonProps) {
  const iconRef = useRef<SVGSVGElement>(null);
  return (
    <button
      type="button"
      aria-pressed={liked}
      onClick={() => {
        if (!liked && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
          iconRef.current?.animate?.(
            [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
            { duration: 300, easing: "ease-out" },
          );
        }
        onToggle(!liked);
      }}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 aria-pressed:text-rose-600"
    >
      <svg
        ref={iconRef}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`size-5 ${liked ? "fill-rose-600" : "fill-none stroke-current stroke-2"}`}
      >
        <path d={HEART} />
      </svg>
      {label}
      <span className="tabular-nums">{count.toLocaleString("ko-KR")}</span>
    </button>
  );
}
