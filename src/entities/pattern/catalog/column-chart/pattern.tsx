import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const columnChartPattern: Pattern = {
  slug: "column-chart",

  name: "Column Chart",
  nameKo: "세로 막대 그래프",
  aliases: ["세로 막대", "컬럼 차트", "월별 막대 그래프", "column chart", "vertical bar chart"],
  category: "data-viz",
  summary: "순서 있는 범주를 세로 막대 높이로 비교",
  description:
    "월, 분기처럼 순서가 있는 범주의 크기를 0에서 시작하는 세로 막대 높이로 비교합니다. 기간을 바꿔도 같은 눈금을 유지해 높이를 그대로 비교할 수 있고, 막대를 가리키면 값이 나옵니다.",
  tags: [...BASE_TAGS, "CSS flex", "details", "transition"],
  loadGuide: () => import("@/entities/pattern/catalog/column-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/column-chart/ColumnChartDemo").then(
      (m) => m.ColumnChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/column-chart/ColumnChartThumbnail").then(
      (m) => m.ColumnChartThumbnail,
    ),
  sources: [
    {
      fileName: "ColumnChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/column-chart/ColumnChart.tsx?raw"),
    },
    {
      fileName: "ColumnChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/column-chart/ColumnChartDemo.tsx?raw"),
    },
  ],
};
