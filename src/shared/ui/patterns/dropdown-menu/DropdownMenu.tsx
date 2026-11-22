import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface DropdownMenuItem {
  readonly id: string;
  readonly label: string;
  /** `danger` marks destructive actions such as delete. */
  readonly tone?: "default" | "danger";
  /** Draw a divider above this item to group related actions. */
  readonly separatorBefore?: boolean;
  readonly disabled?: boolean;
}

const alignClasses = {
  start: "left-0",
  end: "right-0",
} as const;

export interface DropdownMenuProps {
  /** Accessible name of the trigger, e.g. "기획서 더보기". */
  readonly label: string;
  /** Visible content of the trigger button (text or icon). */
  readonly trigger: ReactNode;
  readonly items: readonly DropdownMenuItem[];
  readonly onSelect: (id: string) => void;
  readonly align?: keyof typeof alignClasses;
}

/**
 * Menu button (WAI-ARIA APG): a button that opens a list of actions.
 *
 * Keyboard: Enter, Space or ↓ opens on the first item, ↑ on the last; ↑/↓ move, Home/End
 * jump, typing a letter moves to the next item that starts with it; Escape closes and
 * returns focus to the button; Tab closes. Disabled items are announced but skipped.
 */
export function DropdownMenu({
  label,
  trigger,
  items,
  onSelect,
  align = "start",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const triggerId = useId();
  const menuId = useId();

  const enabledIndexes = items.flatMap((item, index) => (item.disabled ? [] : [index]));

  useEffect(() => {
    if (open && activeIndex >= 0) itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function openAt(index: number) {
    setOpen(true);
    setActiveIndex(index);
  }

  function close({ restoreFocus }: { restoreFocus: boolean }) {
    setOpen(false);
    setActiveIndex(-1);
    if (restoreFocus) triggerRef.current?.focus();
  }

  function select(item: DropdownMenuItem) {
    if (item.disabled) return;
    close({ restoreFocus: true });
    onSelect(item.id);
  }

  function step(direction: 1 | -1) {
    const position = enabledIndexes.indexOf(activeIndex);
    const next = (position + direction + enabledIndexes.length) % enabledIndexes.length;
    setActiveIndex(enabledIndexes[next] ?? -1);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openAt(enabledIndexes[0] ?? -1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openAt(enabledIndexes.at(-1) ?? -1);
    }
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      step(event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex((event.key === "Home" ? enabledIndexes[0] : enabledIndexes.at(-1)) ?? -1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close({ restoreFocus: true });
    } else if (event.key === "Tab") {
      close({ restoreFocus: false });
    } else if (event.key.length === 1 && /\S/.test(event.key)) {
      // Typeahead: jump to the next enabled item whose label starts with the typed character.
      const key = event.key.toLowerCase();
      const start = enabledIndexes.indexOf(activeIndex);
      const ordered = [...enabledIndexes.slice(start + 1), ...enabledIndexes.slice(0, start + 1)];
      const match = ordered.find((index) => items[index]?.label.toLowerCase().startsWith(key));
      if (match !== undefined) setActiveIndex(match);
    }
  }

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => (open ? close({ restoreFocus: false }) : openAt(enabledIndexes[0] ?? -1))}
        onKeyDown={handleTriggerKeyDown}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        {trigger}
      </button>
      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          onKeyDown={handleMenuKeyDown}
          className={`absolute top-full z-20 mt-1.5 min-w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg ${alignClasses[align]}`}
        >
          {items.map((item, index) => (
            <li key={item.id} role="none">
              {item.separatorBefore ? (
                <div role="separator" className="mx-2 my-1 h-px bg-slate-200" />
              ) : null}
              <button
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                type="button"
                role="menuitem"
                tabIndex={-1}
                aria-disabled={item.disabled || undefined}
                onClick={() => select(item)}
                onPointerMove={() => {
                  if (!item.disabled) setActiveIndex(index);
                }}
                className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm outline-none focus:bg-slate-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-40 ${
                  item.tone === "danger" ? "text-rose-600" : "text-slate-700"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
