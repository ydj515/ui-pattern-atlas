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
  whenToUse: [
    "사진 보정, 리모델링, 필터 적용처럼 전후 차이가 핵심일 때",
    "두 이미지의 구도가 같을 때",
    "차이를 직접 확인하게 하고 싶을 때",
  ],
  whenNotToUse: [
    "두 이미지 구도가 다를 때(나란히 놓기)",
    "세 개 이상을 비교할 때",
    "차이가 아주 작아 보이지 않을 때",
  ],
  alternatives: [{ name: "이미지 갤러리", slug: "image-gallery", reason: "여러 장을 바꿔 볼 때" }],
  accessibility: [
    "손잡이는 그림 위에 겹친 기본 range 입력이라 끌기, 클릭, 화살표 키가 모두 됩니다.",
    'aria-valuetext로 "보정 전 50%, 보정 후 50%"처럼 양쪽 비율을 읽어 줍니다.',
    "두 이미지는 장식이라 aria-hidden이고, 비교 대상은 라벨로 알립니다.",
    "포커스하면 테두리로 표시합니다.",
  ],
  tags: [...BASE_TAGS, "Native range", "clip-path"],
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
