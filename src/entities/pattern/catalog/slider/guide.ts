import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
