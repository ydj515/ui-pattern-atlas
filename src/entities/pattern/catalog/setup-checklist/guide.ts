import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "프로필, 팀 초대처럼 처음 한 번 해 두면 좋은 설정",
    "직접 해 보며 익히는 것이 빠른 도구",
    "홈 화면 한쪽에 둘 수 있을 때",
  ],
  whenNotToUse: [
    "꼭 순서대로 해야 하는 가입 절차(단계 표시 사용)",
    "할 일이 열 개를 넘을 때",
    "모두 마친 뒤에도 계속 남겨 둘 때",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "순서가 정해진 절차" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률만 보여 줄 때" },
  ],
  accessibility: [
    "진행률은 progress 요소와 숫자(2 / 4) 둘 다로 보여 줍니다.",
    "끝낸 항목은 취소선과 함께 화면 읽기에 완료라고 알립니다.",
    "체크 원은 장식이라 aria-hidden입니다.",
    "모두 마치면 role=status로 알립니다.",
  ],
};
