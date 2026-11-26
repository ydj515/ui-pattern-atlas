import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1786년 윌리엄 플레이페어(William Playfair)가 책 「상업과 정치 지도」에서 수출입 금액의 변화를 그린 것이 처음으로 알려져 있어요.",
  whenToUse: [
    "시간에 따른 추세를 볼 때",
    "올해와 작년처럼 두세 계열을 같은 축에서 비교할 때",
    "점이 많아 막대로는 빽빽할 때",
  ],
  whenNotToUse: [
    "순서 없는 항목 비교(막대 그래프 사용)",
    "단위가 다른 두 값을 한 차트에 둘 때(차트를 나누기)",
    "카드 안의 작은 추세(스파크라인 사용)",
  ],
  alternatives: [
    { name: "스파크라인", slug: "sparkline", reason: "축 없이 작은 추세만 보여 줄 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "항목끼리 크기를 비교할 때" },
  ],
  accessibility: [
    "차트 영역에 포커스를 두고 ←/→로 지점을 옮기면 값을 aria-live로 읽어 줍니다.",
    "범례와 선 끝 이름으로 계열을 구분해 색에만 기대지 않습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
};
