import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RatingTagsThumbnail } from "@/entities/pattern/catalog/rating-tags/RatingTagsThumbnail";

export const ratingTagsPattern: Pattern = {
  slug: "rating-tags",
  name: "Rating Tags",
  nameKo: "평가 태그",
  aliases: ["평가 이유", "칭찬 태그", "feedback chips", "review tags"],
  category: "reaction-share",
  summary: "별점과 함께 평가 이유를 고르기",
  description:
    "별점을 고른 뒤 친절해요, 빨라요처럼 이유 칩을 눌러 고르게 하는 패턴입니다. 높은 점수에는 좋았던 점, 낮은 점수에는 아쉬운 점을 보여 주고, 글쓰기는 선택으로 둡니다.",
  whenToUse: [
    "택시, 배달처럼 평가 이유가 몇 가지로 모이는 서비스",
    "한 번에 빠르게 이유를 받고 싶을 때",
    "이유를 모아 통계를 낼 때",
  ],
  whenNotToUse: [
    "이유가 다양해 칩으로 담기 어려울 때(리뷰 사용)",
    "점수와 상관없이 같은 칩을 보여 줄 때",
    "칩을 꼭 골라야 넘어가게 할 때",
  ],
  alternatives: [
    { name: "리뷰", slug: "written-review", reason: "글로 자세히 받을 때" },
    { name: "필터 칩", slug: "filter-chip", reason: "목록을 거르는 칩" },
  ],
  accessibility: [
    "칩은 aria-pressed 토글이고 고르면 체크 표시도 붙습니다.",
    "칩 묶음에 좋았던 점처럼 이름을 붙입니다.",
    "별점은 라디오 버튼이라 키보드로 고릅니다.",
    "점수가 좋음과 나쁨을 넘나들면 고른 칩을 비웁니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Chips", "radio"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-tags/RatingTagsDemo").then((m) => m.RatingTagsDemo),
  Thumbnail: RatingTagsThumbnail,
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
