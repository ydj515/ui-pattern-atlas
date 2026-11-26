import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

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
  tags: [...BASE_TAGS, "combobox", "listbox", "aria-activedescendant", "role=search"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/search-suggestions/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-suggestions/SearchSuggestionsDemo").then(
      (m) => m.SearchSuggestionsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-suggestions/SearchSuggestionsThumbnail").then(
      (m) => m.SearchSuggestionsThumbnail,
    ),
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
