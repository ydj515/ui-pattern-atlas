import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const slopeChartPattern: Pattern = {
  slug: "slope-chart",

  name: "Slope Chart",
  nameKo: "기울기 차트",
  aliases: ["슬로프 차트", "전후 비교 차트", "두 시점 비교", "slope chart", "slopegraph"],
  category: "data-viz",
  summary: "두 시점 사이의 증감과 순위 변화",
  description:
    "항목마다 두 시점의 값을 양쪽 세로선에 찍고 선으로 잇습니다. 오르는 선과 내리는 선, 서로 엇갈리는 선으로 증감과 순위 변화를 한 번에 보여 주고, 가리킨 항목만 남기고 나머지는 흐리게 합니다.",
  tags: [...BASE_TAGS, "SVG", "sr-only"],
  loadGuide: () => import("@/entities/pattern/catalog/slope-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/slope-chart/SlopeChartDemo").then((m) => m.SlopeChartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/slope-chart/SlopeChartThumbnail").then(
      (m) => m.SlopeChartThumbnail,
    ),
  sources: [
    {
      fileName: "SlopeChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/slope-chart/SlopeChart.tsx?raw"),
    },
    {
      fileName: "SlopeChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/slope-chart/SlopeChartDemo.tsx?raw"),
    },
  ],
};
