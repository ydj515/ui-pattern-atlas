import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { KpiCardThumbnail } from "@/entities/pattern/catalog/kpi-card/KpiCardThumbnail";

export const kpiCardPattern: Pattern = {
  slug: "kpi-card",
  name: "KPI Card",
  nameKo: "KPI 카드",
  aliases: ["지표 카드", "숫자 카드", "통계 카드", "stat card", "metric card"],
  category: "data-viz",
  summary: "핵심 지표와 비교 기간의 증감",
  description:
    "대시보드에서 핵심 숫자 하나를 크게 보여 주고, 무엇과 비교한 증감인지 함께 적는 카드입니다. 화살표, 부호, 증가·감소 글자로 방향을 알리고, 색은 그 변화가 이 지표에 좋은지 나쁜지에 따라 정합니다.",
  whenToUse: [
    "대시보드 맨 위의 핵심 지표",
    "지난주, 지난달과 비교할 때",
    "차트 없이 숫자 하나로 충분할 때",
  ],
  whenNotToUse: [
    "추세의 모양이 중요할 때(선 그래프나 스파크라인 사용)",
    "비교 기준을 밝힐 수 없을 때",
    "지표가 열 개 이상이라 표가 나을 때",
  ],
  alternatives: [
    { name: "스파크라인", slug: "sparkline", reason: "숫자 옆에 흐름을 덧붙일 때" },
    { name: "정의 목록", slug: "description-list", reason: "여러 값을 이름과 함께 나열할 때" },
  ],
  accessibility: [
    "카드는 지표 이름으로 된 section입니다.",
    '증감은 화살표 대신 "지난주 대비 12% 증가" 같은 글자로 읽어 줍니다.',
    "좋고 나쁨을 색과 함께 글자로 알려 색에만 기대지 않습니다.",
  ],
  tags: [...BASE_TAGS, "section", "tabular-nums"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/kpi-card/KpiCardDemo").then((m) => m.KpiCardDemo),
  Thumbnail: KpiCardThumbnail,
  sources: [
    {
      fileName: "KpiCard.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/kpi-card/KpiCard.tsx?raw"),
    },
    {
      fileName: "KpiCardDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/kpi-card/KpiCardDemo.tsx?raw"),
    },
  ],
};
