import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "설문 결과처럼 하나의 비율을 쉽게 전할 때",
    "비율을 사람 수처럼 느끼게 하고 싶을 때",
    "항목이 1~3개일 때",
  ],
  whenNotToUse: [
    "소수점까지 정확한 비율(숫자로 표시)",
    "항목이 네 개 이상일 때(막대 그래프 사용)",
    "여러 그룹의 비율을 비교할 때(누적 막대 그래프 사용)",
  ],
  alternatives: [
    { name: "파이 차트", slug: "pie-chart", reason: "비율을 조각으로 보여 줄 때" },
    { name: "누적 막대 그래프", slug: "stacked-bar-chart", reason: "여러 그룹을 나란히 비교할 때" },
  ],
  accessibility: [
    "격자는 aria-hidden이고 범례에 모든 비율을 글자로 적습니다.",
    "칸을 범례와 같은 순서로 채웁니다.",
    "한 칸이 얼마인지 글자로 알려 줍니다.",
  ],
};
