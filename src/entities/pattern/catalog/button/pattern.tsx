import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const buttonPattern: Pattern = {
  slug: "button",

  name: "Button",
  nameKo: "버튼",
  aliases: ["주요 버튼", "보조 버튼", "텍스트 버튼", "primary button", "CTA"],
  category: "button",
  summary: "주요, 보조, 텍스트 버튼의 위계와 상태",
  description:
    "강조 정도가 다른 세 가지 버튼으로 한 화면의 행동에 순서를 매기는 패턴입니다. 가장 중요한 행동 하나만 주요 버튼으로 두고, 마우스를 올렸을 때, 누를 때, 키보드로 왔을 때 모습을 각각 다르게 보여 줍니다.",
  tags: [...BASE_TAGS, "focus-visible", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/button/ButtonDemo").then((m) => m.ButtonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/button/ButtonThumbnail").then((m) => m.ButtonThumbnail),
  sources: [
    {
      fileName: "Button.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/button/Button.tsx?raw"),
    },
    {
      fileName: "ButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/button/ButtonDemo.tsx?raw"),
    },
  ],
};
