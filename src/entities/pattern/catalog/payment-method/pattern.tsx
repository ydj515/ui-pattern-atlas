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
  whenToUse: [
    "결제 수단이 여러 가지일 때",
    "수단마다 추가 선택이 다를 때",
    "자주 쓰는 수단을 기본으로 둘 때",
  ],
  whenNotToUse: [
    "수단이 하나뿐일 때",
    "카드 번호를 직접 받는 화면(결제사 화면 사용)",
    "수단마다 가격이 다른데 알리지 않을 때",
  ],
  alternatives: [
    { name: "라디오 그룹", slug: "radio-group", reason: "선택지 하나를 고르는 기본 형태" },
    { name: "결제 금액 확인", slug: "checkout-summary", reason: "결제 직전 금액 확인" },
  ],
  accessibility: [
    "fieldset과 legend로 묶은 라디오 버튼이라 방향키로 옮겨 다닙니다.",
    "할부 선택은 카드를 골랐을 때만 나타나 읽을 양이 줄어듭니다.",
    "선택한 카드는 테두리와 배경으로 함께 표시합니다.",
  ],
  tags: [...BASE_TAGS, "radio", "fieldset", "has-checked"],
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
