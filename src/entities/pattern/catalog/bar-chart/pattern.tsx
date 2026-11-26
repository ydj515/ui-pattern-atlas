import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const barChartPattern: Pattern = {
  slug: "bar-chart",

  name: "Bar Chart",
  nameKo: "막대 그래프",
  aliases: ["막대 차트", "가로 막대", "바 차트", "bar graph", "horizontal bar"],
  category: "data-viz",
  summary: "범주별 크기를 길이로 비교",
  description:
    "요일, 지역처럼 나뉜 항목의 크기를 0에서 시작하는 막대 길이로 비교합니다. 항목 이름과 값을 글자로 함께 적어 막대 없이도 읽히고, 데이터가 바뀌면 막대가 새 길이로 부드럽게 바뀝니다.",
  tags: [...BASE_TAGS, "figure", "figcaption", "transition"],
  loadGuide: () => import("@/entities/pattern/catalog/bar-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bar-chart/BarChartDemo").then((m) => m.BarChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bar-chart/BarChartThumbnail").then(
      (m) => m.BarChartThumbnail,
    ),
  sources: [
    {
      fileName: "BarChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bar-chart/BarChart.tsx?raw"),
    },
    {
      fileName: "BarChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bar-chart/BarChartDemo.tsx?raw"),
    },
  ],
};
