import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

export interface ContextMenuItem {
  readonly id: string;
  readonly label: string;
  readonly tone?: "default" | "danger";
  readonly separatorBefore?: boolean;
}

export interface ContextMenuProps {
  /** Accessible name of the menu, e.g. "사진.png 메뉴". */
  readonly label: string;
  readonly items: readonly ContextMenuItem[];
  readonly onSelect: (id: string) => void;
  /**
   * The element the menu belongs to. It must be focusable so keyboard users can open
   * the menu with Shift+F10 or the context menu key.
   */
  readonly children: ReactNode;
}

const LONG_PRESS_MS = 500;
const MENU_WIDTH = 176;

interface Position {
  readonly x: number;
  readonly y: number;
}

/**
 * Menu opened from the item itself: right click, long press on touch, or Shift+F10 /
 * the context menu key. It appears at the pointer (or under the focused item), moves
 * focus to the first action and returns it to the item when closed.
 */
export function ContextMenu({ label, items, onSelect, children }: ContextMenuProps) {
  const [position, setPosition] = useState<Position | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pressTimer = useRef<number | undefined>(undefined);
  const open = position !== null;

  useEffect(() => {
    if (open) itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target))
        setPosition(null);
    }
    function handleScroll() {
      setPosition(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(pressTimer.current), []);

  function openAt(x: number, y: number) {
    // Keep the menu inside the viewport.
    setPosition({ x: Math.max(8, Math.min(x, window.innerWidth - MENU_WIDTH - 8)), y });
    setActiveIndex(0);
  }

  function openUnderTarget() {
    const rect = targetRef.current?.getBoundingClientRect();
    if (rect) openAt(rect.left + 8, rect.bottom + 4);
  }

  function close() {
    setPosition(null);
    targetRef.current?.querySelector<HTMLElement>("[tabindex], a, button")?.focus();
  }

  function handleTargetKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
      event.preventDefault();
      openUnderTarget();
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") return;
    const { clientX, clientY } = event;
    pressTimer.current = window.setTimeout(() => openAt(clientX, clientY), LONG_PRESS_MS);
  }

  function cancelLongPress() {
    window.clearTimeout(pressTimer.current);
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const last = items.length - 1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index === last ? 0 : index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index === 0 ? last : index - 1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex(event.key === "Home" ? 0 : last);
    } else if (event.key === "Escape" || event.key === "Tab") {
      event.preventDefault();
      close();
    }
  }

  return (
    <>
      <div
        ref={targetRef}
        onContextMenu={(event) => {
          event.preventDefault();
          openAt(event.clientX, event.clientY);
        }}
        onKeyDown={handleTargetKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={cancelLongPress}
        onPointerLeave={cancelLongPress}
        onPointerCancel={cancelLongPress}
        className="touch-manipulation select-none"
      >
        {children}
      </div>
      {position ? (
        <ul
          ref={menuRef}
          role="menu"
          aria-label={label}
          onKeyDown={handleMenuKeyDown}
          style={{ left: position.x, top: position.y, width: MENU_WIDTH }}
          className="fixed z-50 rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
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
                onClick={() => {
                  close();
                  onSelect(item.id);
                }}
                onPointerMove={() => setActiveIndex(index)}
                className={`flex w-full rounded-lg px-3 py-2 text-left text-sm outline-none focus:bg-slate-100 ${
                  item.tone === "danger" ? "text-rose-600" : "text-slate-700"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
