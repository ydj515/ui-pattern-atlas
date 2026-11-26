import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문 일부나 전체를 취소할 때",
    "쿠폰이나 적립금이 환불 금액에 영향을 줄 때",
    "환불 방법과 기간을 알려야 할 때",
  ],
  whenNotToUse: [
    "이미 배송이 시작돼 반품으로 처리할 때",
    "취소 버튼을 찾기 어렵게 숨길 때(해지 미로 참고)",
    "되돌릴 수 없는 일을 확인 없이 처리할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "취소를 어렵게 만드는 다크 패턴" },
    { name: "영수증 요약", slug: "receipt-summary", reason: "취소 뒤 내역을 보여 줄 때" },
  ],
  accessibility: [
    "취소할 상품은 fieldset으로 묶은 체크박스입니다.",
    "환불 예정 금액은 aria-live로 바뀔 때 읽어 줍니다.",
    "상품과 사유를 고르기 전에는 버튼이 disabled입니다.",
  ],
};
