import { useEffect, useState, type RefObject } from "react";

import { useMessages } from "@/shared/i18n/messages";
import { isCommandK, isEditableTarget } from "@/shared/lib/keyboard";

import { Button } from "@/shared/ui/primitives/Button";

const SLASH_KEY = "/";

export interface SearchFieldProps {
  readonly inputRef: RefObject<HTMLInputElement | null>;
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

/** Search box for the catalog. Press "/" or ⌘K (Ctrl+K) anywhere on the page to focus it. */
export function SearchField({ inputRef, value, onValueChange }: SearchFieldProps) {
  const messages = useMessages();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isSlash = event.key === SLASH_KEY && !event.metaKey && !event.ctrlKey && !event.altKey;
      if (isCommandK(event) || (isSlash && !isEditableTarget(event.target))) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputRef]);

  return (
    <form role="search" onSubmit={(event) => event.preventDefault()} className="relative">
      <label htmlFor="pattern-search" className="sr-only">
        {messages.search.label}
      </label>
      <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-graphite" />
      <input
        ref={inputRef}
        id="pattern-search"
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape" && value) {
            event.preventDefault();
            onValueChange("");
          }
        }}
        placeholder={messages.search.placeholder}
        autoComplete="off"
        spellCheck={false}
        className="h-14 w-full rounded-input border border-rule-strong bg-paper pr-14 pl-12 text-lead text-ink placeholder:text-subtle focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            onValueChange("");
            inputRef.current?.focus();
          }}
          aria-label={messages.search.clear}
          className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full text-graphite hover:bg-field hover:text-ink"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
            <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z" />
          </svg>
        </button>
      ) : (
        <kbd
          aria-hidden="true"
          className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-tag border border-rule px-1.5 text-micro text-graphite sm:block"
        >
          /
        </kbd>
      )}
    </form>
  );
}

function SearchIcon({ className }: { readonly className: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z"
      />
    </svg>
  );
}

/** Gives the sticky catalog bar a direct route to the input after it scrolls above the viewport. */
export function SearchJumpButton({ inputRef }: Pick<SearchFieldProps, "inputRef">) {
  const messages = useMessages();
  const [aboveViewport, setAboveViewport] = useState(false);

  useEffect(() => {
    const input = inputRef.current;
    if (!input || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setAboveViewport(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(input);
    return () => observer.disconnect();
  }, [inputRef]);

  if (!aboveViewport) return null;
  return (
    <Button
      variant="icon"
      className="min-h-11 min-w-11 shrink-0 border border-rule"
      aria-label={messages.search.label}
      title={messages.search.label}
      onClick={() => {
        inputRef.current?.focus({ preventScroll: true });
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
    >
      <SearchIcon className="size-5" />
    </Button>
  );
}
