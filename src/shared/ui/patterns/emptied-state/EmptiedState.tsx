import { useEffect, useRef } from "react";

export interface EmptiedStateProps {
  /** What is now empty, e.g. "장바구니가 비었어요". */
  readonly title: string;
  /** Name what was just removed, so the screen is clearly the result of that action. */
  readonly description: string;
  readonly onUndo: () => void;
  readonly undoLabel?: string;
  /** Next step, e.g. a link to keep shopping. */
  readonly nextAction: { readonly label: string; readonly href: string };
}

/**
 * Empty state right after the last item was removed. Unlike a first-run empty state it
 * names what was removed, offers to take it back, and points to the next step.
 * Focus moves to the heading because the list (and the focused button) is gone.
 */
export function EmptiedState({
  title,
  description,
  onUndo,
  undoLabel = "되돌리기",
  nextAction,
}: EmptiedStateProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-center">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-sm font-semibold text-slate-900 focus:outline-none"
      >
        {title}
      </h2>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
      <div className="mt-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={onUndo}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          {undoLabel}
        </button>
        <a
          href={nextAction.href}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
        >
          {nextAction.label}
        </a>
      </div>
    </div>
  );
}
