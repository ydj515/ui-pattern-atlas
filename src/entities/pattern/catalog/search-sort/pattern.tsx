import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const searchSortPattern: Pattern = {
  slug: "search-sort",
  name: "Search Sort",
  nameKo: "검색 결과 정렬",
  aliases: ["정렬", "정렬 순서", "추천순 가격순", "sort by", "sort menu"],
  category: "search-discovery",
  summary: "추천순·가격순으로 결과 순서 바꾸기",
  description:
    "검색 결과의 순서를 바꾸는 메뉴 버튼입니다. 버튼에는 지금 정렬 기준이 보이고, 열면 고를 수 있는 순서가 체크 표시와 함께 나옵니다. 고르면 메뉴가 닫히고 목록이 다시 정렬됩니다.",
  whenToUse: [
    "가격, 리뷰 수처럼 비교할 기준이 있을 때",
    "결과가 한 화면을 넘을 때",
    "기본 순서가 추천처럼 기준을 알기 어려울 때",
  ],
  whenNotToUse: [
    "결과를 좁혀야 할 때(검색 결과 필터 사용)",
    "직접 순서를 바꿔야 할 때(순서 바꾸기 목록 사용)",
    "기준이 두 개뿐이라 토글로 충분할 때",
  ],
  alternatives: [
    { name: "검색 결과 필터", slug: "search-filters", reason: "순서 대신 결과 수를 줄일 때" },
    { name: "순서 바꾸기 목록", slug: "sortable-list", reason: "사람이 직접 순서를 정할 때" },
  ],
  accessibility: [
    '버튼은 aria-haspopup="menu"와 aria-expanded로 메뉴를 알립니다.',
    "항목은 menuitemradio이고 지금 순서에 aria-checked가 붙습니다.",
    "열면 현재 순서에 포커스가 가고 ↑/↓로 옮기며, Esc는 버튼으로 돌아갑니다.",
  ],
  tags: [...BASE_TAGS, "menu", "menuitemradio", "aria-haspopup"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-sort/SearchSortDemo").then((m) => m.SearchSortDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/search-sort/SearchSortThumbnail").then(
      (m) => m.SearchSortThumbnail,
    ),
  sources: [
    {
      fileName: "SearchSort.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-sort/SearchSort.tsx?raw"),
    },
    {
      fileName: "SearchSortDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/search-sort/SearchSortDemo.tsx?raw"),
    },
  ],
};
