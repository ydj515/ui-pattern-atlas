import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "계정과 데이터를 지울 때",
    "적립금처럼 사라지는 것이 있을 때",
    "일정 기간 되돌릴 수 있게 할 때",
  ],
  whenNotToUse: [
    "해지를 일부러 어렵게 만들 때(다크 패턴, 해지 미로 참고)",
    "이유 입력을 필수로 막을 때",
    "잠시 쉬기만 원하는 사용자에게 탈퇴만 제시할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "해지를 어렵게 만드는 다크 패턴" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "되돌릴 수 있는 가벼운 확인" },
    { name: "길게 눌러 확인", slug: "hold-to-confirm", reason: "길게 눌러 확인할 때" },
  ],
  accessibility: [
    "입력 확인 전에는 버튼이 disabled입니다.",
    "사라지는 항목은 목록으로 읽힙니다.",
    '접수 결과는 role="status"로 읽어 줍니다.',
  ],
};
