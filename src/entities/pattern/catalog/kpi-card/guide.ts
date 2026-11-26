import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "대시보드 맨 위의 핵심 지표",
    "지난주, 지난달과 비교할 때",
    "차트 없이 숫자 하나로 충분할 때",
  ],
  whenNotToUse: [
    "추세의 모양이 중요할 때(선 그래프나 스파크라인 사용)",
    "비교 기준을 밝힐 수 없을 때",
    "지표가 열 개 이상이라 표가 나을 때",
  ],
  alternatives: [
    { name: "스파크라인", slug: "sparkline", reason: "숫자 옆에 흐름을 덧붙일 때" },
    { name: "정의 목록", slug: "description-list", reason: "여러 값을 이름과 함께 나열할 때" },
  ],
  accessibility: [
    "카드는 지표 이름으로 된 section입니다.",
    '증감은 화살표 대신 "지난주 대비 12% 증가" 같은 글자로 읽어 줍니다.',
    "좋고 나쁨을 색과 함께 글자로 알려 색에만 기대지 않습니다.",
  ],
};
