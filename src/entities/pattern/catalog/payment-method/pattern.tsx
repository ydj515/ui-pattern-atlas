import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const paymentMethodPattern: Pattern = {
  slug: "payment-method",

  name: "Payment Method",
  nameKo: "결제 수단 선택",
  aliases: ["결제 방법", "결제 수단", "payment options", "pay with"],
  category: "checkout",
  summary: "고른 수단에만 필요한 선택을 펼치는 결제 수단",
  description:
    "카드, 간편결제, 계좌이체처럼 결제 수단을 큰 라디오 카드로 고르는 영역입니다. 할부처럼 한 수단에만 필요한 선택은 그 수단을 골랐을 때 카드 안에서만 펼쳐집니다.",
  tags: [...BASE_TAGS, "radio", "fieldset", "has-checked"],
  loadGuide: () => import("@/entities/pattern/catalog/payment-method/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/payment-method/PaymentMethodDemo").then(
      (m) => m.PaymentMethodDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/payment-method/PaymentMethodThumbnail").then(
      (m) => m.PaymentMethodThumbnail,
    ),
  sources: [
    {
      fileName: "PaymentMethod.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/payment-method/PaymentMethod.tsx?raw"),
    },
    {
      fileName: "PaymentMethodDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/payment-method/PaymentMethodDemo.tsx?raw"),
    },
  ],
};
