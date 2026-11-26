import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 가게 카드와 검색 결과",
    "정렬이나 비교의 근거로 평점을 보여 줄 때",
    "좁은 자리에 평점을 넣어야 할 때",
  ],
  whenNotToUse: [
    "점수 분포가 중요할 때(평점 요약 사용)",
    "리뷰 수 없이 평점만 보여 줄 때",
    "평점을 입력받을 때(별점 사용)",
  ],
  alternatives: [
    { name: "평점 요약", slug: "rating-summary", reason: "분포까지 보여 줄 때" },
    { name: "배지", slug: "badge", reason: "상태나 개수 표시" },
  ],
  accessibility: [
    "화면 읽기에는 평점 5점 만점에 4.6점, 리뷰 1,284개처럼 한 문장으로 읽힙니다.",
    "별 기호와 숫자는 aria-hidden입니다.",
    "숫자는 tabular-nums로 맞춥니다.",
    "정렬 버튼은 aria-pressed로 현재 기준을 알립니다.",
  ],
};
