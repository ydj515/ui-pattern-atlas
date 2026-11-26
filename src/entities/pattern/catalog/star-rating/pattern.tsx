import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const starRatingPattern: Pattern = {
  slug: "star-rating",

  name: "Star Rating",
  nameKo: "별점",
  aliases: ["별점 주기", "평점 입력", "rating stars", "5 star rating"],
  category: "reaction-share",
  summary: "정수·반 단위 별로 평가",
  description:
    "별 다섯 개로 점수를 매기는 입력입니다. 속은 기본 라디오 버튼이라 방향키로 점수를 옮길 수 있고, 반 단위가 필요하면 별마다 왼쪽과 오른쪽 절반을 따로 누를 수 있습니다.",
  tags: [...BASE_TAGS, "radio", "fieldset", "SVG clipPath"],
  loadGuide: () => import("@/entities/pattern/catalog/star-rating/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/star-rating/StarRatingDemo").then((m) => m.StarRatingDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/star-rating/StarRatingThumbnail").then(
      (m) => m.StarRatingThumbnail,
    ),
  sources: [
    {
      fileName: "StarRating.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/star-rating/StarRating.tsx?raw"),
    },
    {
      fileName: "StarRatingDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/star-rating/StarRatingDemo.tsx?raw"),
    },
  ],
};
