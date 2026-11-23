import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RecentSearchesThumbnail } from "@/entities/pattern/catalog/recent-searches/RecentSearchesThumbnail";

export const recentSearchesPattern: Pattern = {
  slug: "recent-searches",
  name: "Recent Searches",
  nameKo: "최근 검색어",
  aliases: ["검색 기록", "최근 검색", "검색어 기록 삭제", "recent searches", "search history"],
  category: "search-discovery",
  summary: "전에 쓴 검색어를 다시 실행하거나 삭제",
  description:
    "검색창을 열었을 때 전에 검색한 말을 최신 순으로 보여 주는 목록입니다. 누르면 같은 검색을 바로 다시 하고, 검색어마다 지우기 버튼과 전체 삭제가 있어 기록을 직접 정리할 수 있습니다.",
  whenToUse: [
    "같은 검색을 자주 반복하는 서비스",
    "검색창을 눌렀지만 아직 입력하지 않았을 때",
    "검색어를 다시 입력하기 번거로울 때",
  ],
  whenNotToUse: [
    "기기를 여러 사람이 함께 쓸 때(기록 저장 끄기 제공)",
    "검색어가 민감할 수 있을 때",
    "검색이 드문 서비스",
  ],
  alternatives: [
    {
      name: "인기 검색어",
      slug: "trending-searches",
      reason: "내 기록 대신 많이 찾는 말을 보여 줄 때",
    },
    { name: "검색어 추천", slug: "search-suggestions", reason: "입력을 시작한 뒤 제안할 때" },
  ],
  accessibility: [
    "목록은 제목과 연결된 section이라 영역 이름으로 찾을 수 있습니다.",
    '지우기 버튼은 "캔버스 백 삭제"처럼 검색어가 들어간 이름을 가집니다.',
    "기록이 없으면 빈 목록 대신 안내 문구를 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "button", "aria-label"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/recent-searches/RecentSearchesDemo").then(
      (m) => m.RecentSearchesDemo,
    ),
  Thumbnail: RecentSearchesThumbnail,
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
