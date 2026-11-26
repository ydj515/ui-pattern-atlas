import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sliderPattern: Pattern = {
  slug: "slider",

  name: "Slider",
  nameKo: "슬라이더",
  aliases: ["레인지", "범위 입력", "range input", "slider control"],
  category: "selection",
  summary: "끌어서 값 고르기",
  description:
    "막대 위의 손잡이를 끌어 범위 안에서 값을 고르는 패턴입니다. 정확한 숫자보다 대략적인 값을 빠르게 바꿔 보며 결과를 확인할 때 좋습니다.",
  tags: [...BASE_TAGS, "Native range", "aria-valuetext"],
  loadGuide: () => import("@/entities/pattern/catalog/slider/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/slider/SliderDemo").then((m) => m.SliderDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/slider/SliderThumbnail").then((m) => m.SliderThumbnail),
  sources: [
    {
      fileName: "Slider.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/slider/Slider.tsx?raw"),
    },
    {
      fileName: "SliderDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/slider/SliderDemo.tsx?raw"),
    },
  ],
};
