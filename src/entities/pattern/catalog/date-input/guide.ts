import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "생년월일, 발급일처럼 먼 날짜",
    "사용자가 날짜를 이미 알고 있을 때",
    "키보드 입력이 빠른 데스크톱 폼",
  ],
  whenNotToUse: [
    "요일이 중요한 가까운 날짜(날짜 선택 사용)",
    "오늘, 내일처럼 몇 개로 충분할 때(빠른 날짜 선택 칩 사용)",
    "나라마다 날짜 순서가 다른 국제 서비스(형식을 분명히 보여 주기)",
  ],
  alternatives: [
    { name: "날짜 선택", slug: "date-picker", reason: "가까운 날짜를 달력에서 고를 때" },
    { name: "입력 마스크", slug: "input-mask", reason: "날짜가 아닌 번호 형식" },
  ],
  accessibility: [
    "형식(YYYY.MM.DD)은 placeholder뿐 아니라 안내 문구로 항상 보여 줍니다.",
    '포커스를 떠날 때 검사해 "없는 날짜예요" 같은 오류를 aria-invalid와 함께 알립니다.',
    'inputmode="numeric"과 autocomplete="bday"로 숫자 키패드와 자동 채우기를 씁니다.',
    "오류가 생긴 뒤에는 입력하는 동안 다시 검사합니다.",
  ],
};
