import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RadarChartThumbnail } from "@/entities/pattern/catalog/radar-chart/RadarChartThumbnail";

export const radarChartPattern: Pattern = {
  slug: "radar-chart",
  name: "Radar Chart",
  nameKo: "방사형 차트",
  aliases: ["레이더 차트", "거미줄 차트", "스파이더 차트", "radar chart", "spider chart"],
  category: "data-viz",
  summary: "여러 항목을 원 둘레에 놓아 강약 비교",
  description:
    "같은 척도로 잰 여러 항목을 원 둘레에 축으로 놓고 값을 이어 모양을 만듭니다. 모양으로 강점과 약점을 한눈에 보고, 두 대상을 겹쳐 서로 어디가 다른지 비교합니다.",
  whenToUse: [
    "제품, 선수처럼 한 대상의 여러 능력치를 볼 때",
    "같은 척도(5점 만점 등)로 잰 3~8개 항목",
    "두 대상의 강약 모양을 비교할 때",
  ],
  whenNotToUse: [
    "항목마다 단위가 다를 때",
    "세 대상 이상을 겹칠 때(막대 그래프 사용)",
    "정확한 값 비교가 중요할 때(표 사용)",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목별 값을 정확히 비교할 때" },
    { name: "데이터 테이블", slug: "data-table", reason: "여러 대상을 숫자로 비교할 때" },
  ],
  accessibility: [
    "두 계열은 범례와 다른 색으로 구분하고, 겹친 면은 반투명으로 둡니다.",
    "축 이름을 글자로 적습니다.",
    "표로 보기에 모든 점수를 만점과 함께 적습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "polygon", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/radar-chart/RadarChartDemo").then((m) => m.RadarChartDemo),
  Thumbnail: RadarChartThumbnail,
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
