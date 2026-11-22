import { useState, type DragEvent, type ReactNode } from "react";

export interface DropZoneProps {
  readonly label: string;
  readonly onDropItem: (id: string) => void;
  readonly children?: ReactNode;
}

/** Area that accepts dragged items; it highlights while something is held over it. */
export function DropZone({ label, onDropItem, children }: DropZoneProps) {
  const [over, setOver] = useState(false);
  return (
    <section
      aria-label={label}
      onDragOver={(event) => {
        event.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        setOver(false);
        const id = event.dataTransfer.getData("text/plain");
        if (id) onDropItem(id);
      }}
      className={`rounded-xl border-2 border-dashed p-3 transition-colors ${over ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"}`}
    >
      {children}
    </section>
  );
}

export interface DraggableItemProps {
  readonly id: string;
  readonly children: ReactNode;
  /** Button that does the same as dropping, for keyboard and switch users. */
  readonly moveLabel: string;
  readonly onMove: () => void;
}

/**
 * Item that can be dragged onto a DropZone. Dragging is never the only way: every item
 * also has a move button with the same effect.
 */
export function DraggableItem({ id, children, moveLabel, onMove }: DraggableItemProps) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", id);
        event.dataTransfer.effectAllowed = "move";
      }}
      className="flex cursor-grab items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 active:cursor-grabbing"
    >
      <span className="min-w-0 flex-1">{children}</span>
      <button
        type="button"
        aria-label={moveLabel}
        onClick={onMove}
        className="grid size-7 place-items-center rounded-md text-slate-500 hover:bg-slate-100"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
