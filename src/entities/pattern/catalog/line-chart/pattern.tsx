import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const lineChartPattern: Pattern = {
  slug: "line-chart",

  name: "Line Chart",
  nameKo: "선 그래프",
  aliases: ["꺾은선 그래프", "추이 그래프", "시계열 차트", "line graph", "time series"],
  category: "data-viz",
  summary: "순서 있는 축에서 값의 변화 추적",
  description:
    "월, 주처럼 순서가 있는 축을 따라 값이 어떻게 바뀌는지 2px 선으로 보여 줍니다. 포인터나 좌우 화살표로 기준선을 옮기면 그 지점의 모든 계열 값을 한 줄로 읽어 주고, 선 끝과 범례에 계열 이름을 적습니다.",
  tags: [...BASE_TAGS, "SVG", "aria-live", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/line-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/line-chart/LineChartDemo").then((m) => m.LineChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/line-chart/LineChartThumbnail").then(
      (m) => m.LineChartThumbnail,
    ),
  sources: [
    {
      fileName: "LineChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/line-chart/LineChart.tsx?raw"),
    },
    {
      fileName: "LineChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/line-chart/LineChartDemo.tsx?raw"),
    },
  ],
};
