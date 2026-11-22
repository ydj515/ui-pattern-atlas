import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { StarRatingThumbnail } from "@/entities/pattern/catalog/star-rating/StarRatingThumbnail";

export const starRatingPattern: Pattern = {
  slug: "star-rating",
  name: "Star Rating",
  nameKo: "별점",
  aliases: ["별점 주기", "평점 입력", "rating stars", "5 star rating"],
  category: "reaction-share",
  summary: "정수·반 단위 별로 평가",
  description:
    "별 다섯 개로 점수를 매기는 입력입니다. 속은 기본 라디오 버튼이라 방향키로 점수를 옮길 수 있고, 반 단위가 필요하면 별마다 왼쪽과 오른쪽 절반을 따로 누를 수 있습니다.",
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
  tags: [...BASE_TAGS, "radio", "fieldset", "SVG clipPath"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/star-rating/StarRatingDemo").then((m) => m.StarRatingDemo),
  Thumbnail: StarRatingThumbnail,
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
