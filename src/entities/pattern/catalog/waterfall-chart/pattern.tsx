import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const waterfallChartPattern: Pattern = {
  slug: "waterfall-chart",

  name: "Waterfall Chart",
  nameKo: "폭포 차트",
  aliases: ["워터폴 차트", "증감 차트", "브리지 차트", "waterfall chart", "bridge chart"],
  category: "data-viz",
  summary: "늘고 준 항목을 차례로 쌓아 결과까지 표시",
  description:
    "시작 값에서 출발해 늘어나는 항목과 줄어드는 항목을 차례로 떠 있는 막대로 쌓고, 마지막에 결과를 보여 줍니다. 매출에서 순이익까지처럼 어떤 항목이 결과를 얼마나 바꿨는지 한눈에 봅니다.",
  tags: [...BASE_TAGS, "CSS", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/waterfall-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/waterfall-chart/WaterfallChartDemo").then(
      (m) => m.WaterfallChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/waterfall-chart/WaterfallChartThumbnail").then(
      (m) => m.WaterfallChartThumbnail,
    ),
  sources: [
    {
      fileName: "WaterfallChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/waterfall-chart/WaterfallChart.tsx?raw"),
    },
    {
      fileName: "WaterfallChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/waterfall-chart/WaterfallChartDemo.tsx?raw"),
    },
  ],
};
