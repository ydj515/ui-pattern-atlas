import { type Pattern } from "@/entities/pattern/model/pattern";

export const peakEndRulePattern: Pattern = {
  slug: "peak-end-rule",

  kind: "concept",
  name: "Peak-End Rule",
  nameKo: "피크엔드 법칙",
  aliases: ["피크 엔드 규칙", "절정과 끝", "peak-end rule", "memory bias"],
  category: "ux-laws",
  summary: "가장 강한 순간과 끝이 기억을 정한다",
  description:
    "사람들은 경험 전체의 평균보다 가장 강렬했던 순간과 마지막 순간으로 그 경험을 기억한다는 원리입니다. 결제, 배송 완료처럼 끝나는 화면을 챙기면 전체가 좋게 기억됩니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/peak-end-rule/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/peak-end-rule/PeakEndDemo").then((m) => m.PeakEndDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/peak-end-rule/PeakEndThumbnail").then(
      (m) => m.PeakEndThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/peak-end-rule/PeakEndDemo.tsx?raw"),
};
