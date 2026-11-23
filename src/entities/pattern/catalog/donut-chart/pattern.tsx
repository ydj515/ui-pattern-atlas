import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DonutChartThumbnail } from "@/entities/pattern/catalog/donut-chart/DonutChartThumbnail";

export const donutChartPattern: Pattern = {
  slug: "donut-chart",
  name: "Donut Chart",
  nameKo: "도넛 차트",
  aliases: ["원형 차트", "파이 차트", "구성비 차트", "donut", "pie chart"],
  category: "data-viz",
  summary: "전체를 이루는 항목의 비중",
  description:
    "전체를 이루는 몇 개 항목의 비중을 고리 조각으로 보여 줍니다. 가운데에는 합계가 있고, 조각이나 범례를 가리키면 그 항목의 비율로 바뀝니다. 범례에 값과 비율을 모두 적고 기타는 회색으로 둡니다.",
  whenToUse: [
    "항목이 2~4개이고 합이 100%일 때",
    "한 항목이 전체의 어느 정도인지 강조할 때",
    "합계와 구성비를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "항목이 다섯 개를 넘을 때(막대 그래프 사용)",
    "비슷한 크기의 조각을 비교할 때",
    "시간에 따른 구성 변화(누적 막대 그래프 사용)",
  ],
  alternatives: [
    {
      name: "누적 막대 그래프",
      slug: "stacked-bar-chart",
      reason: "여러 기간의 구성을 나란히 볼 때",
    },
    { name: "막대 그래프", slug: "bar-chart", reason: "비슷한 크기를 정확히 비교할 때" },
  ],
  accessibility: [
    "범례 항목은 버튼이라 Tab으로 옮기며 각 조각을 강조합니다.",
    "범례에 값과 비율을 글자로 적어 고리를 보지 않아도 읽힙니다.",
    "조각 사이에 2px 틈을 두어 색이 비슷해도 경계가 보입니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "stroke-dasharray", "button"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/donut-chart/DonutChartDemo").then((m) => m.DonutChartDemo),
  Thumbnail: DonutChartThumbnail,
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
