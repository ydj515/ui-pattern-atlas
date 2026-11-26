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
  tags: [...BASE_TAGS, "aria-pressed", "Optimistic UI", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/like-button/guide").then((m) => m.guide),
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
