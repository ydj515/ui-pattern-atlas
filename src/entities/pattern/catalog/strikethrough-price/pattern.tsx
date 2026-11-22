import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { StrikethroughPriceThumbnail } from "./StrikethroughPriceThumbnail";

export const strikethroughPricePattern: Pattern = {
  slug: "strikethrough-price",

  name: "Strikethrough Price",
  nameKo: "취소선 가격",
  aliases: ["할인가", "기준가", "정가"],
  category: "pricing-display",
  summary: "기준 가격과 실제 적용 가격을 함께 표시",
  description:
    "취소선이 들어간 기준 가격 옆에 결제할 금액을 보여 줍니다. 할인 조건은 가격 옆에서 확인할 수 있게 합니다.",
  whenToUse: ["검증된 비교 기준가와 현재 적용 가격을 함께 보여 줄 때"],
  whenNotToUse: ["기준 가격을 확인하기 어려운 상품이나 이미 판매가에 포함된 혜택"],
  alternatives: [
    {
      name: "요금제 비교",
      slug: "pricing-plan-comparison",
      reason: "한 상품의 할인 대신 서로 다른 구성의 가격을 비교할 때",
    },
  ],
  accessibility: [
    "기준 가격과 판매가를 텍스트 라벨로 구분하고 취소선이나 색만으로 의미를 전달하지 않습니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./StrikethroughPriceDemo").then((m) => m.StrikethroughPriceDemo),
  Thumbnail: StrikethroughPriceThumbnail,
  sources: [
    {
      fileName: "StrikethroughPrice.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/strikethrough-price/StrikethroughPrice.tsx?raw"),
    },
    {
      fileName: "StrikethroughPriceDemo.tsx",
      role: "Usage",
      load: () => import("./StrikethroughPriceDemo.tsx?raw"),
    },
  ],
};
