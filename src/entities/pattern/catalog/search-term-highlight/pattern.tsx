import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchTermHighlightPattern: Pattern = {
  slug: "search-term-highlight",

  name: "Search Term Highlight",
  nameKo: "검색어 강조",
  aliases: [
    "검색어 하이라이트",
    "일치 부분 표시",
    "mark",
    "highlight matches",
    "keyword highlight",
  ],
  category: "search-discovery",
  summary: "결과 문구에서 검색어와 맞는 부분 표시",
  description:
    "검색 결과의 문구 안에서 검색어와 일치하는 부분을 표시합니다. 띄어 쓴 단어마다 따로 찾고 대소문자는 가리지 않으며, 글자 자체는 바꾸지 않아 읽는 내용이 그대로입니다.",
  tags: [...BASE_TAGS, "mark", "RegExp"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/search-term-highlight/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-term-highlight/SearchTermHighlightDemo").then(
      (m) => m.SearchTermHighlightDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-term-highlight/SearchTermHighlightThumbnail").then(
      (m) => m.SearchTermHighlightThumbnail,
    ),
  sources: [
    {
      fileName: "HighlightText.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-term-highlight/HighlightText.tsx?raw"),
    },
    {
      fileName: "SearchTermHighlightDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/search-term-highlight/SearchTermHighlightDemo.tsx?raw"),
    },
  ],
};
