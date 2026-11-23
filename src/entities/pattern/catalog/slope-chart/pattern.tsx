import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SlopeChartThumbnail } from "@/entities/pattern/catalog/slope-chart/SlopeChartThumbnail";

export const slopeChartPattern: Pattern = {
  slug: "slope-chart",
  name: "Slope Chart",
  nameKo: "기울기 차트",
  aliases: ["슬로프 차트", "전후 비교 차트", "두 시점 비교", "slope chart", "slopegraph"],
  category: "data-viz",
  summary: "두 시점 사이의 증감과 순위 변화",
  description:
    "항목마다 두 시점의 값을 양쪽 세로선에 찍고 선으로 잇습니다. 오르는 선과 내리는 선, 서로 엇갈리는 선으로 증감과 순위 변화를 한 번에 보여 주고, 가리킨 항목만 남기고 나머지는 흐리게 합니다.",
  origin:
    "에드워드 터프티(Edward Tufte)가 1983년 책 「정량 정보의 시각적 표현」에서 소개한 형식이에요.",
  whenToUse: [
    "작년과 올해처럼 두 시점만 비교할 때",
    "순위가 바뀐 항목을 강조할 때",
    "항목이 3~8개일 때",
  ],
  whenNotToUse: [
    "시점이 세 개 이상일 때(선 그래프 사용)",
    "항목이 많아 선이 엉킬 때",
    "한 시점의 크기만 비교할 때(막대 그래프 사용)",
  ],
  alternatives: [
    { name: "선 그래프", slug: "line-chart", reason: "시점이 많을 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "한 시점의 크기를 비교할 때" },
  ],
  accessibility: [
    "양 끝에 값을 글자로 적어 선 기울기를 읽지 않아도 됩니다.",
    "오름과 내림을 색과 함께 선 방향으로 보여 줍니다.",
    "모든 항목의 두 값을 화면 읽기용 목록으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "sr-only"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/slope-chart/SlopeChartDemo").then((m) => m.SlopeChartDemo),
  Thumbnail: SlopeChartThumbnail,
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
