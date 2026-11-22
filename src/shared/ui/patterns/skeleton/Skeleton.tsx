import type { ReactNode } from "react";

/** A single placeholder block. Size it with utility classes to match the real content. */
export function Skeleton({ className = "" }: { readonly className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-slate-200 motion-reduce:animate-none ${className}`}
    />
  );
}

export interface SkeletonRegionProps {
  readonly loading: boolean;
  /** Placeholder layout shown while loading. */
  readonly fallback: ReactNode;
  readonly children: ReactNode;
  /** Announced once to screen reader users while loading. */
  readonly loadingLabel?: string;
}

/**
 * Wraps content that is still loading. Marks the region busy, announces a
 * single status message and swaps the placeholders for content when ready.
 */
export function SkeletonRegion({
  loading,
  fallback,
  children,
  loadingLabel = "Loading…",
}: SkeletonRegionProps) {
  return (
    <div aria-busy={loading}>
      <span role="status" className="sr-only">
        {loading ? loadingLabel : ""}
      </span>
      {loading ? fallback : children}
    </div>
  );
}
