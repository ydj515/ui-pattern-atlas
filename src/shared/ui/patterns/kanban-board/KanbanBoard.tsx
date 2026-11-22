import { useState, type DragEvent } from "react";

export interface KanbanColumn {
  readonly id: string;
  readonly title: string;
}

export interface KanbanCard {
  readonly id: string;
  readonly title: string;
  readonly column: string;
}

export interface KanbanBoardProps {
  readonly columns: readonly KanbanColumn[];
  readonly cards: readonly KanbanCard[];
  readonly onMove: (cardId: string, columnId: string) => void;
  readonly moveLabel?: (card: string, column: string) => string;
  readonly movedText?: (card: string, column: string) => string;
}

/**
 * Cards in columns by status. Drag a card to another column, or use the small arrow
 * buttons on each card, which do the same without a pointer. Each move is announced.
 */
export function KanbanBoard({
  columns,
  cards,
  onMove,
  moveLabel = (card, column) => `${card} 카드를 ${column} 열로 옮기기`,
  movedText = (card, column) => `${card} 카드를 ${column} 열로 옮겼어요`,
}: KanbanBoardProps) {
  const [over, setOver] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function move(card: KanbanCard, column: KanbanColumn) {
    onMove(card.id, column.id);
    setMessage(movedText(card.title, column.title));
  }

  function handleDrop(event: DragEvent<HTMLElement>, column: KanbanColumn) {
    event.preventDefault();
    setOver(null);
    const card = cards.find((item) => item.id === event.dataTransfer.getData("text/plain"));
    if (card && card.column !== column.id) move(card, column);
  }

  return (
    <div>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((column, columnIndex) => {
          const list = cards.filter((card) => card.column === column.id);
          return (
            <section
              key={column.id}
              aria-label={`${column.title} ${list.length}개`}
              onDragOver={(event) => {
                event.preventDefault();
                setOver(column.id);
              }}
              onDragLeave={() => setOver((current) => (current === column.id ? null : current))}
              onDrop={(event) => handleDrop(event, column)}
              className={`min-h-40 rounded-xl p-2 ${over === column.id ? "bg-blue-50 ring-2 ring-blue-300" : "bg-slate-100"}`}
            >
              <h3 className="flex items-center justify-between px-1 pb-2 text-xs font-semibold text-slate-600">
                {column.title}
                <span className="font-normal text-slate-400">{list.length}</span>
              </h3>
              <ul className="space-y-1.5">
                {list.map((card) => {
                  const previous = columns[columnIndex - 1];
                  const next = columns[columnIndex + 1];
                  return (
                    <li
                      key={card.id}
                      draggable
                      onDragStart={(event) => event.dataTransfer.setData("text/plain", card.id)}
                      className="cursor-grab rounded-lg bg-white p-2 text-xs text-slate-800 shadow-sm active:cursor-grabbing"
                    >
                      {card.title}
                      <span className="mt-1.5 flex justify-end gap-1">
                        {previous ? (
                          <button
                            type="button"
                            aria-label={moveLabel(card.title, previous.title)}
                            onClick={() => move(card, previous)}
                            className="grid size-5 place-items-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          >
                            <span aria-hidden="true">‹</span>
                          </button>
                        ) : null}
                        {next ? (
                          <button
                            type="button"
                            aria-label={moveLabel(card.title, next.title)}
                            onClick={() => move(card, next)}
                            className="grid size-5 place-items-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          >
                            <span aria-hidden="true">›</span>
                          </button>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      <p role="status" className="mt-2 min-h-4 text-xs text-slate-500">
        {message}
      </p>
    </div>
  );
}
