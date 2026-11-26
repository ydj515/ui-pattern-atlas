import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const donutChartPattern: Pattern = {
  slug: "donut-chart",

  name: "Donut Chart",
  nameKo: "도넛 차트",
  aliases: ["원형 차트", "파이 차트", "구성비 차트", "donut", "pie chart"],
  category: "data-viz",
  summary: "전체를 이루는 항목의 비중",
  description:
    "전체를 이루는 몇 개 항목의 비중을 고리 조각으로 보여 줍니다. 가운데에는 합계가 있고, 조각이나 범례를 가리키면 그 항목의 비율로 바뀝니다. 범례에 값과 비율을 모두 적고 기타는 회색으로 둡니다.",
  tags: [...BASE_TAGS, "SVG", "stroke-dasharray", "button"],
  loadGuide: () => import("@/entities/pattern/catalog/donut-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/donut-chart/DonutChartDemo").then((m) => m.DonutChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/donut-chart/DonutChartThumbnail").then(
      (m) => m.DonutChartThumbnail,
    ),
  sources: [
    {
      fileName: "DonutChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/donut-chart/DonutChart.tsx?raw"),
    },
    {
      fileName: "DonutChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/donut-chart/DonutChartDemo.tsx?raw"),
    },
  ],
};
