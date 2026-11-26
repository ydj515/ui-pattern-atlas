import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품 목록, 상세, 결제의 가격 표시를 맞출 때",
    "수수료와 배송비를 언제 보여 줄지 정할 때",
    "최종 금액이 달라지는 지점을 찾을 때",
  ],
  whenNotToUse: [
    "처음 가격을 낮아 보이게 하려고 필수 비용을 빼 둘 때",
    "마지막 단계에서 비용을 더할 때",
    "비용 이름을 모호하게 쓸 때",
  ],
  alternatives: [
    { name: "영수증 요약", slug: "receipt-summary", reason: "결제 금액 내역을 보여 줄 때" },
    {
      name: "장바구니 몰래 담기",
      slug: "sneak-into-basket",
      reason: "원하지 않은 항목이 더해질 때",
    },
  ],
  accessibility: [
    "가격 옆에 포함된 비용을 글로 적습니다.",
    "총액은 tabular-nums로 정렬합니다.",
    "추가 비용을 색으로만 강조하지 않습니다.",
    "결제 전 최종 금액을 한 번 더 보여 줍니다.",
  ],
};
