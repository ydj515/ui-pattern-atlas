import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["주문서 맨 아래 결제 버튼 앞", "할인과 배송비가 붙을 때", "결제 동의가 필요할 때"],
  whenNotToUse: [
    "결제 뒤 영수증(영수증 요약 사용)",
    "마지막 단계에 처음 비용을 붙일 때(숨은 비용 참고)",
    "금액이 하나뿐인 단순 구매",
  ],
  alternatives: [
    { name: "영수증 요약", slug: "receipt-summary", reason: "결제가 끝난 뒤 내역을 보여 줄 때" },
    { name: "숨은 비용", slug: "hidden-costs", reason: "비용을 마지막에 숨기는 다크 패턴" },
  ],
  accessibility: [
    "금액 목록은 dl로 항목 이름과 값을 짝지어 읽힙니다.",
    "최종 금액은 aria-live로 바뀔 때 읽어 줍니다.",
    "동의 전에는 결제 버튼이 disabled입니다.",
  ],
};
