import { useState } from "react";

import { KanbanBoard, type KanbanCard } from "@/shared/ui/patterns/kanban-board/KanbanBoard";

const COLUMNS = [
  { id: "todo", title: "할 일" },
  { id: "doing", title: "진행 중" },
  { id: "done", title: "완료" },
] as const;

const INITIAL: readonly KanbanCard[] = [
  { id: "c1", title: "회의록 정리", column: "todo" },
  { id: "c2", title: "시안 검토", column: "todo" },
  { id: "c3", title: "로그인 오류 수정", column: "doing" },
  { id: "c4", title: "배포 공지", column: "done" },
];

export function KanbanBoardDemo() {
  const [cards, setCards] = useState(INITIAL);

  return (
    <div className="w-full max-w-md">
      <KanbanBoard
        columns={COLUMNS}
        cards={cards}
        onMove={(id, column) =>
          setCards((current) =>
            current.map((card) => (card.id === id ? { ...card, column } : card)),
          )
        }
        moveLabel={(card, column) => `${card} 카드를 ${column} 열로 옮기기`}
        movedText={(card, column) => `${card} 카드를 ${column} 열로 옮겼어요`}
      />
    </div>
  );
}
