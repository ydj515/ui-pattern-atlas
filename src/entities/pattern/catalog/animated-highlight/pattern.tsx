import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const animatedHighlightPattern: Pattern = {
  slug: "animated-highlight",

  name: "Animated Highlight",
  nameKo: "강조 애니메이션",
  aliases: ["형광펜 효과", "밑줄 강조", "marker highlight", "text highlight"],
  category: "text-motion",
  summary: "핵심 구절에 형광펜이 칠해짐",
  description:
    "문장 속 핵심 구절 뒤로 형광펜이 왼쪽부터 칠해지는 표현입니다. 화면에 처음 보일 때 한 번만 칠하고, 진짜 mark 요소라 움직임이 없어도 강조가 남습니다.",
  tags: [...BASE_TAGS, "IntersectionObserver", "mark", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/animated-highlight/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/animated-highlight/AnimatedHighlightDemo").then(
      (m) => m.AnimatedHighlightDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/animated-highlight/AnimatedHighlightThumbnail").then(
      (m) => m.AnimatedHighlightThumbnail,
    ),
  sources: [
    {
      fileName: "AnimatedHighlight.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/animated-highlight/AnimatedHighlight.tsx?raw"),
    },
    {
      fileName: "AnimatedHighlightDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/animated-highlight/AnimatedHighlightDemo.tsx?raw"),
    },
  ],
};
