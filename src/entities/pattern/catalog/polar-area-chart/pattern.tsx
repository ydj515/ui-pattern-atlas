import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const polarAreaChartPattern: Pattern = {
  slug: "polar-area-chart",

  name: "Polar Area Chart",
  nameKo: "극좌표 차트",
  aliases: ["나이팅게일 차트", "장미 차트", "방사형 막대", "polar area chart", "rose chart"],
  category: "data-viz",
  summary: "반복되는 값을 같은 각도의 조각 길이로 표시",
  description:
    "원을 같은 각도로 나누고 조각마다 값만큼 바깥으로 뻗게 그립니다. 월, 시간처럼 한 바퀴 도는 데이터에서 어느 때 값이 몰리는지 보이고, 반지름은 제곱근으로 키워 조각 면적이 값과 맞게 합니다.",
  tags: [...BASE_TAGS, "SVG", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/polar-area-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/polar-area-chart/PolarAreaChartDemo").then(
      (m) => m.PolarAreaChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/polar-area-chart/PolarAreaChartThumbnail").then(
      (m) => m.PolarAreaChartThumbnail,
    ),
  sources: [
    {
      fileName: "PolarAreaChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/polar-area-chart/PolarAreaChart.tsx?raw"),
    },
    {
      fileName: "PolarAreaChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/polar-area-chart/PolarAreaChartDemo.tsx?raw"),
    },
  ],
};
