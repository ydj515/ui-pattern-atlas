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
  whenToUse: [
    "상품, 가게 카드와 검색 결과",
    "정렬이나 비교의 근거로 평점을 보여 줄 때",
    "좁은 자리에 평점을 넣어야 할 때",
  ],
  whenNotToUse: [
    "점수 분포가 중요할 때(평점 요약 사용)",
    "리뷰 수 없이 평점만 보여 줄 때",
    "평점을 입력받을 때(별점 사용)",
  ],
  alternatives: [
    { name: "평점 요약", slug: "rating-summary", reason: "분포까지 보여 줄 때" },
    { name: "배지", slug: "badge", reason: "상태나 개수 표시" },
  ],
  accessibility: [
    "화면 읽기에는 평점 5점 만점에 4.6점, 리뷰 1,284개처럼 한 문장으로 읽힙니다.",
    "별 기호와 숫자는 aria-hidden입니다.",
    "숫자는 tabular-nums로 맞춥니다.",
    "정렬 버튼은 aria-pressed로 현재 기준을 알립니다.",
  ],
  tags: [...BASE_TAGS, "sr-only", "tabular-nums", "Cards"],
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
