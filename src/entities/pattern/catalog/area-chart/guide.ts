import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "방문자, 매출처럼 양의 흐름을 강조할 때",
    "계열이 하나일 때",
    "0부터의 크기가 의미 있을 때",
  ],
  whenNotToUse: [
    "여러 계열을 비교할 때(선 그래프 사용)",
    "0과 먼 범위의 작은 변화를 볼 때(선 그래프 사용)",
    "카드 안의 작은 추세(스파크라인 사용)",
  ],
  alternatives: [
    { name: "선 그래프", slug: "line-chart", reason: "여러 계열을 비교할 때" },
    { name: "스파크라인", slug: "sparkline", reason: "작은 자리에 추세만 보여 줄 때" },
  ],
  accessibility: [
    "차트 영역에 포커스를 두고 ←/→로 날짜를 옮기면 값을 aria-live로 읽어 줍니다.",
    "면은 옅게 칠하고 선을 함께 그려 경계를 분명히 합니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
};
