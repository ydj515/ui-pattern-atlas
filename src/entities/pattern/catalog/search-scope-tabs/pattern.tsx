import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchScopeTabsPattern: Pattern = {
  slug: "search-scope-tabs",

  name: "Search Scope Tabs",
  nameKo: "검색 범위 탭",
  aliases: ["검색 탭", "검색 대상 선택", "통합 검색 탭", "search scope", "search tabs"],
  category: "search-discovery",
  summary: "전체·상품·브랜드로 검색 범위 전환",
  description:
    "같은 검색어를 어디에서 찾을지 바꾸는 탭입니다. 탭마다 결과 수를 보여 줘 어디에 결과가 있는지 미리 알 수 있고, 탭을 바꿔도 검색어는 그대로 유지됩니다.",
  tags: [...BASE_TAGS, "tablist", "roving tabindex"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/search-scope-tabs/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-scope-tabs/SearchScopeTabsDemo").then(
      (m) => m.SearchScopeTabsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-scope-tabs/SearchScopeTabsThumbnail").then(
      (m) => m.SearchScopeTabsThumbnail,
    ),
  sources: [
    {
      fileName: "SearchScopeTabs.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-scope-tabs/SearchScopeTabs.tsx?raw"),
    },
    {
      fileName: "SearchScopeTabsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/search-scope-tabs/SearchScopeTabsDemo.tsx?raw"),
    },
  ],
};
