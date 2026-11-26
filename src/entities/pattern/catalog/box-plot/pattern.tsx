import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const boxPlotPattern: Pattern = {
  slug: "box-plot",

  name: "Box Plot",
  nameKo: "상자 그림",
  aliases: ["박스 플롯", "상자 수염 그림", "사분위 차트", "box plot", "box and whisker"],
  category: "data-viz",
  summary: "중앙값, 가운데 50%, 범위로 분포 요약",
  description:
    "그룹마다 값의 가운데 절반을 상자로, 중앙값을 선으로, 보통의 범위를 수염으로, 그 밖에 동떨어진 값을 점으로 그립니다. 평균 하나로는 보이지 않는 퍼짐과 치우침을 여러 그룹에서 나란히 비교합니다.",
  tags: [...BASE_TAGS, "quantile", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/box-plot/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/box-plot/BoxPlotDemo").then((m) => m.BoxPlotDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/box-plot/BoxPlotThumbnail").then((m) => m.BoxPlotThumbnail),
  sources: [
    {
      fileName: "BoxPlot.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/box-plot/BoxPlot.tsx?raw"),
    },
    {
      fileName: "BoxPlotDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/box-plot/BoxPlotDemo.tsx?raw"),
    },
  ],
};
