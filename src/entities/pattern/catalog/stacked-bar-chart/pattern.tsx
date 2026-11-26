import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const stackedBarChartPattern: Pattern = {
  slug: "stacked-bar-chart",

  name: "Stacked Bar Chart",
  nameKo: "누적 막대 그래프",
  aliases: ["누적 막대", "100% 막대", "구성 막대", "stacked bar", "100% stacked bar"],
  category: "data-viz",
  summary: "막대 안에서 전체와 구성을 함께 비교",
  description:
    "막대 하나를 같은 순서의 구성 항목으로 나눠 전체 크기와 구성을 함께 보여 줍니다. 개수로 보면 막대 길이로 전체를, 비율로 보면 같은 길이에서 구성비를 비교합니다. 조각 사이에 2px 틈을 두고 가리키면 값을 보여 줍니다.",
  tags: [...BASE_TAGS, "flex-grow", "details", "table"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/stacked-bar-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartDemo").then(
      (m) => m.StackedBarChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartThumbnail").then(
      (m) => m.StackedBarChartThumbnail,
    ),
  sources: [
    {
      fileName: "StackedBarChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stacked-bar-chart/StackedBarChart.tsx?raw"),
    },
    {
      fileName: "StackedBarChartDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartDemo.tsx?raw"),
    },
  ],
};
