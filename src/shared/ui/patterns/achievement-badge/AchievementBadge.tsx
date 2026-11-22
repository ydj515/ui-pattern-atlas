import type { ReactNode } from "react";

export interface AchievementBadgeProps {
  readonly title: string;
  readonly icon: ReactNode;
  readonly progress: number;
  readonly goal: number;
  /** e.g. "11월 3일 획득". */
  readonly earnedOn?: string;
  readonly lockedLabel?: string;
}

/**
 * Badge that shows how close a locked goal is (progress / goal) and turns colored when
 * earned, with the date. Locked badges stay readable and say what is left, instead of
 * hiding the goal.
 */
export function AchievementBadge({
  title,
  icon,
  progress,
  goal,
  earnedOn,
  lockedLabel = "잠김",
}: AchievementBadgeProps) {
  const earned = progress >= goal;
  return (
    <figure className="grid justify-items-center gap-1.5 text-center">
      <span
        aria-hidden="true"
        className={`relative grid size-14 place-items-center rounded-full text-2xl ${earned ? "bg-amber-300 text-amber-900 shadow-inner" : "bg-slate-100 text-slate-400"}`}
      >
        {icon}
        {earned ? null : (
          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-slate-200"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              pathLength={100}
              strokeDasharray={`${(progress / goal) * 100} 100`}
              className="text-amber-400"
            />
          </svg>
        )}
      </span>
      <figcaption className="text-xs">
        <span className={`block font-semibold ${earned ? "text-slate-900" : "text-slate-500"}`}>
          {title}
        </span>
        <span className="block text-slate-500 tabular-nums">
          {earned ? earnedOn : `${progress}/${goal}`}
          {earned ? null : <span className="sr-only"> {lockedLabel}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
