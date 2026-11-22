import { useEffect, useRef } from "react";

export interface SearchFieldProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  /** Accessible name and placeholder, e.g. "문서 검색". */
  readonly label: string;
  /** Single key that focuses the field from anywhere on the page. */
  readonly shortcut?: string;
  readonly clearLabel?: string;
}

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

/**
 * Search input with a clear button and a focus shortcut ("/" by default).
 *
 * The shortcut is ignored while the user types in another field. Escape clears the
 * text; the clear button returns focus to the input so typing can continue.
 */
export function SearchField({
  value,
  onChange,
  label,
  shortcut = "/",
  clearLabel = "검색어 지우기",
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== shortcut || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;
      event.preventDefault();
      inputRef.current?.focus();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcut]);

  return (
    <div role="search" className="relative">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
      >
        <circle cx="9" cy="9" r="5.5" />
        <path d="m13.5 13.5 3.5 3.5" strokeLinecap="round" />
      </svg>
      <input
        ref={inputRef}
        type="search"
        aria-label={label}
        aria-keyshortcuts={shortcut}
        placeholder={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape" && value) {
            event.preventDefault();
            onChange("");
          }
        }}
        className="block w-full rounded-lg border border-slate-300 bg-white py-2 pr-10 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value ? (
        <button
          type="button"
          aria-label={clearLabel}
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="absolute top-1/2 right-2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <span aria-hidden="true">×</span>
        </button>
      ) : (
        <kbd
          aria-hidden="true"
          className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded border border-slate-300 px-1.5 font-sans text-xs text-slate-500"
        >
          {shortcut}
        </kbd>
      )}
    </div>
  );
}
