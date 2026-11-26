import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "원래는 마차 앞에서 튀어 오르는(dash) 흙탕물을 막던 판을 가리켰어요. 자동차 계기판을 거쳐, 여러 상태를 한눈에 보는 화면이라는 뜻이 됐어요.",
  whenToUse: [
    "매출, 방문 같은 지표를 정기적으로 확인하는 화면",
    "요약 → 추이 → 상세 순서로 읽혀야 할 때",
    "기간을 바꿔 비교할 때",
  ],
  whenNotToUse: [
    "지표가 한두 개뿐일 때(카드 하나로 충분)",
    "작업이 중심인 화면",
    "모든 차트를 같은 크기로 늘어놓을 때(중요도가 사라짐)",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "상세 숫자를 비교할 때" },
    { name: "벤토 그리드", slug: "bento-grid", reason: "중요도가 다른 칸을 묶을 때" },
  ],
  accessibility: [
    '지표 카드는 목록이라 개수가 함께 읽히고, 변화는 "증가/감소"를 글로 씁니다.',
    "화살표와 색은 보조 수단이라 aria-hidden입니다.",
    "차트에는 figcaption으로 무엇을 보여 주는지 씁니다.",
    "기간 버튼은 aria-pressed로 상태를 알립니다.",
  ],
};
