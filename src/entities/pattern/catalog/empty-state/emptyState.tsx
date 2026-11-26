import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const emptyStatePattern: Pattern = {
  slug: "empty-state",

  name: "Empty State",
  nameKo: "빈 화면",
  aliases: ["빈 상태", "결과 없음", "데이터 없음", "zero state", "no results"],
  category: "empty-error",
  summary: "보여줄 내용이 없을 때 이유와 다음 행동을 안내하는 화면",
  description:
    "목록이나 검색 결과가 비어 있을 때 빈 공간을 그대로 두지 않고, 왜 비어 있는지와 다음에 무엇을 하면 되는지 안내하는 패턴입니다.",
  tags: [...BASE_TAGS, "UX writing"],
  loadGuide: () => import("@/entities/pattern/catalog/empty-state/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/empty-state/EmptyStateDemo").then((m) => m.EmptyStateDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/empty-state/EmptyStateThumbnail").then(
      (m) => m.EmptyStateThumbnail,
    ),
  sources: [
    {
      fileName: "EmptyState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/empty-state/EmptyState.tsx?raw"),
    },
    {
      fileName: "EmptyStateDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/empty-state/EmptyStateDemo.tsx?raw"),
    },
  ],
};
