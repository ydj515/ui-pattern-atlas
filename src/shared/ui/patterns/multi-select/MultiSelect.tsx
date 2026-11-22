import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export interface MultiSelectProps {
  readonly label: string;
  readonly options: readonly string[];
  readonly selected: readonly string[];
  readonly onChange: (selected: readonly string[]) => void;
  readonly placeholder?: string;
  /** Name for each chip's remove button. */
  readonly removeLabel?: (option: string) => string;
  /** Button text once something is picked. */
  readonly summary?: (count: number) => string;
}

/**
 * Button that opens a list with check marks for picking several items. Picked items
 * show as chips under the button, each with its own remove button.
 *
 * The list is a multi-select listbox: ↑/↓ move, Space or Enter toggles, Escape closes
 * and returns focus to the button.
 */
export function MultiSelect({
  label,
  options,
  selected,
  onChange,
  placeholder = "선택하세요",
  removeLabel = (option) => `${option} 빼기`,
  summary = (count) => `${count}개 선택`,
}: MultiSelectProps) {
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function toggle(option: string) {
    onChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option],
    );
  }

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => (current + delta + options.length) % options.length);
    } else if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      toggle(options[active]!);
    } else if (event.key === "Escape" || event.key === "Tab") {
      event.preventDefault();
      close();
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <span id={`${id}-label`} className="text-sm font-medium text-slate-800">
        {label}
      </span>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={() => setOpen((current) => !current)}
        className="mt-1.5 flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-900 hover:bg-slate-50"
      >
        <span id={`${id}-value`} className={selected.length === 0 ? "text-slate-400" : ""}>
          {selected.length === 0 ? placeholder : summary(selected.length)}
        </span>
        <span aria-hidden="true" className="text-slate-500">
          ▾
        </span>
      </button>
      <ul
        ref={listRef}
        role="listbox"
        aria-multiselectable="true"
        aria-labelledby={`${id}-label`}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        tabIndex={-1}
        hidden={!open}
        onKeyDown={handleKeyDown}
        className="absolute inset-x-0 top-full z-10 mt-1 rounded-lg border border-slate-200 bg-white py-1 shadow-lg focus:outline-none"
      >
        {options.map((option, index) => {
          const isSelected = selected.includes(option);
          return (
            <li
              key={option}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={isSelected}
              onClick={() => toggle(option)}
              onMouseMove={() => setActive(index)}
              className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm text-slate-800 ${index === active ? "bg-slate-100" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`grid size-4 place-items-center rounded border text-[10px] ${isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"}`}
              >
                {isSelected ? "✓" : ""}
              </span>
              {option}
            </li>
          );
        })}
      </ul>
      {selected.length > 0 ? (
        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`${label} 선택 항목`}>
          {selected.map((option) => (
            <li
              key={option}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 py-0.5 pr-1 pl-2.5 text-sm text-slate-800"
            >
              {option}
              <button
                type="button"
                aria-label={removeLabel(option)}
                onClick={() => toggle(option)}
                className="grid size-5 place-items-center rounded-full text-slate-500 hover:bg-slate-200"
              >
                <span aria-hidden="true">×</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
