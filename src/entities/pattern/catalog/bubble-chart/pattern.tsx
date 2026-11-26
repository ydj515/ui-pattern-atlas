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
  whenToUse: [
    "가격, 판매량, 리뷰 수처럼 세 값을 함께 볼 때",
    "항목이 4~12개 정도일 때",
    "어느 영역에 큰 항목이 몰렸는지 볼 때",
  ],
  whenNotToUse: [
    "원 크기의 작은 차이를 비교해야 할 때",
    "항목이 많아 원이 심하게 겹칠 때(산점도 사용)",
    "값이 두 개뿐일 때(산점도 사용)",
  ],
  alternatives: [
    { name: "산점도", slug: "scatter-plot", reason: "두 값의 관계만 볼 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "한 값을 정확히 비교할 때" },
  ],
  accessibility: [
    "원 크기는 반지름이 아닌 면적에 비례해 과장하지 않습니다.",
    "원 안에 항목 이름을 적어 색에만 기대지 않습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "details"],
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
