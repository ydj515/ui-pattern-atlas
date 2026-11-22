import { useId, useState, type KeyboardEvent } from "react";

export interface ComboboxProps {
  readonly label: string;
  readonly options: readonly string[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
  readonly emptyText?: string;
}

/**
 * Text input with a filtered list of suggestions (WAI-ARIA combobox with a listbox).
 *
 * Typing narrows the list; ↑/↓ move the highlighted option (aria-activedescendant, so
 * focus stays in the input); Enter picks it; Escape closes the list, then clears.
 */
export function Combobox({
  label,
  options,
  value,
  onChange,
  placeholder,
  emptyText = "일치하는 항목이 없어요",
}: ComboboxProps) {
  const id = useId();
  const listId = `${id}-list`;
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const matches = options.filter((option) => option.includes(query.trim()));

  function pick(option: string) {
    onChange(option);
    setQuery(option);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => (current + delta + matches.length) % Math.max(matches.length, 1));
    } else if (event.key === "Enter" && open) {
      const option = matches[active];
      if (!option) return;
      event.preventDefault();
      pick(option);
    } else if (event.key === "Escape") {
      if (open) setOpen(false);
      else setQuery("");
    }
  }

  return (
    <div className="relative">
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && matches[active] ? `${id}-option-${active}` : undefined}
        autoComplete="off"
        value={query}
        placeholder={placeholder}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
      />
      <ul
        id={listId}
        role="listbox"
        aria-label={label}
        hidden={!open}
        className="absolute inset-x-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
      >
        {matches.map((option, index) => (
          <li
            key={option}
            id={`${id}-option-${index}`}
            role="option"
            aria-selected={index === active}
            // Keep focus in the input while clicking an option.
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => pick(option)}
            onMouseMove={() => setActive(index)}
            className="cursor-pointer px-3 py-1.5 text-sm text-slate-800 aria-selected:bg-blue-50 aria-selected:text-blue-800"
          >
            {option}
          </li>
        ))}
        {matches.length === 0 ? (
          <li className="px-3 py-1.5 text-sm text-slate-500">{emptyText}</li>
        ) : null}
      </ul>
    </div>
  );
}
