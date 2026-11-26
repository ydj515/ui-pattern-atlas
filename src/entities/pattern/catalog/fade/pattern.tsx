import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fadePattern: Pattern = {
  slug: "fade",

  name: "Fade",
  nameKo: "페이드",
  aliases: ["페이드 인", "페이드 아웃", "fade in", "fade out", "opacity transition"],
  category: "motion",
  summary: "투명도로 나타나고 사라지기",
  description:
    "투명도만 바꿔 요소가 부드럽게 나타나고 사라지는 가장 차분한 전환입니다. 나타날 때는 CSS @starting-style을 쓰고, 사라질 때는 전환이 끝난 뒤에 화면에서 뺍니다.",
  tags: [...BASE_TAGS, "@starting-style", "CSS transition", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/fade/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/fade/FadeDemo").then((m) => m.FadeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fade/FadeThumbnail").then((m) => m.FadeThumbnail),
  sources: [
    {
      fileName: "Fade.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/fade/Fade.tsx?raw"),
    },
    {
      fileName: "FadeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/fade/FadeDemo.tsx?raw"),
    },
  ],
};
