import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "통계 그래픽 연구자 에드워드 터프티(Edward Tufte)가 이름 붙인 말로, '단어만 한 크기의 그래픽'이라고 정의했어요.",
  whenToUse: [
    "표의 각 행에 추세를 덧붙일 때",
    "KPI 카드 숫자 옆",
    "여러 항목의 흐름을 한눈에 훑을 때",
  ],
  whenNotToUse: [
    "정확한 값을 읽어야 할 때(선 그래프 사용)",
    "행마다 눈금이 달라 오해할 수 있을 때",
    "점이 세 개 이하일 때",
  ],
  alternatives: [
    { name: "선 그래프", slug: "line-chart", reason: "축과 값을 함께 보여 줄 때" },
    { name: "KPI 카드", slug: "kpi-card", reason: "추세보다 현재 값과 증감이 중요할 때" },
  ],
  accessibility: [
    'SVG는 role="img"이고 처음과 마지막 값을 담은 설명을 붙입니다.',
    "정확한 최신 값은 옆 칸에 글자로 둡니다.",
    "행마다 눈금이 달라 모양만 비교하라는 점을 화면 설계로 분명히 합니다.",
  ],
};
