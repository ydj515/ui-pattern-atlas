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
  whenToUse: [
    "상품, 브랜드, 게시글처럼 결과 종류가 다를 때",
    "종류마다 결과 모양이 달라 섞기 어려울 때",
    "통합 검색에서 범위를 좁힐 때",
  ],
  whenNotToUse: [
    "같은 종류 안에서 조건을 걸 때(검색 결과 필터 사용)",
    "범위가 여섯 개 이상일 때",
    "결과가 적어 한 목록으로 충분할 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "검색과 상관없이 내용 묶음을 바꿀 때" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "보기 방식만 바꿀 때" },
  ],
  accessibility: [
    "tablist, tab, tabpanel 역할과 aria-selected, aria-controls를 씁니다.",
    "←/→, Home, End로 탭을 옮기면 바로 결과가 바뀝니다.",
    "선택한 탭만 Tab 순서에 들어가 탭 목록을 한 번에 지나갑니다.",
    "탭 이름에 결과 수를 함께 적어 읽어 줍니다.",
  ],
  tags: [...BASE_TAGS, "tablist", "roving tabindex"],
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
