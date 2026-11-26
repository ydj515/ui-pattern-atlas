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
  origin:
    "1801년 윌리엄 플레이페어(William Playfair)가 처음 그린 것으로 알려져 있어요. 원을 파이처럼 조각낸다는 뜻이에요.",
  whenToUse: [
    "항목이 2~4개이고 합이 100%일 때",
    "한 항목이 절반을 넘는지처럼 큰 차이를 보여 줄 때",
    "가운데에 숫자를 둘 필요가 없을 때",
  ],
  whenNotToUse: [
    "항목이 다섯 개를 넘을 때(막대 그래프 사용)",
    "비슷한 크기의 조각을 비교할 때",
    "가운데에 합계를 보여 줄 때(도넛 차트 사용)",
  ],
  alternatives: [
    { name: "도넛 차트", slug: "donut-chart", reason: "가운데에 합계를 보여 줄 때" },
    {
      name: "누적 막대 그래프",
      slug: "stacked-bar-chart",
      reason: "여러 기간의 구성을 나란히 볼 때",
    },
  ],
  accessibility: [
    "범례 항목은 버튼이라 Tab으로 옮기며 각 조각을 강조합니다.",
    "범례에 값과 비율을 글자로 적어 조각을 보지 않아도 읽힙니다.",
    "조각 사이에 2px 흰 선을 둬 색이 비슷해도 경계가 보입니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "path", "button"],
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
