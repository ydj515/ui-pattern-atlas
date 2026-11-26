import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bundleDealPattern: Pattern = {
  slug: "bundle-deal",

  name: "Bundle Deal",
  nameKo: "묶음 할인",
  aliases: ["수량 할인", "여러 개 구매 할인", "1+1", "multi-buy", "quantity discount"],
  category: "pricing-display",
  summary: "몇 개부터 얼마가 싸지는지 표시",
  description:
    "수량을 바꾸면 묶음 할인이 언제부터 적용되는지, 적용되면 얼마가 되는지 바로 계산해 보여 주는 수량 선택기입니다. 기준 수량에 못 미치면 몇 개 더 담으면 되는지 알리고, 적용되면 원래 합계를 줄을 그어 함께 둡니다.",
  tags: [...BASE_TAGS, "output", "aria-live", "del"],
  loadGuide: () => import("@/entities/pattern/catalog/bundle-deal/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bundle-deal/BundleDealDemo").then((m) => m.BundleDealDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bundle-deal/BundleDealThumbnail").then(
      (m) => m.BundleDealThumbnail,
    ),
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
