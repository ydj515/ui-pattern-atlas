import { useEffect, useId, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { PATTERNS } from "@/entities/pattern/catalog";
import { getCategory } from "@/entities/pattern/model/category";
import type { Pattern } from "@/entities/pattern/model/pattern";
import { commandKLabel, isCommandK } from "@/shared/lib/keyboard";
import { Highlight } from "@/shared/ui/Highlight";

import { searchPatterns } from "@/features/search-patterns/model/searchPatterns";

/**
 * Header search for pages other than the catalog: a trigger button plus a ⌘K (Ctrl+K)
 * shortcut that opens a command palette. Type to filter, ↑/↓ to move, Enter to open.
 */
export function PatternCommandPalette() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isCommandK(event)) return;
      event.preventDefault();
      setOpen((current) => !current);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // React's autoFocus runs before the dialog opens, so focus the query field afterwards.
      dialog.querySelector("input")?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 items-center gap-2 rounded-control border border-rule px-2.5 text-caption text-graphite hover:border-rule-strong hover:text-ink sm:w-52"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z"
          />
        </svg>
        <span className="sr-only sm:not-sr-only sm:flex-1 sm:text-left">패턴 검색</span>
        <kbd className="hidden rounded-tag border border-rule px-1.5 font-sans text-micro sm:inline">
          {commandKLabel()}
        </kbd>
      </button>
      <dialog
        ref={dialogRef}
        aria-label="패턴 검색"
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="mx-auto mt-24 w-[calc(100%-2rem)] max-w-search rounded-surface border border-rule bg-paper p-0 text-ink shadow-overlay backdrop:bg-scrim"
      >
        {/* Mounted only while open, so every opening starts with an empty query. */}
        {open ? <PaletteContent onClose={() => setOpen(false)} /> : null}
      </dialog>
    </>
  );
}

function PaletteContent({ onClose }: { readonly onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const listboxId = useId();
  const results = searchPatterns(PATTERNS, { text: query, category: "all" });
  const active = Math.min(activeIndex, results.length - 1);
  const optionId = (pattern: Pattern) => `${listboxId}-${pattern.slug}`;
  const activePattern = results[active];

  useEffect(() => {
    if (!activePattern) return;
    document
      .getElementById(`${listboxId}-${activePattern.slug}`)
      ?.scrollIntoView?.({ block: "nearest" });
  }, [activePattern, listboxId]);

  function openPattern(pattern: Pattern) {
    onClose();
    navigate(`/patterns/${pattern.slug}`);
  }

  return (
    <div>
      <div className="flex items-center gap-3 border-b border-rule px-4">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="size-5 text-graphite"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z"
          />
        </svg>
        <input
          type="text"
          role="combobox"
          aria-label="패턴 이름이나 생김새"
          aria-expanded={results.length > 0}
          aria-controls={listboxId}
          aria-activedescendant={activePattern ? optionId(activePattern) : undefined}
          aria-autocomplete="list"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={(event) => {
            if (event.nativeEvent.isComposing) return;
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex(Math.min(active + 1, results.length - 1));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex(Math.max(active - 1, 0));
            } else if (event.key === "Enter" && activePattern) {
              event.preventDefault();
              openPattern(activePattern);
            }
          }}
          placeholder="이름이나 생김새로 찾아보세요"
          autoComplete="off"
          spellCheck={false}
          className="h-14 flex-1 bg-transparent text-lead placeholder:text-subtle focus:outline-none"
        />
      </div>

      {results.length > 0 ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="검색 결과"
          className="max-h-96 overflow-y-auto p-2"
        >
          {results.map((pattern, index) => (
            <li
              key={pattern.slug}
              id={optionId(pattern)}
              role="option"
              aria-selected={index === active}
              onPointerMove={() => setActiveIndex(index)}
              onClick={() => openPattern(pattern)}
              className="flex cursor-pointer items-baseline gap-2 rounded-control px-3 py-2.5 aria-selected:bg-field"
            >
              <span className="font-serif text-headword font-semibold">
                <Highlight text={pattern.nameKo} query={query} />
              </span>
              <span className="text-caption text-graphite">
                <Highlight text={pattern.name} query={query} />
              </span>
              <span className="ml-auto shrink-0 text-micro text-graphite">
                {getCategory(pattern.category).labelKo}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-10 text-center text-body-sm text-graphite">
          &apos;{query}&apos;에 맞는 패턴이 없어요
        </p>
      )}

      <p className="flex gap-4 border-t border-rule px-4 py-2.5 text-micro text-graphite">
        <span>↑↓ 이동</span>
        <span>Enter 열기</span>
        <span>Esc 닫기</span>
      </p>
    </div>
  );
}
