import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const maskRevealPattern: Pattern = {
  slug: "mask-reveal",

  name: "Mask Reveal",
  nameKo: "마스크 리빌",
  aliases: ["가림 효과", "라인 리빌", "text mask", "clip reveal"],
  category: "text-motion",
  summary: "가림 아래에서 글자가 올라옴",
  description:
    "각 줄이 보이지 않는 가장자리 아래에 숨어 있다가 위로 미끄러져 드러나는 표현입니다. 줄마다 overflow-hidden 상자 안에서 한 줄 높이만큼 아래에서 시작합니다.",
  tags: [...BASE_TAGS, "@starting-style", "overflow-hidden", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/mask-reveal/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/mask-reveal/MaskRevealDemo").then((m) => m.MaskRevealDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/mask-reveal/MaskRevealThumbnail").then(
      (m) => m.MaskRevealThumbnail,
    ),
  sources: [
    {
      fileName: "MaskReveal.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mask-reveal/MaskReveal.tsx?raw"),
    },
    {
      fileName: "MaskRevealDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mask-reveal/MaskRevealDemo.tsx?raw"),
    },
  ],
};
