import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "방문, 예약, 배송처럼 가까운 날짜를 고를 때",
    "요일이 중요할 때",
    "고를 수 없는 날짜(지난 날, 휴일)를 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "생년월일처럼 먼 날짜(날짜 직접 입력 사용)",
    "오늘, 내일처럼 몇 개로 충분할 때(빠른 날짜 선택 칩 사용)",
    "기간을 고를 때(기간 선택 사용)",
  ],
  alternatives: [
    { name: "날짜 직접 입력", slug: "date-input", reason: "먼 날짜를 빠르게 입력할 때" },
    { name: "빠른 날짜 선택 칩", slug: "quick-date-chips", reason: "자주 쓰는 날짜 몇 개" },
    { name: "기간 선택", slug: "date-range-picker", reason: "시작일과 종료일을 함께 고를 때" },
  ],
  accessibility: [
    '버튼은 aria-haspopup="dialog"로 달력을 열고, 닫으면 포커스가 버튼으로 돌아옵니다.',
    '달력은 role="grid"이며 화살표로 하루, 일주일씩, Page Up/Down으로 한 달씩 이동합니다.',
    '날짜 버튼 이름은 "11월 25일 (수)"처럼 전체 날짜이고, 오늘은 aria-current="date"입니다.',
    "고를 수 없는 날은 aria-disabled로 알리고 Esc로 달력을 닫습니다.",
  ],
};
