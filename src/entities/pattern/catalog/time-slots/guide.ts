import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "미용실, 병원, 상담처럼 시간 단위로 예약받을 때",
    "시간마다 예약 가능 여부가 다를 때",
    "하루 시간대가 열 개 남짓일 때",
  ],
  whenNotToUse: [
    "아무 시간이나 정할 수 있을 때(시간 선택 사용)",
    "시간대가 아주 많을 때(오전, 오후로 나눠 보여 주기)",
    "여러 시간을 이어서 골라야 할 때",
  ],
  alternatives: [
    { name: "시간 선택", slug: "time-picker", reason: "가능 여부와 상관없이 시간을 정할 때" },
  ],
  accessibility: [
    "각 시간은 기본 radio라 화살표 키로 이동하고, fieldset legend가 날짜를 알려 줍니다.",
    '찬 시간은 disabled이며 "마감"을 글로 보여 줍니다.',
    '예약 버튼 이름에 고른 시간을 넣습니다("11:00 예약하기").',
    '예약 결과는 role="status"로 알립니다.',
  ],
};
