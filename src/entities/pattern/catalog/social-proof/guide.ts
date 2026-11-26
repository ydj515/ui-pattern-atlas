import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin: "1984년 로버트 치알디니(Robert Cialdini)가 책 「설득의 심리학」에서 소개한 용어예요.",
  whenToUse: [
    "상품, 요금제 선택을 도울 때",
    "리뷰와 평점을 보여 줄 때",
    "새 사용자에게 많이 쓰는 기능을 알릴 때",
  ],
  whenNotToUse: [
    "숫자를 부풀리거나 꾸밀 때",
    "출처를 알 수 없는 후기를 보여 줄 때",
    "소수의 의견을 다수처럼 보이게 할 때",
  ],
  alternatives: [
    { name: "평점 배지", slug: "rating-badge", reason: "평점과 리뷰 수를 함께 보여 줄 때" },
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "꾸민 숫자로 압박할 때" },
  ],
  accessibility: [
    "숫자와 기간(이번 주)을 함께 글로 적습니다.",
    "리뷰 수는 평점과 함께 읽히게 합니다.",
    "숫자는 tabular-nums로 정렬합니다.",
    "출처를 확인할 수 있게 리뷰로 연결합니다.",
  ],
};
