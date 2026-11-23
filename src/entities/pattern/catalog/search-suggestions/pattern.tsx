import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SearchSuggestionsThumbnail } from "@/entities/pattern/catalog/search-suggestions/SearchSuggestionsThumbnail";

export const searchSuggestionsPattern: Pattern = {
  slug: "search-suggestions",
  name: "Search Suggestions",
  nameKo: "검색어 추천",
  aliases: [
    "자동 완성",
    "검색어 자동완성",
    "연관 검색어",
    "autocomplete",
    "search autocomplete",
    "typeahead",
  ],
  category: "search-discovery",
  summary: "입력 중인 검색어를 완성해 제안",
  description:
    "검색창에 입력하는 동안 이어질 검색어를 목록으로 제안합니다. 입력한 부분은 그대로 두고 추천이 덧붙이는 부분만 굵게 보여 주며, 미리 골라 둔 항목이 없어서 Enter는 언제나 입력한 그대로 검색합니다.",
  whenToUse: [
    "상품, 장소처럼 검색어가 어느 정도 정해진 서비스",
    "철자나 띄어쓰기가 헷갈리는 이름",
    "긴 검색어를 덜 입력하게 할 때",
  ],
  whenNotToUse: [
    "정해진 목록에서만 골라야 할 때(콤보박스 사용)",
    "추천할 데이터가 충분하지 않을 때",
    "입력 내용이 민감해 추천을 보이면 안 될 때",
  ],
  alternatives: [
    { name: "콤보박스", slug: "combobox", reason: "목록 안의 값만 고르게 할 때" },
    { name: "검색창", slug: "search-field", reason: "추천 없이 바로 검색할 때" },
  ],
  accessibility: [
    '입력창은 role="combobox"이고 추천 목록은 listbox입니다.',
    "↑/↓로 추천을 옮기면 aria-activedescendant로 알려 주고, 포커스는 입력창에 남습니다.",
    "Esc로 목록을 닫고, 한글 조합 중에는 키 입력을 가로채지 않습니다.",
    'form에 role="search"를 붙여 검색 영역으로 찾을 수 있습니다.',
  ],
  tags: [...BASE_TAGS, "combobox", "listbox", "aria-activedescendant", "role=search"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-suggestions/SearchSuggestionsDemo").then(
      (m) => m.SearchSuggestionsDemo,
    ),
  Thumbnail: SearchSuggestionsThumbnail,
  sources: [
    {
      fileName: "SearchSuggestions.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-suggestions/SearchSuggestions.tsx?raw"),
    },
    {
      fileName: "SearchSuggestionsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/search-suggestions/SearchSuggestionsDemo.tsx?raw"),
    },
  ],
};
