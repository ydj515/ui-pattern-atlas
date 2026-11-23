import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BundleDealThumbnail } from "@/entities/pattern/catalog/bundle-deal/BundleDealThumbnail";

export const bundleDealPattern: Pattern = {
  slug: "bundle-deal",
  name: "Bundle Deal",
  nameKo: "묶음 할인",
  aliases: ["수량 할인", "여러 개 구매 할인", "1+1", "multi-buy", "quantity discount"],
  category: "pricing-display",
  summary: "몇 개부터 얼마가 싸지는지 표시",
  description:
    "수량을 바꾸면 묶음 할인이 언제부터 적용되는지, 적용되면 얼마가 되는지 바로 계산해 보여 주는 수량 선택기입니다. 기준 수량에 못 미치면 몇 개 더 담으면 되는지 알리고, 적용되면 원래 합계를 줄을 그어 함께 둡니다.",
  whenToUse: [
    "2개, 3개부터 할인되는 소모품",
    "수량에 따라 단가가 달라질 때",
    "장바구니에 담기 전에 합계를 보여 줄 때",
  ],
  whenNotToUse: [
    "묶음과 상관없이 단가가 같을 때(수량 선택기 사용)",
    "원하지 않는 수량을 담게 유도할 때",
    "서로 다른 상품을 묶는 세트 구성",
  ],
  alternatives: [
    { name: "숫자 입력", slug: "number-stepper", reason: "할인 없이 수량만 고를 때" },
    {
      name: "무료배송 진행 바",
      slug: "free-shipping-progress",
      reason: "수량 대신 결제 금액이 기준일 때",
    },
  ],
  accessibility: [
    "빼기와 더하기 버튼에 이름이 있고, 한계에 닿으면 disabled가 됩니다.",
    "합계는 aria-live로 바뀔 때마다 읽어 줍니다.",
    "할인 적용 여부를 색이 아닌 글자로 알립니다.",
  ],
  tags: [...BASE_TAGS, "output", "aria-live", "del"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bundle-deal/BundleDealDemo").then((m) => m.BundleDealDemo),
  Thumbnail: BundleDealThumbnail,
  sources: [
    {
      fileName: "BundleDeal.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bundle-deal/BundleDeal.tsx?raw"),
    },
    {
      fileName: "BundleDealDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bundle-deal/BundleDealDemo.tsx?raw"),
    },
  ],
};
