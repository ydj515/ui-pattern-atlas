import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bulkActionsPattern: Pattern = {
  slug: "bulk-actions",

  name: "Bulk Actions",
  nameKo: "일괄 작업",
  aliases: ["여러 개 선택", "선택 항목 삭제", "batch actions", "multi-select toolbar"],
  category: "risky-actions",
  summary: "고른 개수를 보여 주며 여러 항목을 한 번에 처리",
  description:
    "목록에서 항목을 고르면 몇 개를 골랐는지와 함께 작업 막대가 나타나는 패턴입니다. 삭제처럼 큰 작업도 처리한 개수를 알려 주고 되돌리기를 바로 옆에 둬, 묻지 않고 처리할 수 있습니다.",
  tags: [...BASE_TAGS, "toolbar", "checkbox", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/bulk-actions/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bulk-actions/BulkActionsDemo").then(
      (m) => m.BulkActionsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bulk-actions/BulkActionsThumbnail").then(
      (m) => m.BulkActionsThumbnail,
    ),
  sources: [
    {
      fileName: "BulkActions.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bulk-actions/BulkActions.tsx?raw"),
    },
    {
      fileName: "BulkActionsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bulk-actions/BulkActionsDemo.tsx?raw"),
    },
  ],
};
