import type { ReactNode } from "react";

/**
 * "Mini screen" every catalog thumbnail draws into.
 *
 * Thumbnails lay out a 176×112 px stage, and the stage is displayed at 1.25× (220×140) so
 * the real copy stays legible. The looping keyframes in `thumbnail-motion.css` use the same
 * unscaled px coordinates, so keep element positions and cursor targets in sync.
 */
export function ThumbStage({ children }: { readonly children: ReactNode }) {
  return (
    <div className="h-[140px] w-[220px]">
      <div className="relative h-[112px] w-[176px] origin-top-left scale-125 overflow-hidden rounded-lg border border-slate-200 bg-white text-[8px] leading-[1.4] text-slate-900">
        {children}
      </div>
    </div>
  );
}

/**
 * Pointer that replays the interaction. `motion` names its keyframe class;
 * the arrow tip sits on the animated translate point. Hidden when motion is off.
 */
export function ThumbCursor({ motion }: { readonly motion: string }) {
  return (
    <span className={`thumb-anim thumb-cursor ${motion}`}>
      <svg viewBox="0 0 16 16" className="size-3">
        <path
          d="M1 1l5.2 13.2 1.9-5.3 5.3-1.9L1 1Z"
          fill="#1d1f23"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
