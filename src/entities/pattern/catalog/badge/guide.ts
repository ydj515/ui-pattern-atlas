import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "장바구니, 알림처럼 개수가 행동을 부르는 곳",
    "아이콘 버튼 위에 짧게 알려 줄 때",
    "개수가 자주 바뀔 때",
  ],
  whenNotToUse: [
    "개수가 중요하지 않고 새로 생겼다는 것만 알리면 될 때(새 기능 점 사용)",
    "상태를 알릴 때(상태 점 사용)",
    "모든 메뉴에 붙여 눈에 띄지 않게 될 때",
  ],
  alternatives: [
    { name: "새 기능 점", slug: "feature-dot", reason: "개수 없이 새로 생긴 것만 알릴 때" },
    { name: "안 읽음 표시", slug: "unread-indicator", reason: "목록의 항목별 새 표시" },
  ],
  accessibility: [
    '배지는 장식이라 aria-hidden이고, 개수는 버튼 이름("장바구니, 상품 3개")에 넣습니다.',
    "0일 때는 렌더링하지 않습니다.",
    '큰 숫자는 "99+"로 줄여 버튼을 가리지 않습니다.',
    "흰 테두리로 아이콘과 겹쳐도 구분됩니다.",
  ],
};
