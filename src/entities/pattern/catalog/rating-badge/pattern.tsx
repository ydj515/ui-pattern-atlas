import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const ratingBadgePattern: Pattern = {
  slug: "rating-badge",

  name: "Rating Badge",
  nameKo: "평점 배지",
  aliases: ["평점 표시", "별점 요약", "rating label", "review count"],
  category: "reaction-share",
  summary: "카드에서 평점과 평가 개수 요약",
  description:
    "카드나 목록에 별 하나와 평점, 리뷰 수를 짧게 붙이는 표시입니다. 리뷰 수를 함께 보여 줘 7개 리뷰의 4.9와 1,284개 리뷰의 4.6을 구분할 수 있게 합니다.",
  tags: [...BASE_TAGS, "sr-only", "tabular-nums", "Cards"],
  loadGuide: () => import("@/entities/pattern/catalog/rating-badge/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-badge/RatingBadgeDemo").then(
      (m) => m.RatingBadgeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/rating-badge/RatingBadgeThumbnail").then(
      (m) => m.RatingBadgeThumbnail,
    ),
  sources: [
    {
      fileName: "RatingBadge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rating-badge/RatingBadge.tsx?raw"),
    },
    {
      fileName: "RatingBadgeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rating-badge/RatingBadgeDemo.tsx?raw"),
    },
  ],
};
