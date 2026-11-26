import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const ratingSliderPattern: Pattern = {
  slug: "rating-slider",

  name: "Rating Slider",
  nameKo: "평점 슬라이더",
  aliases: ["만족도 슬라이더", "점수 슬라이더", "rating range", "score slider"],
  category: "reaction-share",
  summary: "범위 안에서 만족도 점수 입력",
  description:
    "0부터 10까지의 범위를 끌어 점수를 고르는 입력입니다. 손잡이 위에 지금 점수를 띄우고, 양 끝 아래에 뜻을 적어 숫자의 방향을 알려 줍니다.",
  tags: [...BASE_TAGS, "input range", "aria-valuetext", "Survey"],
  loadGuide: () => import("@/entities/pattern/catalog/rating-slider/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-slider/RatingSliderDemo").then(
      (m) => m.RatingSliderDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/rating-slider/RatingSliderThumbnail").then(
      (m) => m.RatingSliderThumbnail,
    ),
  sources: [
    {
      fileName: "RatingSlider.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rating-slider/RatingSlider.tsx?raw"),
    },
    {
      fileName: "RatingSliderDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rating-slider/RatingSliderDemo.tsx?raw"),
    },
  ],
};
