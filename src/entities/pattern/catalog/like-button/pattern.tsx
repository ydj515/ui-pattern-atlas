import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const likeButtonPattern: Pattern = {
  slug: "like-button",
  name: "Like Button",
  nameKo: "좋아요",
  aliases: ["하트", "좋아요 버튼", "heart button", "favorite"],
  category: "reaction-share",
  summary: "눌러서 반응 남기기",
  description:
    "하트를 눌러 공개적으로 반응을 남기고 개수가 바로 바뀌는 버튼입니다. 서버 응답을 기다리지 않고 먼저 반영한 뒤 실패하면 되돌리고, 켤 때만 하트가 한 번 튑니다.",
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
  tags: [...BASE_TAGS, "aria-pressed", "Optimistic UI", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/like-button/LikeButtonDemo").then((m) => m.LikeButtonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/like-button/LikeButtonThumbnail").then(
      (m) => m.LikeButtonThumbnail,
    ),
  sources: [
    {
      fileName: "LikeButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/like-button/LikeButton.tsx?raw"),
    },
    {
      fileName: "LikeButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/like-button/LikeButtonDemo.tsx?raw"),
    },
  ],
};
