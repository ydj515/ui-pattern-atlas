import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "2005년 데이터 시각화 전문가 스티븐 퓨(Stephen Few)가 대시보드의 게이지를 대신하려고 고안했어요. 총알(bullet)처럼 가늘고 긴 막대 모양이에요.",
  whenToUse: [
    "대시보드에 목표가 있는 지표를 여러 개 둘 때",
    "게이지를 놓을 자리가 부족할 때",
    "값이 어느 평가 구간에 있는지 보여 줄 때",
  ],
  whenNotToUse: [
    "목표나 기준이 없을 때(막대 그래프 사용)",
    "지표가 하나뿐이라 크게 보여 줄 때(게이지 사용)",
    "시간에 따른 변화(선 그래프 사용)",
  ],
  alternatives: [
    { name: "게이지", slug: "gauge", reason: "지표 하나를 크게 보여 줄 때" },
    { name: "KPI 카드", slug: "kpi-card", reason: "숫자와 증감만 보여 줄 때" },
  ],
  accessibility: [
    'role="meter"와 aria-valuetext로 값과 목표를 함께 알립니다.',
    "평가 구간은 회색 농도로만 나눠 색에 의미를 겹치지 않습니다.",
    "구간 기준을 글자로 따로 적습니다.",
  ],
};
