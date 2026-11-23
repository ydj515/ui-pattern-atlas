import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export interface SortOption {
  readonly value: string;
  readonly label: string;
}

export interface SearchSortProps {
  readonly options: readonly SortOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  /** Read before the current order, e.g. "정렬". */
  readonly label?: string;
}

/**
 * Button that shows the current order and opens a menu of orders (menuitemradio).
 * Opening focuses the current order; ↑/↓ move, Enter picks, Escape closes and returns
 * focus to the button.
 */
export function SearchSort({ options, value, onChange, label = "정렬" }: SearchSortProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const index = Math.max(
      options.findIndex((option) => option.value === value),
      0,
    );
    itemRefs.current[index]?.focus();
  }, [open, options, value]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const items = itemRefs.current.filter(Boolean);
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      items[(index + delta + items.length) % items.length]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        aria-label={`${label}: ${current?.label ?? ""}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-800"
      >
        {current?.label}
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 text-slate-500">
          <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      {open ? (
        <ul
          id={`${id}-menu`}
          role="menu"
          aria-label={label}
          onKeyDown={handleKeyDown}
          className="absolute right-0 z-10 mt-1 w-36 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
        >
          {options.map((option, index) => (
            <li key={option.value} role="none">
              <button
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={option.value === value}
                tabIndex={-1}
                onClick={() => {
                  onChange(option.value);
                  close();
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 text-left text-sm text-slate-700 focus:bg-slate-100 focus:outline-none aria-checked:font-semibold aria-checked:text-slate-900"
              >
                {option.label}
                {option.value === value ? (
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5">
                    <path d="m3 8 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
