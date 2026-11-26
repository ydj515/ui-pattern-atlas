import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchSortPattern: Pattern = {
  slug: "search-sort",

  name: "Search Sort",
  nameKo: "검색 결과 정렬",
  aliases: ["정렬", "정렬 순서", "추천순 가격순", "sort by", "sort menu"],
  category: "search-discovery",
  summary: "추천순·가격순으로 결과 순서 바꾸기",
  description:
    "검색 결과의 순서를 바꾸는 메뉴 버튼입니다. 버튼에는 지금 정렬 기준이 보이고, 열면 고를 수 있는 순서가 체크 표시와 함께 나옵니다. 고르면 메뉴가 닫히고 목록이 다시 정렬됩니다.",
  tags: [...BASE_TAGS, "menu", "menuitemradio", "aria-haspopup"],
  loadGuide: () => import("@/entities/pattern/catalog/search-sort/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-sort/SearchSortDemo").then((m) => m.SearchSortDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-sort/SearchSortThumbnail").then(
      (m) => m.SearchSortThumbnail,
    ),
  sources: [
    {
      fileName: "SearchSort.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-sort/SearchSort.tsx?raw"),
    },
    {
      fileName: "SearchSortDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/search-sort/SearchSortDemo.tsx?raw"),
    },
  ],
};
