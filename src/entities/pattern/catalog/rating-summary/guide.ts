import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 앱처럼 리뷰가 많은 상세 화면",
    "평균만으로는 판단하기 어려울 때",
    "낮은 점수 리뷰부터 보고 싶을 때",
  ],
  whenNotToUse: [
    "리뷰가 몇 개 안 될 때(평점 배지로 충분)",
    "카드처럼 좁은 곳(평점 배지 사용)",
    "점수 대신 글이 중요한 곳",
  ],
  alternatives: [
    { name: "평점 배지", slug: "rating-badge", reason: "카드에 짧게 보여 줄 때" },
    { name: "필터 칩", slug: "filter-chip", reason: "점수 외 조건으로 거를 때" },
  ],
  accessibility: [
    "막대 버튼은 aria-pressed이고 이름에 점수와 개수가 들어 있습니다.",
    "막대 그림은 aria-hidden입니다.",
    "거른 상태는 role=status 글로 알립니다.",
    "개수는 tabular-nums로 자릿수를 맞춥니다.",
  ],
};
