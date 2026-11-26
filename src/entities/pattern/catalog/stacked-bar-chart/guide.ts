import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "기간마다 전체와 구성이 함께 바뀔 때",
    "구성 항목이 2~3개일 때",
    "구성비를 여러 막대에서 나란히 비교할 때",
  ],
  whenNotToUse: [
    "구성 항목이 네 개를 넘을 때(기타로 묶기)",
    "가운데 조각의 크기를 정확히 비교할 때(막대 그래프로 나누기)",
    "전체 하나의 구성만 볼 때(도넛 차트 사용)",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목 하나씩 크기를 비교할 때" },
    { name: "도넛 차트", slug: "donut-chart", reason: "전체 하나의 구성비를 볼 때" },
  ],
  accessibility: [
    "범례에 모든 계열 이름을 적고 같은 순서로 쌓습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
    "조각 사이 2px 틈으로 비슷한 색도 경계가 보입니다.",
  ],
};
