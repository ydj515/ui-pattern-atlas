import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "배송, 상담처럼 한 번의 경험 만족도",
    "가볍고 빠른 응답이 필요할 때",
    "다섯 단계로 충분할 때",
  ],
  whenNotToUse: [
    "정밀한 점수가 필요할 때(NPS, 평점 슬라이더 사용)",
    "진지한 의료, 금융 상담",
    "얼굴 표정이 문화마다 다르게 읽힐 수 있는 곳에서 글자 없이",
  ],
  alternatives: [
    { name: "별점", slug: "star-rating", reason: "공개 평점으로 쓸 때" },
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "두 가지로 충분할 때" },
  ],
  accessibility: [
    "라디오 버튼이라 방향키로 고르고 이름은 매우 불만족~매우 만족입니다.",
    "얼굴 그림은 aria-hidden입니다.",
    "고른 얼굴은 색과 크기 둘 다로 보여 줍니다.",
    "고른 결과를 글자로 함께 보여 줍니다.",
  ],
};
