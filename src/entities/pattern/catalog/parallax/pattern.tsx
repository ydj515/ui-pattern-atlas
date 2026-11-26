import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const parallaxPattern: Pattern = {
  slug: "parallax",

  name: "Parallax",
  nameKo: "패럴랙스",
  aliases: ["시차 스크롤", "패럴렉스", "parallax scrolling", "depth scroll"],
  category: "motion",
  summary: "배경이 다른 속도로 움직이기",
  description:
    "스크롤할 때 앞의 글보다 뒤의 그림이 느리게 움직여 깊이감을 주는 패턴입니다. 스크롤 위치를 상태로 다시 그리지 않고 스타일에 바로 써서 부드럽게 움직이고, 동작 줄이기에서는 함께 스크롤됩니다.",
  tags: [...BASE_TAGS, "Scroll events", "will-change", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/parallax/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/parallax/ParallaxDemo").then((m) => m.ParallaxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/parallax/ParallaxThumbnail").then(
      (m) => m.ParallaxThumbnail,
    ),
  sources: [
    {
      fileName: "Parallax.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/parallax/Parallax.tsx?raw"),
    },
    {
      fileName: "ParallaxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/parallax/ParallaxDemo.tsx?raw"),
    },
  ],
};
