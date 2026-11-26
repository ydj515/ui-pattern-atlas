import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가격, 판매량, 리뷰 수처럼 세 값을 함께 볼 때",
    "항목이 4~12개 정도일 때",
    "어느 영역에 큰 항목이 몰렸는지 볼 때",
  ],
  whenNotToUse: [
    "원 크기의 작은 차이를 비교해야 할 때",
    "항목이 많아 원이 심하게 겹칠 때(산점도 사용)",
    "값이 두 개뿐일 때(산점도 사용)",
  ],
  alternatives: [
    { name: "산점도", slug: "scatter-plot", reason: "두 값의 관계만 볼 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "한 값을 정확히 비교할 때" },
  ],
  accessibility: [
    "원 크기는 반지름이 아닌 면적에 비례해 과장하지 않습니다.",
    "원 안에 항목 이름을 적어 색에만 기대지 않습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
};
