import { useId, useState, type FormEvent, type KeyboardEvent } from "react";

export interface SearchSuggestionsProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  /** Runs the search with a typed or picked term. */
  readonly onSearch: (term: string) => void;
  /** Suggestions for the current text, best first. */
  readonly suggestions: readonly string[];
  readonly placeholder?: string;
  readonly submitLabel?: string;
}

/**
 * Search box that completes what is being typed. Nothing is pre-selected, so Enter
 * always searches the typed text; ↑/↓ move through suggestions and Enter runs the
 * highlighted one. The part each suggestion adds to the typed text is shown in bold.
 */
export function SearchSuggestions({
  label,
  value,
  onChange,
  onSearch,
  suggestions,
  placeholder,
  submitLabel = "검색",
}: SearchSuggestionsProps) {
  const id = useId();
  const listId = `${id}-list`;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const query = value.trim();
  const shown = open && query !== "" && suggestions.length > 0;

  function run(term: string) {
    if (term.trim() === "") return;
    onChange(term);
    onSearch(term);
    setOpen(false);
    setActive(-1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if ((event.key === "ArrowDown" || event.key === "ArrowUp") && suggestions.length > 0) {
      event.preventDefault();
      setOpen(true);
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => {
        const next = current + delta;
        return next < -1 ? suggestions.length - 1 : next >= suggestions.length ? -1 : next;
      });
    } else if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    run(shown && active >= 0 ? (suggestions[active] ?? value) : value);
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="relative">
      <div className="flex gap-2">
        <input
          role="combobox"
          aria-label={label}
          aria-expanded={shown}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={shown && active >= 0 ? `${id}-option-${active}` : undefined}
          autoComplete="off"
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            onChange(event.target.value);
            setActive(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={handleKeyDown}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-3 text-sm font-semibold text-white"
        >
          {submitLabel}
        </button>
      </div>
      <ul
        id={listId}
        role="listbox"
        aria-label={label}
        hidden={!shown}
        className="absolute inset-x-0 top-full z-10 mt-1 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
      >
        {suggestions.map((suggestion, index) => {
          const completes = suggestion.startsWith(query);
          return (
            <li
              key={suggestion}
              id={`${id}-option-${index}`}
              role="option"
              aria-label={suggestion}
              aria-selected={index === active}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => run(suggestion)}
              onMouseMove={() => setActive(index)}
              className="cursor-pointer px-3 py-1.5 text-sm text-slate-700 aria-selected:bg-slate-100"
            >
              {completes ? (
                <>
                  {query}
                  <b className="font-semibold text-slate-900">{suggestion.slice(query.length)}</b>
                </>
              ) : (
                suggestion
              )}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
