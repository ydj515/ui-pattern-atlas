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
  whenToUse: [
    "결과가 왜 나왔는지 바로 보여 줄 때",
    "제목이 길어 검색어 위치를 찾기 어려울 때",
    "여러 단어로 검색했을 때 어떤 단어가 맞았는지 보여 줄 때",
  ],
  whenNotToUse: [
    "철자 교정이나 동의어로 찾은 결과처럼 글자가 일치하지 않을 때",
    "강조가 너무 많아 문장을 읽기 어려울 때",
    "검색과 상관없는 강조",
  ],
  alternatives: [
    {
      name: "검색어 추천",
      slug: "search-suggestions",
      reason: "입력 중에 덧붙일 부분을 굵게 보여 줄 때",
    },
    { name: "검색 결과 필터", slug: "search-filters", reason: "결과를 좁혀야 할 때" },
  ],
  accessibility: [
    "일치 부분은 mark 요소라 의미가 함께 전달됩니다.",
    "배경색과 함께 굵기를 바꿔 색만으로 구분하지 않습니다.",
    "정규식 특수 문자를 이스케이프해 어떤 검색어도 안전하게 처리합니다.",
  ],
  tags: [...BASE_TAGS, "mark", "RegExp"],
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
