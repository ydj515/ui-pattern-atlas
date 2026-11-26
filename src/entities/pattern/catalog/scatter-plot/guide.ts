import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "두 값의 관계(거리와 시간, 가격과 판매량)를 볼 때",
    "이상한 점을 찾을 때",
    "점이 수십 개 이상일 때",
  ],
  whenNotToUse: [
    "순서 있는 축의 변화(선 그래프 사용)",
    "세 번째 값까지 보여 줄 때(버블 차트 사용)",
    "점이 몇 개뿐일 때(표 사용)",
  ],
  alternatives: [
    { name: "버블 차트", slug: "bubble-chart", reason: "세 번째 값을 원 크기로 더할 때" },
    { name: "선 그래프", slug: "line-chart", reason: "시간 순서의 변화를 볼 때" },
  ],
  accessibility: [
    "가장 가까운 점을 찾아 주므로 작은 점을 정확히 가리키지 않아도 됩니다.",
    "점에 흰 테두리를 둬 겹쳐도 하나씩 보입니다.",
    "표로 보기를 펼치면 모든 점을 표로 볼 수 있습니다.",
  ],
};
