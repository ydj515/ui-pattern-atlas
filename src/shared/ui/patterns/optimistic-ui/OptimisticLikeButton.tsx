import { useOptimistic, useState, useTransition } from "react";

export interface OptimisticLikeButtonProps {
  /** Confirmed state from the server. */
  readonly liked: boolean;
  readonly count: number;
  /** Saves the new state. Resolve to confirm it; reject to roll the button back. */
  readonly onChange: (liked: boolean) => Promise<void>;
  readonly label?: string;
  readonly errorText?: string;
}

/**
 * Like button that shows the result before the server answers.
 *
 * `useOptimistic` shows the new state during the request. When the request fails the
 * optimistic state is dropped, the button returns to the confirmed state and a short
 * message says so. Use this only for actions that almost always succeed and are cheap
 * to undo.
 */
export function OptimisticLikeButton({
  liked,
  count,
  onChange,
  label = "좋아요",
  errorText = "좋아요를 반영하지 못했어요",
}: OptimisticLikeButtonProps) {
  const [optimistic, setOptimistic] = useOptimistic({ liked, count });
  const [, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);

  function toggle() {
    const next = !optimistic.liked;
    setFailed(false);
    startTransition(async () => {
      setOptimistic({ liked: next, count: optimistic.count + (next ? 1 : -1) });
      try {
        await onChange(next);
      } catch {
        setFailed(true);
      }
    });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-pressed={optimistic.liked}
        onClick={toggle}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 aria-pressed:border-rose-200 aria-pressed:bg-rose-50 aria-pressed:text-rose-600"
      >
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="size-4"
          fill={optimistic.liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M10 17s-6.5-3.9-6.5-8.6A3.6 3.6 0 0 1 10 6.1a3.6 3.6 0 0 1 6.5 2.3C16.5 13.1 10 17 10 17Z" />
        </svg>
        {label} <span className="tabular-nums">{optimistic.count}</span>
      </button>
      <p role="status" className="text-xs text-rose-600">
        {failed ? errorText : ""}
      </p>
    </div>
  );
}
