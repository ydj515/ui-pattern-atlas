import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const areaChartPattern: Pattern = {
  slug: "area-chart",

  name: "Area Chart",
  nameKo: "영역 그래프",
  aliases: ["면적 그래프", "영역 차트", "누적 영역", "area chart", "area graph"],
  category: "data-viz",
  summary: "시간에 따른 양을 선 아래 면적으로 표시",
  description:
    "선 그래프 아래를 옅게 채워 시간에 따른 양의 크기를 강조합니다. 0에서 시작하는 축 위에 그리고, 포인터나 좌우 화살표로 기준선을 옮기면 그날의 값을 읽어 줍니다.",
  tags: [...BASE_TAGS, "SVG", "aria-live", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/area-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/area-chart/AreaChartDemo").then((m) => m.AreaChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/area-chart/AreaChartThumbnail").then(
      (m) => m.AreaChartThumbnail,
    ),
  sources: [
    {
      fileName: "AreaChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/area-chart/AreaChart.tsx?raw"),
    },
    {
      fileName: "AreaChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/area-chart/AreaChartDemo.tsx?raw"),
    },
  ],
};
