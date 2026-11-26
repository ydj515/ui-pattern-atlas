import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "시안이나 완성된 화면이 쓰기 쉬운지 확인할 때",
    "출시 전에 주요 흐름을 점검할 때",
    "고친 뒤 정말 나아졌는지 볼 때",
  ],
  whenNotToUse: [
    "무엇을 만들지 아직 모를 때(사용자 인터뷰 사용)",
    "두 시안 중 지표가 나은 쪽을 고를 때(A/B 테스트 사용)",
    "메뉴 구조만 확인할 때(트리 테스트 사용)",
  ],
  alternatives: [
    { name: "트리 테스트", slug: "tree-testing", reason: "화면 없이 메뉴 구조만 확인할 때" },
    {
      name: "행동 히트맵",
      slug: "behavioral-heatmap",
      reason: "많은 사람의 실제 행동 위치를 볼 때",
    },
  ],
  accessibility: [
    "키보드, 화면 낭독기 사용자가 같은 과제를 끝낼 수 있는지 따로 봅니다.",
    "과제 문장은 화면의 단어를 그대로 쓰지 않아 답을 알려 주지 않게 합니다.",
    "참가자가 아닌 화면을 평가한다는 점을 먼저 알립니다.",
  ],
};
