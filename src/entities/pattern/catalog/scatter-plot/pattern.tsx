import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scatterPlotPattern: Pattern = {
  slug: "scatter-plot",

  name: "Scatter Plot",
  nameKo: "산점도",
  aliases: ["분산형 차트", "점 그래프", "상관 차트", "scatter plot", "scatter chart"],
  category: "data-viz",
  summary: "두 값의 관계와 동떨어진 점",
  description:
    "두 값을 가로와 세로 위치로 삼아 점을 찍어, 함께 늘어나는지와 무리에서 동떨어진 점이 있는지 봅니다. 아무 곳이나 가리키면 가장 가까운 점을 읽어 주고, 평균선을 켜면 네 구역으로 나눠 볼 수 있습니다.",
  tags: [...BASE_TAGS, "SVG", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/scatter-plot/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scatter-plot/ScatterPlotDemo").then(
      (m) => m.ScatterPlotDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scatter-plot/ScatterPlotThumbnail").then(
      (m) => m.ScatterPlotThumbnail,
    ),
  sources: [
    {
      fileName: "ScatterPlot.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scatter-plot/ScatterPlot.tsx?raw"),
    },
    {
      fileName: "ScatterPlotDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scatter-plot/ScatterPlotDemo.tsx?raw"),
    },
  ],
};
