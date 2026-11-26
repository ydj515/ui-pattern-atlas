import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "월별 정산, 청구서, 보고서",
    "카드 유효기간처럼 연월만 필요할 때",
    "아직 오지 않은 달은 고를 수 없어야 할 때",
  ],
  whenNotToUse: [
    "날짜까지 필요할 때(날짜 선택 사용)",
    "최근 몇 달만 보면 될 때(셀렉트나 칩 사용)",
    "연도 범위가 아주 넓을 때",
  ],
  alternatives: [
    { name: "셀렉트", slug: "select", reason: "최근 몇 달 중에서만 고를 때" },
    { name: "날짜 선택", slug: "date-picker", reason: "날짜까지 고를 때" },
  ],
  accessibility: [
    '달 버튼 이름에 연도를 함께 넣고("2026년 10월") aria-pressed로 선택을 알립니다.',
    "아직 오지 않은 달과 다음 해 버튼은 disabled로 둡니다.",
    "연도 표시는 aria-live로 바뀐 연도를 읽어 줍니다.",
    "이전 해, 다음 해 버튼 이름에 이동할 연도를 넣습니다.",
  ],
};
