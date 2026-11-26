import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const recentSearchesPattern: Pattern = {
  slug: "recent-searches",

  name: "Recent Searches",
  nameKo: "최근 검색어",
  aliases: ["검색 기록", "최근 검색", "검색어 기록 삭제", "recent searches", "search history"],
  category: "search-discovery",
  summary: "전에 쓴 검색어를 다시 실행하거나 삭제",
  description:
    "검색창을 열었을 때 전에 검색한 말을 최신 순으로 보여 주는 목록입니다. 누르면 같은 검색을 바로 다시 하고, 검색어마다 지우기 버튼과 전체 삭제가 있어 기록을 직접 정리할 수 있습니다.",
  tags: [...BASE_TAGS, "button", "aria-label"],
  loadGuide: () => import("@/entities/pattern/catalog/recent-searches/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/recent-searches/RecentSearchesDemo").then(
      (m) => m.RecentSearchesDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/recent-searches/RecentSearchesThumbnail").then(
      (m) => m.RecentSearchesThumbnail,
    ),
  sources: [
    {
      fileName: "RecentSearches.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/recent-searches/RecentSearches.tsx?raw"),
    },
    {
      fileName: "RecentSearchesDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/recent-searches/RecentSearchesDemo.tsx?raw"),
    },
  ],
};
