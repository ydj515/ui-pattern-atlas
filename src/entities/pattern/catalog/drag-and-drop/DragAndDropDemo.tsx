import { useState } from "react";
import { DraggableItem, DropZone } from "@/shared/ui/patterns/drag-and-drop/DragAndDrop";

type Column = "todo" | "done";
const COLUMNS: Record<Column, string> = { todo: "할 일", done: "완료" };
const INITIAL: Record<string, Column> = {
  "디자인 검토": "todo",
  "배포 준비": "todo",
  "회의 일정": "done",
};

export function DragAndDropDemo() {
  const [cards, setCards] = useState(INITIAL);
  const [message, setMessage] = useState("");

  function move(card: string, to: Column) {
    if (cards[card] === to) return;
    setCards((current) => ({ ...current, [card]: to }));
    setMessage(`${card} → ${COLUMNS[to]}`);
  }

  return (
    <section className="w-full max-w-md">
      <div className="grid grid-cols-2 gap-3">
        {(Object.keys(COLUMNS) as Column[]).map((column) => {
          const other: Column = column === "todo" ? "done" : "todo";
          return (
            <DropZone
              key={column}
              label={COLUMNS[column]}
              onDropItem={(card) => move(card, column)}
            >
              <h3 className="mb-2 text-xs font-semibold text-slate-600">{COLUMNS[column]}</h3>
              <div className="grid min-h-24 content-start gap-2 text-sm">
                {Object.entries(cards)
                  .filter(([, at]) => at === column)
                  .map(([card]) => (
                    <DraggableItem
                      key={card}
                      id={card}
                      moveLabel={`${card}, ${COLUMNS[other]}로 옮기기`}
                      onMove={() => move(card, other)}
                    >
                      {card}
                    </DraggableItem>
                  ))}
              </div>
            </DropZone>
          );
        })}
      </div>
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
