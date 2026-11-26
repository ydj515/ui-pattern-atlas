import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bubbleChartPattern: Pattern = {
  slug: "bubble-chart",

  name: "Bubble Chart",
  nameKo: "버블 차트",
  aliases: ["거품 차트", "원 크기 차트", "3변수 산점도", "bubble chart", "bubble plot"],
  category: "data-viz",
  summary: "위치와 원 크기로 세 값을 비교",
  description:
    "두 값으로 원의 위치를, 세 번째 값으로 원의 면적을 정해 여러 항목을 한 번에 비교합니다. 원은 반투명하게 겹치고 흰 테두리로 경계를 지키며, 가리킨 원은 맨 앞으로 나와 값을 읽어 줍니다.",
  tags: [...BASE_TAGS, "SVG", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/bubble-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bubble-chart/BubbleChartDemo").then(
      (m) => m.BubbleChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bubble-chart/BubbleChartThumbnail").then(
      (m) => m.BubbleChartThumbnail,
    ),
  sources: [
    {
      fileName: "BubbleChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bubble-chart/BubbleChart.tsx?raw"),
    },
    {
      fileName: "BubbleChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bubble-chart/BubbleChartDemo.tsx?raw"),
    },
  ],
};
