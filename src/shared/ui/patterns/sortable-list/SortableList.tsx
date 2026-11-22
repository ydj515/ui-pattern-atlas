import { useRef, useState, type DragEvent, type KeyboardEvent } from "react";

export interface SortableItem {
  readonly id: string;
  readonly label: string;
}

export interface SortableListProps {
  readonly label: string;
  readonly items: readonly SortableItem[];
  readonly onChange: (items: readonly SortableItem[]) => void;
  readonly handleLabel?: (item: string) => string;
  readonly movedText?: (item: string, position: number, total: number) => string;
}

function moveItem<T>(list: readonly T[], from: number, to: number) {
  const next = [...list];
  const [item] = next.splice(from, 1);
  if (item !== undefined) next.splice(to, 0, item);
  return next;
}

/**
 * List whose order can be changed by dragging the handle, or with the keyboard: focus a
 * handle and press ↑/↓. The new position is announced ("3개 중 1번째") and focus stays on
 * the moved item's handle.
 */
export function SortableList({
  label,
  items,
  onChange,
  handleLabel = (item) => `${item} 순서 바꾸기. 위아래 화살표로 옮겨요`,
  movedText = (item, position, total) => `${item}, ${total}개 중 ${position}번째`,
}: SortableListProps) {
  const [dragging, setDragging] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const handleRefs = useRef(new Map<string, HTMLButtonElement>());

  function moveTo(from: number, to: number) {
    if (to < 0 || to >= items.length || from === to) return;
    const item = items[from]!;
    onChange(moveItem(items, from, to));
    setMessage(movedText(item.label, to + 1, items.length));
    requestAnimationFrame(() => handleRefs.current.get(item.id)?.focus());
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      moveTo(index, index + (event.key === "ArrowUp" ? -1 : 1));
    }
  }

  function handleDrop(event: DragEvent<HTMLLIElement>, index: number) {
    event.preventDefault();
    if (dragging !== null) moveTo(dragging, index);
    setDragging(null);
  }

  return (
    <div>
      <ol aria-label={label} className="space-y-1.5">
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => setDragging(index)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, index)}
            onDragEnd={() => setDragging(null)}
            className={`flex items-center gap-2 rounded-lg border bg-white px-2 py-2 text-sm text-slate-800 ${dragging === index ? "border-blue-400 opacity-60" : "border-slate-200"}`}
          >
            <button
              ref={(element) => {
                if (element) handleRefs.current.set(item.id, element);
                else handleRefs.current.delete(item.id);
              }}
              type="button"
              aria-label={handleLabel(item.label)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="grid size-7 cursor-grab place-items-center rounded text-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <svg viewBox="0 0 10 16" fill="currentColor" aria-hidden="true" className="h-4 w-2.5">
                <circle cx="2.5" cy="3" r="1.3" />
                <circle cx="7.5" cy="3" r="1.3" />
                <circle cx="2.5" cy="8" r="1.3" />
                <circle cx="7.5" cy="8" r="1.3" />
                <circle cx="2.5" cy="13" r="1.3" />
                <circle cx="7.5" cy="13" r="1.3" />
              </svg>
            </button>
            <span className="w-5 text-xs text-slate-400 tabular-nums">{index + 1}</span>
            {item.label}
          </li>
        ))}
      </ol>
      <p role="status" className="sr-only">
        {message}
      </p>
    </div>
  );
}
