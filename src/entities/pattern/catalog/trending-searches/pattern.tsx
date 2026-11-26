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
  whenToUse: [
    "무엇을 찾을지 정하지 않은 사람에게 출발점을 줄 때",
    "계절, 이벤트처럼 관심사가 빨리 바뀔 때",
    "검색창이 비어 있을 때",
  ],
  whenNotToUse: [
    "집계 기간이나 기준을 밝힐 수 없을 때",
    "검색량이 적어 순위가 의미 없을 때",
    "광고 상품을 인기 검색어처럼 섞을 때(위장 광고)",
  ],
  alternatives: [
    { name: "최근 검색어", slug: "recent-searches", reason: "내가 전에 찾은 말을 다시 쓸 때" },
    {
      name: "위장 광고",
      slug: "disguised-ads",
      reason: "광고를 인기 항목처럼 보이면 생기는 문제를 볼 때",
    },
  ],
  accessibility: [
    "순위는 ol 목록이라 몇 번째인지 함께 읽힙니다.",
    "▲▼ 표시는 aria-hidden이고, 상승·하락 같은 글자를 따로 읽어 줍니다.",
    "집계 기준은 제목 옆 글자로 늘 보입니다.",
  ],
  tags: [...BASE_TAGS, "ol", "sr-only"],
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
