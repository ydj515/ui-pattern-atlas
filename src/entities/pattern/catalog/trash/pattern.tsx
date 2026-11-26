import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const trashPattern: Pattern = {
  slug: "trash",

  name: "Trash",
  nameKo: "휴지통",
  aliases: ["휴지통 복원", "최근 삭제한 항목", "recycle bin", "recently deleted", "soft delete"],
  category: "risky-actions",
  summary: "지운 항목을 정해진 기간 동안 되살릴 수 있는 곳",
  description:
    "지운 항목을 바로 없애지 않고 정해진 기간 동안 모아 두는 목록입니다. 항목마다 영구 삭제까지 남은 날을 적고 곧 사라질 항목은 색으로 함께 알리며, 복원 한 번으로 원래 자리로 돌려놓습니다.",
  tags: [...BASE_TAGS, "soft delete", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/trash/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/trash/TrashDemo").then((m) => m.TrashDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/trash/TrashThumbnail").then((m) => m.TrashThumbnail),
  sources: [
    {
      fileName: "Trash.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/trash/Trash.tsx?raw"),
    },
    {
      fileName: "TrashDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/trash/TrashDemo.tsx?raw"),
    },
  ],
};
