import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { FreeShippingProgressThumbnail } from "@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressThumbnail";

export const freeShippingProgressPattern: Pattern = {
  slug: "free-shipping-progress",
  name: "Free Shipping Progress",
  nameKo: "무료배송 진행 바",
  aliases: [
    "무료배송까지",
    "배송비 진행률",
    "장바구니 진행 바",
    "free shipping bar",
    "shipping threshold",
  ],
  category: "pricing-display",
  summary: "무료배송까지 남은 금액",
  description:
    "장바구니 금액이 무료배송 기준까지 얼마나 남았는지 금액과 막대로 보여 주는 진행 바입니다. 상품을 담을 때마다 남은 금액이 줄고, 기준을 넘으면 무료배송이라고 바뀝니다.",
  whenToUse: [
    "일정 금액 이상 무료배송일 때",
    "장바구니와 상품 추천 옆",
    "남은 금액이 크지 않아 채울 만할 때",
  ],
  whenNotToUse: [
    "모든 주문이 무료배송일 때",
    "기준이 너무 높아 막대가 거의 비어 있을 때",
    "배송비가 지역마다 크게 다를 때",
  ],
  alternatives: [
    { name: "프로그레스 바", slug: "progress-bar", reason: "작업 진행률을 보여 줄 때" },
    { name: "묶음 할인", slug: "bundle-deal", reason: "금액 대신 수량이 기준일 때" },
  ],
  accessibility: [
    "막대는 progress 요소이고 이름이 있습니다.",
    "남은 금액은 글자로 함께 보여 주고 aria-live로 알립니다.",
    "기준을 넘으면 색과 함께 글자로 무료배송이라고 알립니다.",
  ],
  tags: [...BASE_TAGS, "progress", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressDemo").then(
      (m) => m.FreeShippingProgressDemo,
    ),
  Thumbnail: FreeShippingProgressThumbnail,
  sources: [
    {
      fileName: "FreeShippingProgress.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/free-shipping-progress/FreeShippingProgress.tsx?raw"),
    },
    {
      fileName: "FreeShippingProgressDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressDemo.tsx?raw"),
    },
  ],
};
