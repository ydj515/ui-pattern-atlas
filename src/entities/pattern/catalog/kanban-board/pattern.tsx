import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const kanbanBoardPattern: Pattern = {
  slug: "kanban-board",

  name: "Kanban Board",
  nameKo: "칸반 보드",
  aliases: ["작업 보드", "칸반", "task board", "status columns"],
  category: "list-table",
  summary: "상태별 열로 나눈 카드",
  description:
    "할 일을 상태별 열에 카드로 놓고, 끌어서 다음 상태로 옮기는 패턴입니다. 끌기 어려운 사람을 위해 카드마다 이전, 다음 열로 옮기는 버튼도 둡니다.",
  tags: [...BASE_TAGS, "Drag and drop", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/kanban-board/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/kanban-board/KanbanBoardDemo").then(
      (m) => m.KanbanBoardDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/kanban-board/KanbanBoardThumbnail").then(
      (m) => m.KanbanBoardThumbnail,
    ),
  sources: [
    {
      fileName: "KanbanBoard.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/kanban-board/KanbanBoard.tsx?raw"),
    },
    {
      fileName: "KanbanBoardDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/kanban-board/KanbanBoardDemo.tsx?raw"),
    },
  ],
};
