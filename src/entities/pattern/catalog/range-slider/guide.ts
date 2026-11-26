import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
