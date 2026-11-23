import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SearchFiltersThumbnail } from "@/entities/pattern/catalog/search-filters/SearchFiltersThumbnail";

export const searchFiltersPattern: Pattern = {
  slug: "search-filters",
  name: "Search Filters",
  nameKo: "검색 결과 필터",
  aliases: ["필터", "조건 검색", "상세 검색", "faceted search", "filters"],
  category: "search-discovery",
  summary: "조건으로 결과를 좁히고 적용한 조건을 요약",
  description:
    "가격, 색상 같은 조건을 골라 검색 결과를 좁히는 필터입니다. 고르는 즉시 결과 수가 바뀌고, 적용한 조건은 결과 위에 칩으로 모여 하나씩 빼거나 모두 지울 수 있습니다.",
  whenToUse: [
    "결과가 많아 조건으로 좁혀야 할 때",
    "가격, 크기, 색처럼 정해진 속성이 있을 때",
    "여러 조건을 함께 걸어야 할 때",
  ],
  whenNotToUse: [
    "결과가 몇 개뿐일 때",
    "조건이 하나라 탭이나 정렬로 충분할 때(검색 범위 탭 사용)",
    "조건이 수십 개라 별도 화면이 필요할 때",
  ],
  alternatives: [
    { name: "필터 칩", slug: "filter-chip", reason: "조건 몇 개를 한 줄로 고를 때" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "조건 때문에 결과가 0개일 때" },
  ],
  accessibility: [
    "조건 묶음은 fieldset과 legend로 이름을 붙입니다.",
    "조건은 체크박스라 Space로 켜고 끕니다.",
    "바뀐 결과 수는 aria-live로 읽어 줍니다.",
    '요약 칩은 "흰색 필터 해제"처럼 무엇을 빼는지 이름에 적습니다.',
  ],
  tags: [...BASE_TAGS, "fieldset", "checkbox", "aria-live", "has-checked"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-filters/SearchFiltersDemo").then(
      (m) => m.SearchFiltersDemo,
    ),
  Thumbnail: SearchFiltersThumbnail,
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
