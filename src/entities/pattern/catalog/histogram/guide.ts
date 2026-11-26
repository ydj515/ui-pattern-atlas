import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin: "1890년대 통계학자 칼 피어슨(Karl Pearson)이 처음 쓴 말로 알려져 있어요.",
  whenToUse: [
    "주문 금액, 응답 시간처럼 값이 어떻게 퍼져 있는지 볼 때",
    "값이 수십 개 이상일 때",
    "한쪽으로 치우쳤는지, 봉우리가 몇 개인지 볼 때",
  ],
  whenNotToUse: [
    "범주별 비교(세로 막대 그래프 사용)",
    "값이 몇 개뿐일 때",
    "두 값의 관계(산점도 사용)",
  ],
  alternatives: [
    { name: "세로 막대 그래프", slug: "column-chart", reason: "정해진 범주를 비교할 때" },
    { name: "산점도", slug: "scatter-plot", reason: "두 값의 관계를 볼 때" },
  ],
  accessibility: [
    "막대를 가리키면 구간과 개수를 글자로 보여 줍니다.",
    "표로 보기에 모든 구간과 개수를 적습니다.",
    "축 양 끝 값을 글자로 적습니다.",
  ],
};
