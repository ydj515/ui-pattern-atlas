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
  whenToUse: [
    "매출에서 순이익까지처럼 단계별 증감을 설명할 때",
    "재고, 인원처럼 들어오고 나간 양을 볼 때",
    "무엇이 결과를 가장 많이 바꿨는지 찾을 때",
  ],
  whenNotToUse: [
    "항목 사이에 순서나 누적 관계가 없을 때(막대 그래프 사용)",
    "시간에 따른 값 자체의 변화(선 그래프 사용)",
    "단계가 열 개를 넘을 때",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목별 크기만 비교할 때" },
    { name: "퍼널 분석", slug: "funnel-analysis", reason: "단계마다 줄어드는 사람 수를 볼 때" },
  ],
  accessibility: [
    "늘어남과 줄어듦을 색과 함께 +, − 부호로 적습니다.",
    "막대마다 값을 글자로 적고, 가리키면 누적 합계를 읽어 줍니다.",
    "표로 보기에 변화량과 누적 값을 함께 적습니다.",
  ],
  tags: [...BASE_TAGS, "CSS", "details"],
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
