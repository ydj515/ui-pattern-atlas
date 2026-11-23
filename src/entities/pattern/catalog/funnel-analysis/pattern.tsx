import { type Pattern } from "@/entities/pattern/model/pattern";
import { FunnelAnalysisThumbnail } from "@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisThumbnail";

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
  whenToUse: [
    "가입, 결제처럼 순서가 정해진 흐름",
    "어디부터 고칠지 정할 때",
    "기기나 유입 경로별 차이를 볼 때",
  ],
  whenNotToUse: [
    "단계가 정해지지 않은 탐색 흐름",
    "왜 빠지는지 이유를 알아야 할 때(사용성 테스트 사용)",
    "단계 정의가 팀마다 다를 때",
  ],
  alternatives: [
    { name: "A/B 테스트", slug: "ab-test", reason: "빠지는 곳을 고친 효과를 잴 때" },
    { name: "행동 히트맵", slug: "behavioral-heatmap", reason: "한 페이지 안의 행동을 볼 때" },
  ],
  accessibility: [
    "보조 기술 사용 여부를 나눠 볼 수 없다면 따로 사용성 테스트로 확인합니다.",
    "오류로 막힌 이탈과 스스로 떠난 이탈을 구분해 기록합니다.",
    "단계 이름은 화면에 보이는 말과 같게 둡니다.",
  ],
  tags: ["UX 리서치", "정량 조사"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisDemo").then(
      (m) => m.FunnelAnalysisDemo,
    ),
  Thumbnail: FunnelAnalysisThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/funnel-analysis/FunnelAnalysisDemo.tsx?raw"),
};
