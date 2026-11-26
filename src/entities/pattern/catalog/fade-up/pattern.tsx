import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fadeUpPattern: Pattern = {
  slug: "fade-up",

  name: "Fade Up",
  nameKo: "페이드 업",
  aliases: ["위로 페이드", "올라오며 나타나기", "fade in up", "slide up fade"],
  category: "text-motion",
  summary: "글자가 위로 움직이며 선명해짐",
  description:
    "글자가 아래에서 10px 남짓 올라오며 투명에서 선명해지는 가장 무난한 등장 효과입니다. 제목, 본문, 버튼을 조금씩 늦게 보여 읽는 순서를 안내합니다.",
  tags: [...BASE_TAGS, "@starting-style", "CSS variables", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/fade-up/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/fade-up/FadeUpDemo").then((m) => m.FadeUpDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fade-up/FadeUpThumbnail").then((m) => m.FadeUpThumbnail),
  sources: [
    {
      fileName: "FadeUp.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/fade-up/FadeUp.tsx?raw"),
    },
    {
      fileName: "FadeUpDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/fade-up/FadeUpDemo.tsx?raw"),
    },
  ],
};
