import { useCallback, useSyncExternalStore } from "react";

function observeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/**
 * Id of the section the reader is in: the last of `ids` whose element has scrolled up to the
 * line `readLine()` px below the top of the viewport (the bottom of any sticky bar above the
 * content), or the first id before any has. Ids without an element on the page are skipped.
 * Pass a stable `readLine` (e.g. from `useCallback`).
 */
export function useCurrentSection(ids: readonly string[], readLine: () => number): string | null {
  const key = ids.join("\n");
  const getSnapshot = useCallback(() => {
    const line = readLine() + 1;
    let current: string | null = null;
    for (const id of key ? key.split("\n") : []) {
      const element = document.getElementById(id);
      if (!element) continue;
      if (current === null || element.getBoundingClientRect().top <= line) current = id;
      else break;
    }
    return current;
  }, [key, readLine]);
  return useSyncExternalStore(observeScroll, getSnapshot, () => null);
}

/** Scrolls a section into view, honouring reduced motion, and moves focus to its heading. */
export function goToSection(sectionId: string, headingId: string) {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? true;
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
  document.getElementById(headingId)?.focus({ preventScroll: true });
}
