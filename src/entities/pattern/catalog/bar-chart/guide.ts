import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1786년 스코틀랜드의 윌리엄 플레이페어(William Playfair)가 책 「상업과 정치 지도」에서 처음 쓴 것으로 알려져 있어요. 선 그래프도 같은 책에서 처음 선보였어요.",
  whenToUse: [
    "항목끼리 크기를 비교할 때",
    "항목이 3~12개 정도일 때",
    "기간을 바꿔도 같은 눈금으로 비교할 때",
  ],
  whenNotToUse: [
    "시간에 따른 변화(선 그래프 사용)",
    "전체에서 차지하는 비중(도넛 차트나 누적 막대 그래프 사용)",
    "숫자 하나만 강조할 때(KPI 카드 사용)",
  ],
  alternatives: [
    {
      name: "누적 막대 그래프",
      slug: "stacked-bar-chart",
      reason: "막대 안의 구성까지 보여 줄 때",
    },
    { name: "선 그래프", slug: "line-chart", reason: "순서 있는 축에서 변화를 볼 때" },
  ],
  accessibility: [
    "각 항목은 이름과 값이 있는 목록이라 숫자를 그대로 읽어 줍니다.",
    "막대는 aria-hidden 장식이고 색에 의미를 두지 않습니다.",
    "움직임 줄이기 설정에서는 길이 전환을 끕니다.",
  ],
};
