import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export interface SplitAction {
  readonly id: string;
  readonly label: string;
}

export interface SplitButtonProps {
  readonly primary: SplitAction;
  readonly actions: readonly SplitAction[];
  readonly onAction: (id: string) => void;
  /** Name of the arrow button, e.g. "저장 옵션". */
  readonly menuLabel: string;
}

/**
 * The common action as a button, with an arrow button next to it that opens the other
 * choices in a menu. Two separate buttons, each with its own name; the menu follows the
 * WAI-ARIA menu button pattern (↑/↓, Enter, Escape returns focus).
 */
export function SplitButton({ primary, actions, onAction, menuLabel }: SplitButtonProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) itemsRef.current[active]?.focus();
  }, [open, active]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => (current + delta + actions.length) % actions.length);
    } else if (event.key === "Escape" || event.key === "Tab") {
      event.preventDefault();
      close();
    }
  }

  return (
    <div ref={rootRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => onAction(primary.id)}
        className="h-10 rounded-l-lg bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {primary.label}
      </button>
      <button
        ref={toggleRef}
        type="button"
        aria-label={menuLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setActive(0);
          setOpen((current) => !current);
        }}
        className="grid h-10 w-9 place-items-center rounded-r-lg border-l border-white/20 bg-slate-900 text-white hover:bg-slate-700 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span aria-hidden="true">▾</span>
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label={menuLabel}
        hidden={!open}
        onKeyDown={handleMenuKeyDown}
        className="absolute top-full right-0 z-10 mt-1 min-w-44 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
      >
        {actions.map((action, index) => (
          <button
            key={action.id}
            ref={(element) => {
              itemsRef.current[index] = element;
            }}
            type="button"
            role="menuitem"
            tabIndex={index === active ? 0 : -1}
            onClick={() => {
              onAction(action.id);
              close();
            }}
            className="block w-full px-3 py-2 text-left text-sm text-slate-800 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
