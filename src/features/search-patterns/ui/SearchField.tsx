import { useEffect, useRef } from "react";

import { isCommandK, isEditableTarget } from "@/shared/lib/keyboard";

const SLASH_KEY = "/";

export interface SearchFieldProps {
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

/** Search box for the catalog. Press "/" or ⌘K (Ctrl+K) anywhere on the page to focus it. */
export function SearchField({ value, onValueChange }: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

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
  }, []);

  return (
    <form role="search" onSubmit={(event) => event.preventDefault()} className="relative">
      <label htmlFor="pattern-search" className="sr-only">
        UI 패턴 검색
      </label>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-graphite"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z"
        />
      </svg>
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
        placeholder="이름이나 생김새로 찾아보세요"
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
          aria-label="검색어 지우기"
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
