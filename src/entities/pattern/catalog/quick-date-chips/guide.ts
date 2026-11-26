import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "배송일, 마감일처럼 대부분 가까운 날짜를 고를 때",
    "달력을 여는 것이 번거로운 모바일 화면",
    "사람들이 날짜를 말로 떠올릴 때(이번 주말)",
  ],
  whenNotToUse: [
    "날짜가 고르게 흩어져 있을 때(날짜 선택 사용)",
    "먼 날짜(날짜 직접 입력 사용)",
    "칩이 가리키는 날짜가 헷갈릴 때(실제 날짜를 함께 보여 주기)",
  ],
  alternatives: [
    { name: "날짜 선택", slug: "date-picker", reason: "달력에서 아무 날이나 고를 때" },
  ],
  accessibility: [
    "칩은 aria-pressed 버튼이라 고른 칩이 읽힙니다.",
    '고른 결과를 "11월 28일 (토)에 받아요"처럼 실제 날짜로 다시 보여 줘 "이번 주말"의 뜻을 확인할 수 있습니다.',
    "다른 날짜는 기본 date 입력으로 고릅니다.",
    '칩들을 role="group"과 이름으로 묶습니다.',
  ],
};
