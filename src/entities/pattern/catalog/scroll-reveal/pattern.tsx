import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scrollRevealPattern: Pattern = {
  slug: "scroll-reveal",

  name: "Scroll Reveal",
  nameKo: "스크롤 등장",
  aliases: ["스크롤 애니메이션", "페이드 업", "reveal on scroll", "scroll animation"],
  category: "motion",
  summary: "스크롤해 보일 때 나타나기",
  description:
    "내용이 화면에 들어오는 순간 아래에서 살짝 올라오거나 커지며 나타나는 패턴입니다. IntersectionObserver로 처음 보일 때 한 번만 재생하고, 관찰을 지원하지 않으면 처음부터 보여 줍니다.",
  tags: [...BASE_TAGS, "IntersectionObserver", "CSS transition", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/scroll-reveal/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-reveal/RevealDemo").then((m) => m.RevealDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scroll-reveal/RevealThumbnail").then(
      (m) => m.RevealThumbnail,
    ),
  sources: [
    {
      fileName: "Reveal.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scroll-reveal/Reveal.tsx?raw"),
    },
    {
      fileName: "RevealDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scroll-reveal/RevealDemo.tsx?raw"),
    },
  ],
};
