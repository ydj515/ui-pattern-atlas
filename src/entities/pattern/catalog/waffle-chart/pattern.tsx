import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const waffleChartPattern: Pattern = {
  slug: "waffle-chart",
  name: "Waffle Chart",
  nameKo: "와플 차트",
  aliases: ["격자 비율 차트", "100칸 차트", "아이콘 배열 차트", "waffle chart", "square pie"],
  category: "data-viz",
  summary: "100칸 격자로 비율을 개수처럼 표시",
  description:
    '10×10 격자의 한 칸을 1%로 삼아 비율을 칠합니다. "100명 중 68명"처럼 개수로 읽혀 퍼센트가 낯선 사람에게도 쉽게 전달되고, 범례에 모든 비율을 글자로 적습니다.',
  whenToUse: [
    "설문 결과처럼 하나의 비율을 쉽게 전할 때",
    "비율을 사람 수처럼 느끼게 하고 싶을 때",
    "항목이 1~3개일 때",
  ],
  whenNotToUse: [
    "소수점까지 정확한 비율(숫자로 표시)",
    "항목이 네 개 이상일 때(막대 그래프 사용)",
    "여러 그룹의 비율을 비교할 때(누적 막대 그래프 사용)",
  ],
  alternatives: [
    { name: "파이 차트", slug: "pie-chart", reason: "비율을 조각으로 보여 줄 때" },
    { name: "누적 막대 그래프", slug: "stacked-bar-chart", reason: "여러 그룹을 나란히 비교할 때" },
  ],
  accessibility: [
    "격자는 aria-hidden이고 범례에 모든 비율을 글자로 적습니다.",
    "칸을 범례와 같은 순서로 채웁니다.",
    "한 칸이 얼마인지 글자로 알려 줍니다.",
  ],
  tags: [...BASE_TAGS, "CSS grid"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/waffle-chart/WaffleChartDemo").then(
      (m) => m.WaffleChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/waffle-chart/WaffleChartThumbnail").then(
      (m) => m.WaffleChartThumbnail,
    ),
  sources: [
    {
      fileName: "WaffleChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/waffle-chart/WaffleChart.tsx?raw"),
    },
    {
      fileName: "WaffleChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/waffle-chart/WaffleChartDemo.tsx?raw"),
    },
  ],
};
