import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "자동 저장이 없는 편집 화면",
    "입력한 내용이 많아 잃으면 아까울 때",
    "뒤로 가기로 쉽게 떠날 수 있을 때",
  ],
  whenNotToUse: [
    "자동 저장이 되는 화면(자동 저장 표시 사용)",
    "바꾼 것이 없는데도 매번 물을 때",
    "예, 아니요처럼 결과가 드러나지 않는 버튼",
  ],
  alternatives: [
    { name: "자동 저장 표시", slug: "autosave-indicator", reason: "저장을 자동으로 처리할 때" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "일반적인 확인 창" },
  ],
  accessibility: [
    'role="alertdialog"와 aria-modal로 열리고 제목과 본문을 이어 둡니다.',
    "가장 안전한 계속 편집에 처음 포커스를 둡니다.",
    "Esc를 누르면 계속 편집으로 닫힙니다.",
  ],
};
