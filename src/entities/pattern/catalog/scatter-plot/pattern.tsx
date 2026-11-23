import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ScatterPlotThumbnail } from "@/entities/pattern/catalog/scatter-plot/ScatterPlotThumbnail";

export const scatterPlotPattern: Pattern = {
  slug: "scatter-plot",
  name: "Scatter Plot",
  nameKo: "산점도",
  aliases: ["분산형 차트", "점 그래프", "상관 차트", "scatter plot", "scatter chart"],
  category: "data-viz",
  summary: "두 값의 관계와 동떨어진 점",
  description:
    "두 값을 가로와 세로 위치로 삼아 점을 찍어, 함께 늘어나는지와 무리에서 동떨어진 점이 있는지 봅니다. 아무 곳이나 가리키면 가장 가까운 점을 읽어 주고, 평균선을 켜면 네 구역으로 나눠 볼 수 있습니다.",
  whenToUse: [
    "두 값의 관계(거리와 시간, 가격과 판매량)를 볼 때",
    "이상한 점을 찾을 때",
    "점이 수십 개 이상일 때",
  ],
  whenNotToUse: [
    "순서 있는 축의 변화(선 그래프 사용)",
    "세 번째 값까지 보여 줄 때(버블 차트 사용)",
    "점이 몇 개뿐일 때(표 사용)",
  ],
  alternatives: [
    { name: "버블 차트", slug: "bubble-chart", reason: "세 번째 값을 원 크기로 더할 때" },
    { name: "선 그래프", slug: "line-chart", reason: "시간 순서의 변화를 볼 때" },
  ],
  accessibility: [
    "가장 가까운 점을 찾아 주므로 작은 점을 정확히 가리키지 않아도 됩니다.",
    "점에 흰 테두리를 둬 겹쳐도 하나씩 보입니다.",
    "표로 보기를 펼치면 모든 점을 표로 볼 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/scatter-plot/ScatterPlotDemo").then(
      (m) => m.ScatterPlotDemo,
    ),
  Thumbnail: ScatterPlotThumbnail,
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
