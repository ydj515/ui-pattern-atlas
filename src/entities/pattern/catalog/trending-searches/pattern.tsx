import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const trendingSearchesPattern: Pattern = {
  slug: "trending-searches",

  name: "Trending Searches",
  nameKo: "인기 검색어",
  aliases: ["실시간 검색어", "급상승 검색어", "검색어 순위", "trending", "popular searches"],
  category: "search-discovery",
  summary: "집계 기간과 함께 많이 찾는 검색어",
  description:
    "많이 찾거나 늘어난 검색어를 순위대로 보여 주는 목록입니다. 언제, 어떤 기간을 집계했는지 함께 적고 순위 변화는 모양 표시와 함께 화면 읽기 프로그램용 글자로도 알려 줍니다.",
  tags: [...BASE_TAGS, "ol", "sr-only"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/trending-searches/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/trending-searches/TrendingSearchesDemo").then(
      (m) => m.TrendingSearchesDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/trending-searches/TrendingSearchesThumbnail").then(
      (m) => m.TrendingSearchesThumbnail,
    ),
  sources: [
    {
      fileName: "TrendingSearches.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/trending-searches/TrendingSearches.tsx?raw"),
    },
    {
      fileName: "TrendingSearchesDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/trending-searches/TrendingSearchesDemo.tsx?raw"),
    },
  ],
};
