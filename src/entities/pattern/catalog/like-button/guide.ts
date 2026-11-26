import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "게시물, 댓글에 가볍게 공감할 때",
    "누른 사람 수가 의미 있을 때",
    "한 번에 켜고 끌 수 있을 때",
  ],
  whenNotToUse: [
    "나만 보는 저장(찜과 북마크 사용)",
    "여러 감정을 구분해야 할 때(이모지 반응 사용)",
    "평가 점수가 필요할 때(별점 사용)",
  ],
  alternatives: [
    { name: "찜과 북마크", slug: "wishlist-bookmark", reason: "나중에 보려고 내 목록에 저장할 때" },
    { name: "이모지 반응", slug: "emoji-reaction", reason: "여러 감정으로 반응할 때" },
  ],
  accessibility: [
    "aria-pressed로 눌린 상태를 알립니다.",
    "버튼 이름에 좋아요와 개수가 함께 들어 있습니다.",
    "하트 그림은 aria-hidden입니다.",
    "튀는 효과는 동작 줄이기에서 생략합니다.",
  ],
};
