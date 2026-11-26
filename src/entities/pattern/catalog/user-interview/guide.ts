import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "문제를 아직 잘 모를 때",
    "숫자로 보이는 행동의 이유를 알고 싶을 때",
    "새 기능을 만들기 전에 실제 상황을 들을 때",
  ],
  whenNotToUse: [
    "얼마나 많은 사람이 그런지 알아야 할 때(설문 사용)",
    "화면에서 어디가 막히는지 볼 때(사용성 테스트 사용)",
    "미래에 쓸지 물어 결정하려 할 때",
  ],
  alternatives: [
    { name: "사용성 테스트", slug: "usability-test", reason: "말보다 실제 행동을 볼 때" },
    { name: "다이어리 스터디", slug: "diary-study", reason: "며칠에 걸친 경험을 볼 때" },
  ],
  accessibility: [
    "화면 낭독기, 확대 기능을 쓰는 참가자도 모집합니다.",
    "원격으로 할 때는 참가자가 익숙한 도구와 기기를 쓰게 합니다.",
    "질문을 미리 글로도 보내 준비할 수 있게 합니다.",
  ],
};
