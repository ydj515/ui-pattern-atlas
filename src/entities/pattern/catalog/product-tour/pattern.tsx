import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const productTourPattern: Pattern = {
  slug: "product-tour",

  name: "Product Tour",
  nameKo: "프로덕트 투어",
  aliases: ["가이드 투어", "기능 둘러보기", "guided tour", "walkthrough"],
  category: "onboarding",
  summary: "여러 단계로 화면을 짚어 주기",
  description:
    "검색, 필터, 내보내기처럼 화면의 주요 기능을 순서대로 하나씩 밝히며 설명하는 패턴입니다. 몇 번째 단계인지 보여 주고, 이전, 다음, 건너뛰기로 언제든 그만둘 수 있습니다.",
  tags: [...BASE_TAGS, "role=dialog", "Focus management", "Stepper"],
  loadGuide: () => import("@/entities/pattern/catalog/product-tour/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/product-tour/ProductTourDemo").then(
      (m) => m.ProductTourDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/product-tour/ProductTourThumbnail").then(
      (m) => m.ProductTourThumbnail,
    ),
  sources: [
    {
      fileName: "ProductTour.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/product-tour/ProductTour.tsx?raw"),
    },
    {
      fileName: "ProductTourDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/product-tour/ProductTourDemo.tsx?raw"),
    },
  ],
};
