import type { ReactNode } from "react";

export interface LockedContentProps {
  /** The free part that everyone can read. Do not send the locked part to the client. */
  readonly preview: ReactNode;
  readonly title?: string;
  readonly description: string;
  readonly actionLabel: string;
  readonly onUnlock: () => void;
}

/**
 * Shows the free beginning of a piece, fades it out, and explains what unlocks the rest.
 * The rest is not rendered at all (a blur over real text would still be readable by
 * screen readers and in the page source).
 */
export function LockedContent({
  preview,
  title = "멤버십 회원만 볼 수 있어요",
  description,
  actionLabel,
  onUnlock,
}: LockedContentProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative max-h-28 overflow-hidden px-5 pt-4 text-sm leading-6 text-slate-700">
        {preview}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-white/0 to-white"
        />
      </div>
      <div className="border-t border-slate-100 px-5 py-4 text-center">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
        <button
          type="button"
          onClick={onUnlock}
          className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
