import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchFieldPattern: Pattern = {
  slug: "search-field",

  name: "Search Field",
  nameKo: "검색창",
  aliases: ["검색 입력", "검색 박스", "search input", "search box"],
  category: "text-input",
  summary: "지우기 버튼과 단축키가 있는 검색 입력",
  description:
    "검색어를 입력하는 필드에 지우기 버튼과 바로 이동 단축키(/)를 더한 패턴입니다. 입력하는 대로 목록을 좁히고, 한 번에 검색어를 지우고 다시 쓸 수 있습니다.",
  tags: [...BASE_TAGS, "role=search", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/search-field/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-field/SearchFieldDemo").then(
      (m) => m.SearchFieldDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-field/SearchFieldThumbnail").then(
      (m) => m.SearchFieldThumbnail,
    ),
  sources: [
    {
      fileName: "SearchField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-field/SearchField.tsx?raw"),
    },
    {
      fileName: "SearchFieldDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/search-field/SearchFieldDemo.tsx?raw"),
    },
  ],
};
