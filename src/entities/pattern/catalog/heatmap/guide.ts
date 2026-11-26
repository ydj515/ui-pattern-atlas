import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "요일 × 시간처럼 두 기준의 분포",
    "많고 적은 곳의 패턴을 찾을 때",
    "칸이 많아 숫자로 다 적기 어려울 때",
  ],
  whenNotToUse: [
    "정확한 값을 비교해야 할 때(표나 막대 그래프 사용)",
    "칸이 몇 개뿐일 때",
    "양수와 음수가 섞일 때(두 색 발산 척도 필요)",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "정확한 숫자를 비교할 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "한 기준으로만 나눌 때" },
  ],
  accessibility: [
    "격자에 포커스를 두고 화살표로 칸을 옮기면 값을 aria-live로 읽어 줍니다.",
    "한 가지 색의 밝기 차이로만 크기를 나타내 색약에도 순서가 보입니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
};
