import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "매출에서 순이익까지처럼 단계별 증감을 설명할 때",
    "재고, 인원처럼 들어오고 나간 양을 볼 때",
    "무엇이 결과를 가장 많이 바꿨는지 찾을 때",
  ],
  whenNotToUse: [
    "항목 사이에 순서나 누적 관계가 없을 때(막대 그래프 사용)",
    "시간에 따른 값 자체의 변화(선 그래프 사용)",
    "단계가 열 개를 넘을 때",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목별 크기만 비교할 때" },
    { name: "퍼널 분석", slug: "funnel-analysis", reason: "단계마다 줄어드는 사람 수를 볼 때" },
  ],
  accessibility: [
    "늘어남과 줄어듦을 색과 함께 +, − 부호로 적습니다.",
    "막대마다 값을 글자로 적고, 가리키면 누적 합계를 읽어 줍니다.",
    "표로 보기에 변화량과 누적 값을 함께 적습니다.",
  ],
};
