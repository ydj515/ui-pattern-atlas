import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "되돌릴 수 없는 삭제나 초기화",
    "확인 창을 띄우기엔 흐름이 끊길 때",
    "실수로 누르기 쉬운 모바일 화면",
  ],
  whenNotToUse: [
    "되돌릴 수 있는 행동(되돌리기 사용)",
    "누르고 있기 어려운 사용자가 많을 때(확인 대화상자 사용)",
    "자주 하는 행동(매번 기다려야 함)",
  ],
  alternatives: [
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "한 번 더 묻는 일반적인 방법" },
    { name: "되돌리기", slug: "undo", reason: "먼저 실행하고 잠시 되돌릴 기회를 줄 때" },
  ],
  accessibility: [
    "포인터뿐 아니라 Space나 Enter를 누르고 있어도 동작합니다.",
    '누르는 방법("1.5초 동안 누르고 있으면 삭제돼요")을 aria-describedby로 알립니다.',
    "손을 떼면 바로 취소되고, 차오르는 표시는 동작 줄이기 설정에서도 상태를 보여 줍니다.",
    '결과는 role="status"로 알립니다.',
  ],
};
