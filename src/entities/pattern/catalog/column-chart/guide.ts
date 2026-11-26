import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "월별, 분기별처럼 순서가 있는 항목 비교",
    "항목 이름이 짧을 때",
    "기간을 바꿔 가며 같은 눈금으로 비교할 때",
  ],
  whenNotToUse: [
    "항목 이름이 길 때(막대 그래프 사용)",
    "점이 많은 추세(선 그래프 사용)",
    "구성비를 보여 줄 때(누적 막대 그래프 사용)",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목 이름이 길거나 많을 때" },
    { name: "히스토그램", slug: "histogram", reason: "값의 분포를 구간으로 볼 때" },
  ],
  accessibility: [
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
    "눈금 값을 글자로 적어 높이를 짐작하지 않아도 됩니다.",
    "움직임 줄이기 설정에서는 높이 전환을 끕니다.",
  ],
};
