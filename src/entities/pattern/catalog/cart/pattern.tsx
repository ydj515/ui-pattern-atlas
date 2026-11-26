import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const cartPattern: Pattern = {
  slug: "cart",

  name: "Cart",
  nameKo: "장바구니",
  aliases: ["쇼핑 카트", "장바구니 목록", "shopping cart", "basket", "bag"],
  category: "checkout",
  summary: "고른 상품만 합계에 넣는 장바구니",
  description:
    "담아 둔 상품마다 이번에 살지 고르고, 수량을 바꾸고, 뺄 수 있는 목록입니다. 합계와 주문 버튼은 선택한 상품만 세어, 결제할 금액이 늘 눈에 보이게 합니다.",
  tags: [...BASE_TAGS, "checkbox", "indeterminate", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/cart/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/cart/CartDemo").then((m) => m.CartDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/cart/CartThumbnail").then((m) => m.CartThumbnail),
  sources: [
    {
      fileName: "Cart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/cart/Cart.tsx?raw"),
    },
    {
      fileName: "CartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/cart/CartDemo.tsx?raw"),
    },
  ],
};
