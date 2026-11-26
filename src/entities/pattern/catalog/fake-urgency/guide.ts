import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "할인, 이벤트 배너의 시간 표시를 검토할 때",
    "타이머가 실제 마감과 맞는지 확인할 때",
    "긴급함을 정직하게 표현하는 방법을 정할 때",
  ],
  whenNotToUse: [
    "마감이 없는데 타이머를 띄울 때",
    "끝난 타이머를 다시 시작할 때",
    "사람마다 다른 가짜 마감을 보여 줄 때",
  ],
  alternatives: [
    { name: "희소성", slug: "scarcity", reason: "실제 제약을 정직하게 알릴 때" },
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "가짜 재고로 압박할 때" },
  ],
  accessibility: [
    "시간은 날짜와 시각을 글로 함께 적습니다.",
    "1초마다 바뀌는 타이머는 aria-live로 계속 읽히지 않게 합니다.",
    "빨간색 깜빡임으로 불안을 키우지 않습니다.",
    "동작 줄이기에서는 움직임을 멈춥니다.",
  ],
};
