import { useId, useRef, useState, type KeyboardEvent } from "react";

export interface MentionPerson {
  readonly id: string;
  readonly name: string;
}

export interface MentionInputProps {
  readonly label: string;
  readonly people: readonly MentionPerson[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
  readonly emptyLabel?: string;
}

/**
 * Text field that suggests people after "@". The list is a combobox listbox: arrow
 * keys move, Enter or Tab inserts "@이름 ", Escape closes, and the field keeps focus
 * the whole time.
 */
export function MentionInput({
  label,
  people,
  value,
  onChange,
  placeholder,
  emptyLabel = "찾는 사람이 없어요",
}: MentionInputProps) {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [active, setActive] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [caret, setCaret] = useState(value.length);
  const match = /(?:^|\s)@([^\s@]*)$/.exec(value.slice(0, caret));
  const query = match?.[1] ?? null;
  const options = query === null ? [] : people.filter((person) => person.name.includes(query));
  const open = query !== null && !dismissed;

  function pick(person: MentionPerson) {
    if (query === null) return;
    const start = caret - query.length - 1;
    const next = `${value.slice(0, start)}@${person.name} ${value.slice(caret)}`;
    const position = start + person.name.length + 2;
    onChange(next);
    setCaret(position);
    setActive(0);
    requestAnimationFrame(() => ref.current?.setSelectionRange(position, position));
  }

  function handleKey(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (!open || options.length === 0) {
      if (open && event.key === "Escape") setDismissed(true);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (index - 1 + options.length) % options.length);
    } else if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      const person = options[active];
      if (person) pick(person);
    } else if (event.key === "Escape") {
      setDismissed(true);
    }
  }

  return (
    <div className="relative grid gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-900">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={3}
        value={value}
        placeholder={placeholder}
        role="combobox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-autocomplete="list"
        aria-activedescendant={open && options[active] ? `${id}-${options[active].id}` : undefined}
        onChange={(event) => {
          onChange(event.target.value);
          setCaret(event.target.selectionStart ?? event.target.value.length);
          setActive(0);
          setDismissed(false);
        }}
        onSelect={(event) => setCaret(event.currentTarget.selectionStart ?? value.length)}
        onKeyDown={handleKey}
        className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      {open ? (
        <ul
          id={`${id}-list`}
          role="listbox"
          aria-label={label}
          className="absolute top-full left-0 z-10 mt-1 w-48 rounded-lg bg-white p-1 shadow-lg ring-1 ring-slate-200"
        >
          {options.length === 0 ? (
            <li className="px-2 py-1.5 text-xs text-slate-500">{emptyLabel}</li>
          ) : null}
          {options.map((person, index) => (
            <li
              key={person.id}
              id={`${id}-${person.id}`}
              role="option"
              aria-selected={index === active}
              onMouseDown={(event) => {
                event.preventDefault();
                pick(person);
              }}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm aria-selected:bg-blue-50 aria-selected:text-blue-800"
            >
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full bg-slate-200 text-xs"
              >
                {person.name[0]}
              </span>
              {person.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
