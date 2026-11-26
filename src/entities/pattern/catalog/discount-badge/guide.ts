import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "최근 판매가보다 실제로 싸졌을 때",
    "쿠폰처럼 할인이 겹쳐 최종 할인율이 바뀔 때",
    "목록에서 할인 상품을 빠르게 구분할 때",
  ],
  whenNotToUse: [
    "팔린 적 없는 정가를 기준으로 할 때(앵커링 참고)",
    "금액 차이가 더 중요할 때(취소선 가격 사용)",
    "모든 상품이 늘 할인 중일 때",
  ],
  alternatives: [
    {
      name: "취소선 가격",
      slug: "strikethrough-price",
      reason: "기준가와 적용가를 함께 보여 줄 때",
    },
    { name: "앵커링", slug: "anchoring", reason: "첫 숫자가 판단에 주는 영향을 알아볼 때" },
  ],
  accessibility: [
    "퍼센트와 기준 문구는 화면에만 두고, 스크린 리더에는 한 문장으로 읽어 줍니다.",
    "색만이 아니라 글자로 할인율을 보여 줍니다.",
    "기준가가 없으면 배지를 그리지 않아 빈 숫자를 읽지 않습니다.",
  ],
};
