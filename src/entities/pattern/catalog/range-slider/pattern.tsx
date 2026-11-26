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
  whenToUse: [
    "가격대, 면적, 기간처럼 범위로 거르는 조건",
    "대략적인 범위를 빠르게 바꿔 보며 결과를 볼 때",
    "범위의 양 끝이 정해져 있을 때",
  ],
  whenNotToUse: [
    "정확한 범위를 입력해야 할 때(숫자 칸 두 개 사용)",
    "한쪽 끝만 정하면 될 때(슬라이더 사용)",
    "범위가 아주 넓어 손잡이로 맞추기 어려울 때",
  ],
  alternatives: [{ name: "슬라이더", slug: "slider", reason: "한쪽 값만 정할 때" }],
  accessibility: [
    "손잡이마다 따로 된 range 입력이라 각각 키보드로 움직일 수 있습니다.",
    '이름이 "가격대 최솟값", "가격대 최댓값"으로 구분되고 aria-valuetext로 단위를 읽습니다.',
    "두 손잡이는 서로 넘어가지 않아 범위가 뒤집히지 않습니다.",
    "현재 범위를 글로도 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "Native range", "aria-valuetext"],
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
