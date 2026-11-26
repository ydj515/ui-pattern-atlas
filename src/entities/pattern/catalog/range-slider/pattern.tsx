import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const rangeSliderPattern: Pattern = {
  slug: "range-slider",

  name: "Range Slider",
  nameKo: "범위 슬라이더",
  aliases: ["가격 범위", "듀얼 슬라이더", "dual slider", "min max slider"],
  category: "selection",
  summary: "최솟값과 최댓값 함께 고르기",
  description:
    "한 막대 위의 손잡이 두 개로 최솟값과 최댓값을 함께 정하는 패턴입니다. 가격대나 기간처럼 범위로 거르는 조건에 씁니다.",
  tags: [...BASE_TAGS, "Native range", "aria-valuetext"],
  loadGuide: () => import("@/entities/pattern/catalog/range-slider/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/range-slider/RangeSliderDemo").then(
      (m) => m.RangeSliderDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/range-slider/RangeSliderThumbnail").then(
      (m) => m.RangeSliderThumbnail,
    ),
  sources: [
    {
      fileName: "RangeSlider.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/range-slider/RangeSlider.tsx?raw"),
    },
    {
      fileName: "RangeSliderDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/range-slider/RangeSliderDemo.tsx?raw"),
    },
  ],
};
