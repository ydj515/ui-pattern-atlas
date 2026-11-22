export interface SuccessCheckmarkProps {
  /** Spoken text, e.g. "보냈어요". */
  readonly label: string;
  readonly size?: number;
}

/**
 * Check mark that draws itself: the circle fills in, then the tick is drawn with a
 * stroke-dashoffset animation. Mount it when the action succeeds; reduced motion shows
 * the finished mark at once.
 */
export function SuccessCheckmark({ label, size = 56 }: SuccessCheckmarkProps) {
  return (
    <span role="img" aria-label={label} className="inline-grid">
      <style>
        {
          "@keyframes checkmark-circle { from { transform: scale(0.6); opacity: 0 } } @keyframes checkmark-tick { from { stroke-dashoffset: 24 } }"
        }
      </style>
      <svg viewBox="0 0 52 52" width={size} height={size} aria-hidden="true">
        <circle
          cx="26"
          cy="26"
          r="25"
          className="origin-center fill-emerald-500 [transform-box:fill-box] motion-safe:animate-[checkmark-circle_300ms_ease-out_both]"
        />
        <path
          d="M15 27l7 7 15-15"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="24"
          className="motion-safe:animate-[checkmark-tick_350ms_ease-out_250ms_both]"
        />
      </svg>
    </span>
  );
}
