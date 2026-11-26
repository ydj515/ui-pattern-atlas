import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 장소, 콘텐츠의 전체 만족도",
    "다섯 단계로 충분한 평가",
    "다른 사람의 평점과 비교될 때",
  ],
  whenNotToUse: [
    "항목별로 자세히 평가할 때(평가 태그나 리뷰 사용)",
    "0~10처럼 더 촘촘한 척도(평점 슬라이더 사용)",
    "평점만 보여 줄 때(평점 배지 사용)",
  ],
  alternatives: [
    { name: "평점 슬라이더", slug: "rating-slider", reason: "0~10처럼 촘촘하게 고를 때" },
    { name: "이모지 평가", slug: "emoji-rating", reason: "만족도를 표정으로 고를 때" },
  ],
  accessibility: [
    "fieldset과 라디오 버튼으로 만들어 방향키로 점수를 바꿉니다.",
    "각 선택지는 4점, 4.5점처럼 이름이 있습니다.",
    "별 그림은 aria-hidden이고 점수는 글자로도 보여 줍니다.",
    "포커스가 간 별에는 테두리가 보입니다.",
  ],
};
