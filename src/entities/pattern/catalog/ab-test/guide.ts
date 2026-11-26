import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "두 시안 중 지표가 나은 쪽을 고를 때",
    "방문자가 충분히 많을 때",
    "바꾼 것이 하나라 원인을 좁힐 수 있을 때",
  ],
  whenNotToUse: [
    "방문자가 적어 표본을 채울 수 없을 때",
    "왜 그런지 이유를 알고 싶을 때(사용자 인터뷰 사용)",
    "사용자를 속이거나 불리하게 하는 시안을 시험할 때",
  ],
  alternatives: [
    { name: "퍼널 분석", slug: "funnel-analysis", reason: "어느 단계에서 빠지는지 먼저 찾을 때" },
    { name: "사용성 테스트", slug: "usability-test", reason: "적은 인원으로 문제를 찾을 때" },
  ],
  accessibility: [
    "두 시안 모두 접근성 기준을 지킨 상태로 비교합니다.",
    "보조 기술 사용자에게 한쪽 시안만 불리하지 않은지 확인합니다.",
    "지표가 좋아도 키보드나 화면 낭독기로 쓸 수 없으면 채택하지 않습니다.",
  ],
};
