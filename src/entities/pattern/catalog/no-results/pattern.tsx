import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const noResultsPattern: Pattern = {
  slug: "no-results",

  name: "No Results",
  nameKo: "검색 결과 없음",
  aliases: ["검색 실패", "결과 0건", "zero results", "empty search"],
  category: "empty-error",
  summary: "조건을 바꾸도록 돕는 빈 결과",
  description:
    "검색 결과가 없을 때 무엇을 찾았는지 다시 보여 주고, 비슷한 검색어와 고치는 방법을 제안하는 패턴입니다. 사용자가 빈 화면 앞에서 떠나지 않고 다음 검색을 하게 돕습니다.",
  tags: [...BASE_TAGS, "aria-live", "Search"],
  loadGuide: () => import("@/entities/pattern/catalog/no-results/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/no-results/NoResultsDemo").then((m) => m.NoResultsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/no-results/NoResultsThumbnail").then(
      (m) => m.NoResultsThumbnail,
    ),
  sources: [
    {
      fileName: "NoResults.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/no-results/NoResults.tsx?raw"),
    },
    {
      fileName: "NoResultsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/no-results/NoResultsDemo.tsx?raw"),
    },
  ],
};
