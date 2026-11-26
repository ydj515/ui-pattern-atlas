import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const loadMorePattern: Pattern = {
  slug: "load-more",
  name: "Load More",
  nameKo: "더 보기 버튼",
  aliases: ["더보기", "이어 보기", "load more button", "show more"],
  category: "navigation",
  summary: "눌러서 이어 보기",
  description:
    "목록 끝의 버튼을 누를 때만 다음 묶음을 붙이는 패턴입니다. 몇 개를 봤고 모두 몇 개인지 알려 주고, 새로 붙은 첫 항목으로 포커스를 옮겨 이어서 보게 합니다.",
  whenToUse: [
    "상품, 후기처럼 전체 개수를 알 수 있는 목록",
    "목록 아래에 바닥글이나 다른 내용이 있을 때",
    "사용자가 직접 더 볼지 정하게 할 때",
  ],
  whenNotToUse: [
    "끝없이 훑어보는 피드(무한 스크롤 사용)",
    "특정 쪽으로 바로 가야 할 때(페이지네이션 사용)",
    "항목이 몇 개뿐일 때(모두 보여 주기)",
  ],
  alternatives: [
    { name: "무한 스크롤", slug: "infinite-scroll", reason: "계속 훑어보는 피드" },
    { name: "페이지네이션", slug: "pagination", reason: "쪽 번호로 위치를 기억할 때" },
  ],
  accessibility: [
    '버튼 이름에 "(6/24)"처럼 본 개수와 전체 개수를 넣습니다.',
    "불러온 뒤 첫 새 항목으로 포커스를 옮겨 키보드 사용자가 처음부터 다시 오지 않게 합니다.",
    '불러오는 동안 버튼은 "불러오는 중"으로 바뀌고 꺼집니다.',
    "모두 보이면 버튼을 없앱니다.",
  ],
  tags: [...BASE_TAGS, "Focus management", "Pagination"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/load-more/LoadMoreDemo").then((m) => m.LoadMoreDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/load-more/LoadMoreThumbnail").then(
      (m) => m.LoadMoreThumbnail,
    ),
  sources: [
    {
      fileName: "LoadMore.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/load-more/LoadMore.tsx?raw"),
    },
    {
      fileName: "LoadMoreDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/load-more/LoadMoreDemo.tsx?raw"),
    },
  ],
};
