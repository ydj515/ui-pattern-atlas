import type { ReactNode } from "react";

export interface LoadingOverlayProps {
  readonly loading: boolean;
  /** Says what is happening, e.g. "저장하는 중". */
  readonly label?: string;
  readonly children: ReactNode;
}

/**
 * Covers one region while it is busy, so nothing inside can be changed half-way.
 *
 * The content is `inert` (no clicks, no focus, hidden from assistive tech) and the
 * region is `aria-busy`. The label sits in a status region outside the inert part.
 * Block only the region that is saving, never the whole page.
 */
export function LoadingOverlay({ loading, label = "저장하는 중", children }: LoadingOverlayProps) {
  return (
    <div className="relative" aria-busy={loading}>
      <div inert={loading}>{children}</div>
      <div
        role="status"
        className={`absolute inset-0 grid place-items-center rounded-[inherit] bg-white/75 transition-opacity duration-200 motion-reduce:transition-none ${
          loading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
            <span
              aria-hidden="true"
              className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 motion-reduce:animate-none"
            />
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
