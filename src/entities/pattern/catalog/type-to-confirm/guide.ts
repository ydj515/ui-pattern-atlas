import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "되돌릴 수 없는 삭제",
    "다른 사람에게도 영향이 가는 삭제",
    "비슷한 이름의 대상을 헷갈릴 수 있을 때",
  ],
  whenNotToUse: [
    "휴지통으로 옮기는 정도의 되돌릴 수 있는 삭제(휴지통 사용)",
    "자주 하는 가벼운 동작",
    "입력할 이름이 너무 길거나 외우기 어려울 때",
  ],
  alternatives: [
    {
      name: "확인 다이얼로그",
      slug: "confirmation-dialog",
      reason: "가벼운 확인 한 번으로 충분할 때",
    },
    { name: "길게 눌러 확인", slug: "hold-to-confirm", reason: "길게 눌러 확인할 때" },
    { name: "회원 탈퇴", slug: "account-deletion", reason: "계정 전체를 지울 때" },
  ],
  accessibility: [
    'role="alertdialog"로 제목과 사라지는 항목 목록을 이름과 설명으로 이어 둡니다.',
    "입력이 맞기 전에는 버튼이 disabled입니다.",
    "자동 완성과 맞춤법 검사를 꺼 입력이 바뀌지 않게 합니다.",
  ],
};
