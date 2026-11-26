import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const undoPattern: Pattern = {
  slug: "undo",

  name: "Undo",
  nameKo: "되돌리기",
  aliases: ["실행 취소", "되돌리기 스낵바", "undo snackbar", "undo toast"],
  category: "feedback",
  summary: "삭제 등 작업을 되돌리는 스낵바",
  description:
    "삭제처럼 실수하기 쉬운 작업을 먼저 화면에서 처리하고, 잠깐 동안 되돌릴 기회를 주는 패턴입니다. 시간이 지나면 그때 실제로 확정합니다. 매번 확인 창을 띄우는 것보다 흐름을 덜 끊습니다.",
  tags: [...BASE_TAGS, "role=status", "WCAG 2.2.1"],
  loadGuide: () => import("@/entities/pattern/catalog/undo/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/undo/UndoDemo").then((m) => m.UndoDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/undo/UndoThumbnail").then((m) => m.UndoThumbnail),
  sources: [
    {
      fileName: "UndoBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/undo/UndoBar.tsx?raw"),
    },
    {
      fileName: "UndoDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/undo/UndoDemo.tsx?raw"),
    },
  ],
};
