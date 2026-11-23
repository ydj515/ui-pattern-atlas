import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TreemapThumbnail } from "@/entities/pattern/catalog/treemap/TreemapThumbnail";

export const treemapPattern: Pattern = {
  slug: "treemap",
  name: "Treemap",
  nameKo: "트리맵",
  aliases: ["트리 맵", "면적 차트", "사각형 비율 차트", "treemap", "squarified treemap"],
  category: "data-viz",
  summary: "전체를 사각형 면적으로 나눠 크기 비교",
  description:
    "전체 사각형을 항목의 값만큼 작은 사각형으로 나눕니다. 큰 항목부터 정사각형에 가깝게 배치해 면적을 비교하기 쉽게 하고, 자리가 넉넉한 칸에는 이름과 값을 직접 적습니다.",
  origin:
    "1990년대 초 벤 슈나이더만(Ben Shneiderman)이 하드디스크에서 어떤 폴더가 공간을 차지하는지 보려고 고안했어요. 나무(tree) 구조를 지도(map)처럼 펼친다는 뜻이에요.",
  whenToUse: [
    "저장 공간, 예산처럼 전체를 이루는 항목이 많을 때",
    "어느 항목이 대부분을 차지하는지 보여 줄 때",
    "원형 차트에 넣기엔 항목이 다섯 개를 넘을 때",
  ],
  whenNotToUse: [
    "비슷한 크기를 정확히 비교할 때(막대 그래프 사용)",
    "시간에 따른 변화(영역 그래프 사용)",
    "항목이 두세 개뿐일 때(파이 차트 사용)",
  ],
  alternatives: [
    { name: "파이 차트", slug: "pie-chart", reason: "항목이 몇 개뿐일 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "정확한 크기 비교가 중요할 때" },
  ],
  accessibility: [
    "색 대신 칸 안의 이름과 값으로 항목을 구분합니다.",
    "작은 칸은 가리키면 이름과 비율을 읽어 줍니다.",
    "표로 보기에 모든 항목과 비율을 적습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "squarify", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/treemap/TreemapDemo").then((m) => m.TreemapDemo),
  Thumbnail: TreemapThumbnail,
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
