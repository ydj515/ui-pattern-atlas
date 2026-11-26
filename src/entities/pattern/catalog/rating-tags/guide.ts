import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "택시, 배달처럼 평가 이유가 몇 가지로 모이는 서비스",
    "한 번에 빠르게 이유를 받고 싶을 때",
    "이유를 모아 통계를 낼 때",
  ],
  whenNotToUse: [
    "이유가 다양해 칩으로 담기 어려울 때(리뷰 사용)",
    "점수와 상관없이 같은 칩을 보여 줄 때",
    "칩을 꼭 골라야 넘어가게 할 때",
  ],
  alternatives: [
    { name: "리뷰", slug: "written-review", reason: "글로 자세히 받을 때" },
    { name: "필터 칩", slug: "filter-chip", reason: "목록을 거르는 칩" },
  ],
  accessibility: [
    "칩은 aria-pressed 토글이고 고르면 체크 표시도 붙습니다.",
    "칩 묶음에 좋았던 점처럼 이름을 붙입니다.",
    "별점은 라디오 버튼이라 키보드로 고릅니다.",
    "점수가 좋음과 나쁨을 넘나들면 고른 칩을 비웁니다.",
  ],
};
