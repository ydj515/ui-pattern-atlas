import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
