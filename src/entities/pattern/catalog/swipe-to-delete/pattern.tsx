import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const swipeToDeletePattern: Pattern = {
  slug: "swipe-to-delete",

  name: "Swipe to Delete",
  nameKo: "스와이프 삭제",
  aliases: ["밀어서 삭제", "옆으로 밀기", "swipe action", "swipe to remove"],
  category: "gesture",
  summary: "행을 옆으로 밀어 지우기",
  description:
    "목록의 행을 왼쪽으로 밀면 뒤에 있던 삭제 버튼이 드러나고, 끝까지 길게 밀면 바로 지워지는 패턴입니다. 지운 직후 되돌리기를 보여 실수로 민 경우를 바로잡을 수 있게 합니다.",
  tags: [...BASE_TAGS, "Pointer Events", "Undo"],
  loadGuide: () => import("@/entities/pattern/catalog/swipe-to-delete/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteDemo").then(
      (m) => m.SwipeToDeleteDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteThumbnail").then(
      (m) => m.SwipeToDeleteThumbnail,
    ),
  sources: [
    {
      fileName: "SwipeToDelete.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/swipe-to-delete/SwipeToDelete.tsx?raw"),
    },
    {
      fileName: "SwipeToDeleteDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteDemo.tsx?raw"),
    },
  ],
};
