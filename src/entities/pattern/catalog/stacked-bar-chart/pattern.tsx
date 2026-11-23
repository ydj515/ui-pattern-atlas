import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { StackedBarChartThumbnail } from "@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartThumbnail";

export const stackedBarChartPattern: Pattern = {
  slug: "stacked-bar-chart",
  name: "Stacked Bar Chart",
  nameKo: "누적 막대 그래프",
  aliases: ["누적 막대", "100% 막대", "구성 막대", "stacked bar", "100% stacked bar"],
  category: "data-viz",
  summary: "막대 안에서 전체와 구성을 함께 비교",
  description:
    "막대 하나를 같은 순서의 구성 항목으로 나눠 전체 크기와 구성을 함께 보여 줍니다. 개수로 보면 막대 길이로 전체를, 비율로 보면 같은 길이에서 구성비를 비교합니다. 조각 사이에 2px 틈을 두고 가리키면 값을 보여 줍니다.",
  whenToUse: [
    "기간마다 전체와 구성이 함께 바뀔 때",
    "구성 항목이 2~3개일 때",
    "구성비를 여러 막대에서 나란히 비교할 때",
  ],
  whenNotToUse: [
    "구성 항목이 네 개를 넘을 때(기타로 묶기)",
    "가운데 조각의 크기를 정확히 비교할 때(막대 그래프로 나누기)",
    "전체 하나의 구성만 볼 때(도넛 차트 사용)",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목 하나씩 크기를 비교할 때" },
    { name: "도넛 차트", slug: "donut-chart", reason: "전체 하나의 구성비를 볼 때" },
  ],
  accessibility: [
    "범례에 모든 계열 이름을 적고 같은 순서로 쌓습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
    "조각 사이 2px 틈으로 비슷한 색도 경계가 보입니다.",
  ],
  tags: [...BASE_TAGS, "flex-grow", "details", "table"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/stacked-bar-chart/StackedBarChartDemo").then(
      (m) => m.StackedBarChartDemo,
    ),
  Thumbnail: StackedBarChartThumbnail,
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
