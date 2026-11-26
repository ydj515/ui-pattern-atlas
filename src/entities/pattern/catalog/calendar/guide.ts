import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "팀 일정, 수업, 예약 현황처럼 날짜에 묶인 일정",
    "한 달 동안 일정이 몰린 날을 한눈에 봐야 할 때",
    "날짜를 눌러 세부 일정을 확인할 때",
  ],
  whenNotToUse: [
    "날짜 하나를 입력받을 때(날짜 선택 사용)",
    "하루에 일정이 많아 시간대가 중요할 때(주간, 일간 보기 사용)",
    "일정이 드문드문할 때(목록이 더 읽기 쉽습니다)",
  ],
  alternatives: [{ name: "날짜 선택", slug: "date-picker", reason: "날짜를 입력받을 때" }],
  accessibility: [
    '날짜 버튼 이름에 "일정 2개"처럼 개수를 넣어 점만으로 전하지 않습니다.',
    '오늘은 aria-current="date", 고른 날은 aria-pressed로 알립니다.',
    "달 이름과 아래 일정 목록은 aria-live로 바뀐 내용을 읽어 줍니다.",
    "이전 달, 다음 달 버튼에 이름이 있습니다.",
  ],
};
