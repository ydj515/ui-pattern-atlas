import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const listPattern: Pattern = {
  slug: "list",

  name: "List",
  nameKo: "리스트",
  aliases: ["목록", "리스트 행", "list item", "row list"],
  category: "list-table",
  summary: "아이콘, 제목, 부가 정보가 있는 행",
  description:
    "아이콘, 제목, 두 번째 줄, 오른쪽 값을 한 줄에 모아 여러 항목을 훑어보게 하는 기본 목록입니다. 행 전체가 하나의 버튼이라 어디를 눌러도 열립니다.",
  tags: [...BASE_TAGS, "List", "Button"],
  loadGuide: () => import("@/entities/pattern/catalog/list/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/list/ListDemo").then((m) => m.ListDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/list/ListThumbnail").then((m) => m.ListThumbnail),
  sources: [
    {
      fileName: "List.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/list/List.tsx?raw"),
    },
    {
      fileName: "ListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/list/ListDemo.tsx?raw"),
    },
  ],
};
