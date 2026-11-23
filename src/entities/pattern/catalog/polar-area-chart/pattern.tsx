import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PolarAreaChartThumbnail } from "@/entities/pattern/catalog/polar-area-chart/PolarAreaChartThumbnail";

export const polarAreaChartPattern: Pattern = {
  slug: "polar-area-chart",
  name: "Polar Area Chart",
  nameKo: "극좌표 차트",
  aliases: ["나이팅게일 차트", "장미 차트", "방사형 막대", "polar area chart", "rose chart"],
  category: "data-viz",
  summary: "반복되는 값을 같은 각도의 조각 길이로 표시",
  description:
    "원을 같은 각도로 나누고 조각마다 값만큼 바깥으로 뻗게 그립니다. 월, 시간처럼 한 바퀴 도는 데이터에서 어느 때 값이 몰리는지 보이고, 반지름은 제곱근으로 키워 조각 면적이 값과 맞게 합니다.",
  whenToUse: [
    "월별, 시간대별처럼 순환하는 데이터",
    "계절성이나 하루 리듬을 보여 줄 때",
    "항목이 6~24개일 때",
  ],
  whenNotToUse: [
    "정확한 값 비교(세로 막대 그래프 사용)",
    "순환하지 않는 항목",
    "비율을 보여 줄 때(파이 차트 사용)",
  ],
  alternatives: [
    { name: "세로 막대 그래프", slug: "column-chart", reason: "같은 값을 정확히 비교할 때" },
    { name: "방사형 차트", slug: "radar-chart", reason: "여러 항목 점수를 모양으로 비교할 때" },
  ],
  accessibility: [
    "조각을 가리키면 이름과 값을 글자로 보여 줍니다.",
    "조각 사이 흰 테두리로 경계를 구분합니다.",
    "표로 보기에 모든 값을 적습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/polar-area-chart/PolarAreaChartDemo").then(
      (m) => m.PolarAreaChartDemo,
    ),
  Thumbnail: PolarAreaChartThumbnail,
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
