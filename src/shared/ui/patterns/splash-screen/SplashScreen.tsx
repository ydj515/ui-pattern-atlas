import { useEffect, useState, type ReactNode } from "react";

export interface SplashScreenProps {
  /** True once the app finished loading. */
  readonly ready: boolean;
  readonly logo: ReactNode;
  readonly label: string;
  readonly children: ReactNode;
  /** Shortest time on screen, so it does not flash by. */
  readonly minMs?: number;
}

/**
 * Brand screen shown while the app starts. It stays at least `minMs` so it does not
 * flicker, then fades into the app as soon as loading is done; it never waits longer
 * than the loading itself. Screen readers hear a busy state.
 */
export function SplashScreen({ ready, logo, label, children, minMs = 600 }: SplashScreenProps) {
  const [minPassed, setMinPassed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMinPassed(true), minMs);
    return () => window.clearTimeout(timer);
  }, [minMs]);

  const showApp = ready && minPassed;
  return (
    <div aria-busy={!showApp} className="relative h-full">
      {showApp ? (
        <div className="h-full transition-opacity duration-300 motion-reduce:transition-none starting:opacity-0">
          {children}
        </div>
      ) : (
        <div role="status" className="grid h-full place-items-center bg-slate-900 text-white">
          <div className="grid justify-items-center gap-4">
            <div aria-hidden="true">{logo}</div>
            <span className="sr-only">{label}</span>
            <span
              aria-hidden="true"
              className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white motion-reduce:animate-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
