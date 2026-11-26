import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchFiltersPattern: Pattern = {
  slug: "search-filters",

  name: "Search Filters",
  nameKo: "검색 결과 필터",
  aliases: ["필터", "조건 검색", "상세 검색", "faceted search", "filters"],
  category: "search-discovery",
  summary: "조건으로 결과를 좁히고 적용한 조건을 요약",
  description:
    "가격, 색상 같은 조건을 골라 검색 결과를 좁히는 필터입니다. 고르는 즉시 결과 수가 바뀌고, 적용한 조건은 결과 위에 칩으로 모여 하나씩 빼거나 모두 지울 수 있습니다.",
  tags: [...BASE_TAGS, "fieldset", "checkbox", "aria-live", "has-checked"],
  loadGuide: () => import("@/entities/pattern/catalog/search-filters/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-filters/SearchFiltersDemo").then(
      (m) => m.SearchFiltersDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-filters/SearchFiltersThumbnail").then(
      (m) => m.SearchFiltersThumbnail,
    ),
  sources: [
    {
      fileName: "SearchFilters.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-filters/SearchFilters.tsx?raw"),
    },
    {
      fileName: "SearchFiltersDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/search-filters/SearchFiltersDemo.tsx?raw"),
    },
  ],
};
