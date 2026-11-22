import { useId, type KeyboardEvent } from "react";

export interface ListboxOption {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export interface ListboxProps {
  readonly label: string;
  readonly options: readonly ListboxOption[];
  readonly value: string;
  readonly onChange: (value: string) => void;
}

/**
 * Always-open list for choosing one item (WAI-ARIA listbox, single select).
 * The list is one Tab stop; ↑/↓, Home/End and typing the first letter move the
 * selection, which follows focus. Useful when the options need room for a description.
 */
export function Listbox({ label, options, value, onChange }: ListboxProps) {
  const id = useId();
  const index = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  function select(next: number) {
    const wrapped = (next + options.length) % options.length;
    onChange(options[wrapped]!.value);
    document.getElementById(`${id}-option-${wrapped}`)?.scrollIntoView?.({ block: "nearest" });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowUp: index - 1,
      Home: 0,
      End: options.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key]!);
      return;
    }
    if (event.key.length === 1) {
      const start = (index + 1) % options.length;
      const ordered = [...options.slice(start), ...options.slice(0, start)];
      const match = ordered.find((option) => option.label.startsWith(event.key));
      if (match) onChange(match.value);
    }
  }

  return (
    <div>
      <span id={`${id}-label`} className="text-sm font-medium text-slate-800">
        {label}
      </span>
      <ul
        role="listbox"
        tabIndex={0}
        aria-labelledby={`${id}-label`}
        aria-activedescendant={`${id}-option-${index}`}
        onKeyDown={handleKeyDown}
        className="mt-1.5 max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30"
      >
        {options.map((option, optionIndex) => (
          <li
            key={option.value}
            id={`${id}-option-${optionIndex}`}
            role="option"
            aria-selected={option.value === value}
            onClick={() => onChange(option.value)}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-800 aria-selected:bg-blue-50 aria-selected:text-blue-900"
          >
            <span>
              <span className="block font-medium">{option.label}</span>
              {option.description ? (
                <span className="block text-xs text-slate-500">{option.description}</span>
              ) : null}
            </span>
            {option.value === value ? <span aria-hidden="true">✓</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
