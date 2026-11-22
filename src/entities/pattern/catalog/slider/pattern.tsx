import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SliderThumbnail } from "@/entities/pattern/catalog/slider/SliderThumbnail";

export const sliderPattern: Pattern = {
  slug: "slider",
  name: "Slider",
  nameKo: "슬라이더",
  aliases: ["레인지", "범위 입력", "range input", "slider control"],
  category: "selection",
  summary: "끌어서 값 고르기",
  description:
    "막대 위의 손잡이를 끌어 범위 안에서 값을 고르는 패턴입니다. 정확한 숫자보다 대략적인 값을 빠르게 바꿔 보며 결과를 확인할 때 좋습니다.",
  whenToUse: [
    "가격 상한, 밝기, 음량처럼 범위가 정해진 값",
    "값을 바꾸며 결과를 바로 확인할 때",
    "정확한 숫자가 중요하지 않을 때",
  ],
  whenNotToUse: [
    "정확한 값을 입력해야 할 때(숫자 입력 사용)",
    "범위가 아주 넓어 한 칸이 너무 큰 값",
    "최솟값과 최댓값을 함께 정할 때(범위 슬라이더 사용)",
  ],
  alternatives: [
    { name: "범위 슬라이더", slug: "range-slider", reason: "최솟값과 최댓값을 함께 정할 때" },
    { name: "숫자 입력", slug: "number-stepper", reason: "정확한 정수를 고를 때" },
  ],
  accessibility: [
    "기본 range 입력이라 화살표, Page Up/Down, Home/End와 터치가 그대로 동작합니다.",
    'aria-valuetext로 "35,000원"처럼 단위가 붙은 값을 읽어 줍니다.',
    "현재 값은 output 요소로 화면에도 보여 줍니다.",
    "손잡이 크기를 20px로 키워 손가락으로도 잡기 쉽게 합니다.",
  ],
  tags: [...BASE_TAGS, "Native range", "aria-valuetext"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/slider/SliderDemo").then((m) => m.SliderDemo),
  Thumbnail: SliderThumbnail,
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
