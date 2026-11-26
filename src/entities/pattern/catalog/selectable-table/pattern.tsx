import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const selectableTablePattern: Pattern = {
  slug: "selectable-table",

  name: "Selectable Table",
  nameKo: "선택 테이블",
  aliases: ["체크박스 표", "일괄 작업", "bulk actions", "row selection"],
  category: "list-table",
  summary: "여러 행을 골라 한 번에 처리",
  description:
    "행마다 체크박스를 두고 여러 행을 골라 보관, 삭제 같은 작업을 한 번에 하는 패턴입니다. 고르면 위에 선택 개수와 작업 버튼이 나타납니다.",
  tags: [...BASE_TAGS, "Checkbox", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/selectable-table/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/selectable-table/SelectableTableDemo").then(
      (m) => m.SelectableTableDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/selectable-table/SelectableTableThumbnail").then(
      (m) => m.SelectableTableThumbnail,
    ),
  sources: [
    {
      fileName: "SelectableTable.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/selectable-table/SelectableTable.tsx?raw"),
    },
    {
      fileName: "SelectableTableDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/selectable-table/SelectableTableDemo.tsx?raw"),
    },
  ],
};
