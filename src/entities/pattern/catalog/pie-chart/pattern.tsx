import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pieChartPattern: Pattern = {
  slug: "pie-chart",

  name: "Pie Chart",
  nameKo: "파이 차트",
  aliases: ["원 그래프", "원형 차트", "비율 차트", "pie chart", "pie graph"],
  category: "data-viz",
  summary: "전체를 이루는 몇 개 항목의 비중",
  description:
    "원 하나를 항목의 비중만큼 조각으로 나눕니다. 큰 조각에는 비율을 직접 적고, 범례에는 값과 비율을 모두 적습니다. 조각이나 범례를 가리키면 그 항목만 진하게 남습니다.",
  tags: [...BASE_TAGS, "SVG", "path", "button"],
  loadGuide: () => import("@/entities/pattern/catalog/pie-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pie-chart/PieChartDemo").then((m) => m.PieChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pie-chart/PieChartThumbnail").then(
      (m) => m.PieChartThumbnail,
    ),
  sources: [
    {
      fileName: "PieChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/pie-chart/PieChart.tsx?raw"),
    },
    {
      fileName: "PieChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/pie-chart/PieChartDemo.tsx?raw"),
    },
  ],
};
