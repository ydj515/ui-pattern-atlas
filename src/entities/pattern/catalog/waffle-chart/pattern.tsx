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
  tags: [...BASE_TAGS, "CSS grid"],
  loadGuide: () => import("@/entities/pattern/catalog/waffle-chart/guide").then((m) => m.guide),
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
