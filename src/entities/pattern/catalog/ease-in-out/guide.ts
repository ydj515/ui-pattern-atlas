import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "화면에 나타나는 요소(ease-out)",
    "화면 밖으로 사라지는 요소(ease-in)",
    "한 지점에서 다른 지점으로 옮겨 가는 요소(ease-in-out)",
  ],
  whenNotToUse: [
    "진행률, 회전 로딩처럼 일정한 속도가 의미인 경우(linear)",
    "아주 짧은 100ms 이하 변화(차이를 느끼기 어려움)",
    "곡선을 화면마다 제각각 정할 때(토큰으로 통일하기)",
  ],
  alternatives: [
    { name: "스프링", slug: "spring", reason: "목표를 지나쳤다 돌아오는 움직임" },
    { name: "바운스", slug: "bounce", reason: "바닥에 닿아 튀는 움직임" },
  ],
  accessibility: [
    "점은 장식이고 곡선 이름과 값은 글자로 함께 보여 줍니다.",
    "동작 줄이기에서는 재생하면 바로 끝 위치로 옮깁니다.",
    "재생 버튼으로만 움직여 저절로 반복되지 않습니다.",
  ],
};
