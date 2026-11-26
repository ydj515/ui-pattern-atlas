import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dataTablePattern: Pattern = {
  slug: "data-table",

  name: "Data Table",
  nameKo: "데이터 테이블",
  aliases: ["표", "정렬 표", "table", "sortable table"],
  category: "list-table",
  summary: "열 기준으로 데이터를 비교하고 정렬",
  description:
    "행과 열로 된 표에서 열 머리글을 눌러 정렬하며 값을 비교하는 패턴입니다. 숫자는 오른쪽 정렬과 같은 폭 숫자로 자릿수를 맞추고, 스크롤해도 머리글이 남습니다.",
  tags: [...BASE_TAGS, "aria-sort", "table"],
  loadGuide: () => import("@/entities/pattern/catalog/data-table/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/data-table/DataTableDemo").then((m) => m.DataTableDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/data-table/DataTableThumbnail").then(
      (m) => m.DataTableThumbnail,
    ),
  sources: [
    {
      fileName: "DataTable.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/data-table/DataTable.tsx?raw"),
    },
    {
      fileName: "DataTableDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/data-table/DataTableDemo.tsx?raw"),
    },
  ],
};
