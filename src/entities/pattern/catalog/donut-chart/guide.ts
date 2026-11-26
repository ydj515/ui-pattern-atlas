import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "항목이 2~4개이고 합이 100%일 때",
    "한 항목이 전체의 어느 정도인지 강조할 때",
    "합계와 구성비를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "항목이 다섯 개를 넘을 때(막대 그래프 사용)",
    "비슷한 크기의 조각을 비교할 때",
    "시간에 따른 구성 변화(누적 막대 그래프 사용)",
  ],
  alternatives: [
    {
      name: "누적 막대 그래프",
      slug: "stacked-bar-chart",
      reason: "여러 기간의 구성을 나란히 볼 때",
    },
    { name: "막대 그래프", slug: "bar-chart", reason: "비슷한 크기를 정확히 비교할 때" },
  ],
  accessibility: [
    "범례 항목은 버튼이라 Tab으로 옮기며 각 조각을 강조합니다.",
    "범례에 값과 비율을 글자로 적어 고리를 보지 않아도 읽힙니다.",
    "조각 사이에 2px 틈을 두어 색이 비슷해도 경계가 보입니다.",
  ],
};
