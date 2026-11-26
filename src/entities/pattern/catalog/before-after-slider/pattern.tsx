import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const beforeAfterSliderPattern: Pattern = {
  slug: "before-after-slider",

  name: "Before/After Slider",
  nameKo: "전후 비교",
  aliases: ["비교 슬라이더", "보정 전후", "comparison slider", "image compare"],
  category: "card-gallery",
  summary: "가운데를 끌어 두 이미지 비교",
  description:
    "같은 자리의 두 이미지를 겹쳐 두고, 가운데 손잡이를 끌어 한쪽을 더 보이게 하는 패턴입니다. 보정 전후나 리모델링 전후 차이를 한눈에 보여 줍니다.",
  tags: [...BASE_TAGS, "Native range", "clip-path"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/before-after-slider/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/before-after-slider/BeforeAfterSliderDemo").then(
      (m) => m.BeforeAfterSliderDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/before-after-slider/BeforeAfterSliderThumbnail").then(
      (m) => m.BeforeAfterSliderThumbnail,
    ),
  sources: [
    {
      fileName: "BeforeAfterSlider.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/before-after-slider/BeforeAfterSlider.tsx?raw"),
    },
    {
      fileName: "BeforeAfterSliderDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/before-after-slider/BeforeAfterSliderDemo.tsx?raw"),
    },
  ],
};
