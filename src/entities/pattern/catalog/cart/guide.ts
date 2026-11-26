import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "여러 상품을 모아 한 번에 결제할 때",
    "일부만 먼저 사고 나머지는 남겨 둘 때",
    "수량을 결제 전에 바꿀 때",
  ],
  whenNotToUse: [
    "상품 하나만 바로 사는 흐름(바로 구매 사용)",
    "나중에 볼 상품을 모을 때(찜 사용)",
    "선택하지 않은 상품까지 합계에 넣을 때",
  ],
  alternatives: [
    { name: "찜과 북마크", slug: "wishlist-bookmark", reason: "사지 않고 모아 둘 때" },
    { name: "결제 금액 확인", slug: "checkout-summary", reason: "결제 직전에 금액을 확인할 때" },
    {
      name: "장바구니 몰래 담기",
      slug: "sneak-into-basket",
      reason: "고르지 않은 상품을 몰래 담는 다크 패턴",
    },
  ],
  accessibility: [
    "각 줄의 체크박스는 상품 이름으로 이름이 붙습니다.",
    "전체 선택은 일부만 골랐을 때 indeterminate 상태가 됩니다.",
    "수량과 합계는 aria-live로 바뀔 때 읽어 줍니다.",
  ],
};
