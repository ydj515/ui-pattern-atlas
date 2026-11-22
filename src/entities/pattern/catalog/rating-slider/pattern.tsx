import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RatingSliderThumbnail } from "@/entities/pattern/catalog/rating-slider/RatingSliderThumbnail";

export const ratingSliderPattern: Pattern = {
  slug: "rating-slider",
  name: "Rating Slider",
  nameKo: "평점 슬라이더",
  aliases: ["만족도 슬라이더", "점수 슬라이더", "rating range", "score slider"],
  category: "reaction-share",
  summary: "범위 안에서 만족도 점수 입력",
  description:
    "0부터 10까지의 범위를 끌어 점수를 고르는 입력입니다. 손잡이 위에 지금 점수를 띄우고, 양 끝 아래에 뜻을 적어 숫자의 방향을 알려 줍니다.",
  whenToUse: [
    "수업, 상담처럼 촘촘한 만족도",
    "대략적인 위치를 빠르게 고를 때",
    "양 끝의 뜻이 분명할 때",
  ],
  whenNotToUse: [
    "정확한 숫자를 골라야 할 때(NPS 점수처럼 버튼 사용)",
    "다섯 단계로 충분할 때(별점 사용)",
    "작은 터치 화면에서 정밀하게",
  ],
  alternatives: [
    { name: "NPS 점수", slug: "nps-scale", reason: "숫자 버튼으로 고를 때" },
    { name: "범위 슬라이더", slug: "range-slider", reason: "최소와 최대 두 값을 고를 때" },
  ],
  accessibility: [
    "기본 range 입력이라 방향키로 1점씩 움직입니다.",
    "aria-valuetext로 8점처럼 읽힙니다.",
    "점수 말풍선은 aria-hidden이고 같은 값을 읽어 줍니다.",
    "양 끝 뜻을 글자로 둡니다.",
  ],
  tags: [...BASE_TAGS, "input range", "aria-valuetext", "Survey"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-slider/RatingSliderDemo").then(
      (m) => m.RatingSliderDemo,
    ),
  Thumbnail: RatingSliderThumbnail,
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
