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
  tags: [...BASE_TAGS, "Focus management", "Pagination"],
  loadGuide: () => import("@/entities/pattern/catalog/load-more/guide").then((m) => m.guide),
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
