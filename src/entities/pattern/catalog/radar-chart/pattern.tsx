import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const radarChartPattern: Pattern = {
  slug: "radar-chart",

  name: "Radar Chart",
  nameKo: "방사형 차트",
  aliases: ["레이더 차트", "거미줄 차트", "스파이더 차트", "radar chart", "spider chart"],
  category: "data-viz",
  summary: "여러 항목을 원 둘레에 놓아 강약 비교",
  description:
    "같은 척도로 잰 여러 항목을 원 둘레에 축으로 놓고 값을 이어 모양을 만듭니다. 모양으로 강점과 약점을 한눈에 보고, 두 대상을 겹쳐 서로 어디가 다른지 비교합니다.",
  tags: [...BASE_TAGS, "SVG", "polygon", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/radar-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/radar-chart/RadarChartDemo").then((m) => m.RadarChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/radar-chart/RadarChartThumbnail").then(
      (m) => m.RadarChartThumbnail,
    ),
  sources: [
    {
      fileName: "RadarChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/radar-chart/RadarChart.tsx?raw"),
    },
    {
      fileName: "RadarChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/radar-chart/RadarChartDemo.tsx?raw"),
    },
  ],
};
