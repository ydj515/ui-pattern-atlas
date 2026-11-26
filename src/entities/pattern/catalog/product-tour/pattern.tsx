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
  whenToUse: [
    "처음 쓰는 업무 도구의 핵심 흐름",
    "기능 서너 개가 함께 쓰일 때",
    "사용자가 직접 시작하는 둘러보기",
  ],
  whenNotToUse: [
    "버튼 하나만 알리면 될 때(코치마크 사용)",
    "다섯 단계가 넘는 긴 설명",
    "처음 들어오자마자 강제로 시작할 때",
  ],
  alternatives: [
    { name: "코치마크", slug: "coach-mark", reason: "버튼 하나만 짚을 때" },
    { name: "설정 체크리스트", slug: "setup-checklist", reason: "직접 해 보며 익히게 할 때" },
  ],
  accessibility: [
    "각 단계는 role=dialog이고 제목으로 이름을 붙입니다.",
    "단계가 바뀌면 다음 버튼으로 포커스가 옮겨 갑니다.",
    "Esc나 건너뛰기로 바로 끝낼 수 있습니다.",
    "1 / 3처럼 진행 단계를 글자로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "role=dialog", "Focus management", "Stepper"],
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
