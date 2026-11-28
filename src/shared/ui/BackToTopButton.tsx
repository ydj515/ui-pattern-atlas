import { useSyncExternalStore, type RefObject } from "react";

import { useMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/primitives/Button";

function observeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function hasScrolledPastFirstScreen() {
  return window.scrollY >= window.innerHeight;
}

export function BackToTopButton({
  headingRef,
}: {
  readonly headingRef: RefObject<HTMLHeadingElement | null>;
}) {
  const messages = useMessages();
  const visible = useSyncExternalStore(observeScroll, hasScrolledPastFirstScreen, () => false);
  if (!visible) return null;

  return (
    <Button
      variant="icon"
      aria-label={messages.nav.backToTop}
      className="fixed right-[calc(1rem_+_env(safe-area-inset-right))] bottom-[calc(1rem_+_env(safe-area-inset-bottom))] z-20 min-h-12 min-w-12 rounded-full! border border-rule-strong bg-paper text-ink shadow-overlay active:bg-field-hover motion-safe:transition-colors sm:right-6 sm:bottom-6"
      onClick={() => {
        headingRef.current?.focus({ preventScroll: true });
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
        <path d="M9.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L11 7.4V16a1 1 0 1 1-2 0V7.4l-3.3 3.3a1 1 0 0 1-1.4-1.4l5-5Z" />
      </svg>
    </Button>
  );
}
