import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const ratingTagsPattern: Pattern = {
  slug: "rating-tags",

  name: "Rating Tags",
  nameKo: "평가 태그",
  aliases: ["평가 이유", "칭찬 태그", "feedback chips", "review tags"],
  category: "reaction-share",
  summary: "별점과 함께 평가 이유를 고르기",
  description:
    "별점을 고른 뒤 친절해요, 빨라요처럼 이유 칩을 눌러 고르게 하는 패턴입니다. 높은 점수에는 좋았던 점, 낮은 점수에는 아쉬운 점을 보여 주고, 글쓰기는 선택으로 둡니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Chips", "radio"],
  loadGuide: () => import("@/entities/pattern/catalog/rating-tags/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-tags/RatingTagsDemo").then((m) => m.RatingTagsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/rating-tags/RatingTagsThumbnail").then(
      (m) => m.RatingTagsThumbnail,
    ),
  sources: [
    {
      fileName: "RatingTags.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rating-tags/RatingTags.tsx?raw"),
    },
    {
      fileName: "RatingTagsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rating-tags/RatingTagsDemo.tsx?raw"),
    },
  ],
};
