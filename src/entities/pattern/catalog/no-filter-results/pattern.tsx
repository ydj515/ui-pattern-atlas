import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const noFilterResultsPattern: Pattern = {
  slug: "no-filter-results",

  name: "No Filter Results",
  nameKo: "필터 결과 없음",
  aliases: ["필터 결과 0건", "조건 결과 없음", "empty filter", "no matches"],
  category: "empty-error",
  summary: "적용한 필터를 보여 주고 완화를 제안하는 빈 결과",
  description:
    "필터를 너무 많이 걸어 결과가 없을 때 지금 걸린 필터를 보여 주고, 그 자리에서 하나씩 빼거나 모두 지울 수 있게 하는 패턴입니다. 어느 조건 때문에 비었는지 사용자가 바로 고칠 수 있습니다.",
  tags: [...BASE_TAGS, "aria-live", "Filters"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/no-filter-results/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/no-filter-results/NoFilterResultsDemo").then(
      (m) => m.NoFilterResultsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/no-filter-results/NoFilterResultsThumbnail").then(
      (m) => m.NoFilterResultsThumbnail,
    ),
  sources: [
    {
      fileName: "NoFilterResults.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/no-filter-results/NoFilterResults.tsx?raw"),
    },
    {
      fileName: "NoFilterResultsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/no-filter-results/NoFilterResultsDemo.tsx?raw"),
    },
  ],
};
