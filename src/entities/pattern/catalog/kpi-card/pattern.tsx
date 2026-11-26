import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const kpiCardPattern: Pattern = {
  slug: "kpi-card",

  name: "KPI Card",
  nameKo: "KPI 카드",
  aliases: ["지표 카드", "숫자 카드", "통계 카드", "stat card", "metric card"],
  category: "data-viz",
  summary: "핵심 지표와 비교 기간의 증감",
  description:
    "대시보드에서 핵심 숫자 하나를 크게 보여 주고, 무엇과 비교한 증감인지 함께 적는 카드입니다. 화살표, 부호, 증가·감소 글자로 방향을 알리고, 색은 그 변화가 이 지표에 좋은지 나쁜지에 따라 정합니다.",
  tags: [...BASE_TAGS, "section", "tabular-nums"],
  loadGuide: () => import("@/entities/pattern/catalog/kpi-card/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/kpi-card/KpiCardDemo").then((m) => m.KpiCardDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/kpi-card/KpiCardThumbnail").then((m) => m.KpiCardThumbnail),
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
