import { type Pattern } from "@/entities/pattern/model/pattern";

export const funnelAnalysisPattern: Pattern = {
  slug: "funnel-analysis",

  kind: "concept",
  name: "Funnel Analysis",
  nameKo: "퍼널 분석",
  aliases: ["전환 퍼널", "이탈 분석", "단계별 전환율", "funnel", "conversion funnel"],
  category: "ux-research",
  summary: "단계별 진행률과 이탈 지점 확인",
  description:
    "상품 보기부터 결제 완료까지처럼 정해 둔 단계마다 몇 명이 남는지 세는 방법입니다. 다음 단계로 넘어가는 비율을 나란히 보면 가장 많이 빠지는 곳이 보이고, 기기나 유입 경로로 나누면 그 위치가 달라지기도 합니다.",
  tags: ["UX 리서치", "정량 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/funnel-analysis/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisDemo").then(
      (m) => m.FunnelAnalysisDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisThumbnail").then(
      (m) => m.FunnelAnalysisThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisDemo.tsx?raw"),
};
