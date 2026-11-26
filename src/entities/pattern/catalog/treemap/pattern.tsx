import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const treemapPattern: Pattern = {
  slug: "treemap",

  name: "Treemap",
  nameKo: "트리맵",
  aliases: ["트리 맵", "면적 차트", "사각형 비율 차트", "treemap", "squarified treemap"],
  category: "data-viz",
  summary: "전체를 사각형 면적으로 나눠 크기 비교",
  description:
    "전체 사각형을 항목의 값만큼 작은 사각형으로 나눕니다. 큰 항목부터 정사각형에 가깝게 배치해 면적을 비교하기 쉽게 하고, 자리가 넉넉한 칸에는 이름과 값을 직접 적습니다.",
  tags: [...BASE_TAGS, "SVG", "squarify", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/treemap/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/treemap/TreemapDemo").then((m) => m.TreemapDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/treemap/TreemapThumbnail").then((m) => m.TreemapThumbnail),
  sources: [
    {
      fileName: "Treemap.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/treemap/Treemap.tsx?raw"),
    },
    {
      fileName: "TreemapDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/treemap/TreemapDemo.tsx?raw"),
    },
  ],
};
