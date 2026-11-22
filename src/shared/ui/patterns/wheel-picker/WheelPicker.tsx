import { useEffect, useId, useRef, type KeyboardEvent } from "react";

const ITEM_HEIGHT = 36;
const VISIBLE = 5;

export interface WheelColumnProps {
  readonly label: string;
  readonly options: readonly string[];
  readonly value: string;
  readonly onChange: (value: string) => void;
}

/**
 * One scrolling column of a wheel picker. Scrolling snaps to an item (CSS scroll snap)
 * and the item in the middle becomes the value. It is a listbox, so ↑/↓ also change the
 * value and screen readers hear the current option.
 */
export function WheelColumn({ label, options, value, onChange }: WheelColumnProps) {
  const id = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const timerRef = useRef(0);
  const index = Math.max(0, options.indexOf(value));

  useEffect(() => {
    const list = listRef.current;
    if (list && Math.round(list.scrollTop / ITEM_HEIGHT) !== index)
      list.scrollTop = index * ITEM_HEIGHT;
  }, [index]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function handleScroll() {
    window.clearTimeout(timerRef.current);
    // Wait for the snap to settle before reading the value.
    timerRef.current = window.setTimeout(() => {
      const list = listRef.current;
      if (!list) return;
      const next =
        options[
          Math.min(options.length - 1, Math.max(0, Math.round(list.scrollTop / ITEM_HEIGHT)))
        ];
      if (next !== undefined && next !== value) onChange(next);
    }, 120);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const next =
      options[
        Math.min(options.length - 1, Math.max(0, index + (event.key === "ArrowDown" ? 1 : -1)))
      ];
    if (next !== undefined) onChange(next);
  }

  return (
    <ul
      ref={listRef}
      role="listbox"
      tabIndex={0}
      aria-label={label}
      aria-activedescendant={`${id}-${index}`}
      onScroll={handleScroll}
      onKeyDown={handleKeyDown}
      className="relative snap-y snap-mandatory overflow-y-scroll [scrollbar-width:none] focus:outline-none focus-visible:bg-blue-50/40 [&::-webkit-scrollbar]:hidden"
      style={{ height: ITEM_HEIGHT * VISIBLE, paddingBlock: ITEM_HEIGHT * Math.floor(VISIBLE / 2) }}
    >
      {options.map((option, optionIndex) => (
        <li
          key={option}
          id={`${id}-${optionIndex}`}
          role="option"
          aria-selected={optionIndex === index}
          onClick={() => onChange(option)}
          className="grid snap-center place-items-center text-base text-slate-400 tabular-nums aria-selected:font-semibold aria-selected:text-slate-900"
          style={{ height: ITEM_HEIGHT }}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export interface WheelPickerProps {
  readonly label: string;
  readonly columns: readonly WheelColumnProps[];
}

/** Columns side by side with a band marking the chosen row, like the iOS time picker. */
export function WheelPicker({ label, columns }: WheelPickerProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="relative flex rounded-2xl bg-white px-3 shadow-sm ring-1 ring-slate-200"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100"
        style={{ height: ITEM_HEIGHT }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-2xl bg-gradient-to-b from-white to-white/0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-gradient-to-t from-white to-white/0"
      />
      {columns.map((column) => (
        <div key={column.label} className="relative w-16">
          <WheelColumn {...column} />
        </div>
      ))}
    </div>
  );
}
