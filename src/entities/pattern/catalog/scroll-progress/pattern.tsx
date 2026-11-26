import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scrollProgressPattern: Pattern = {
  slug: "scroll-progress",

  name: "Scroll Progress",
  nameKo: "스크롤 진행 바",
  aliases: ["읽기 진행 표시", "읽은 위치 막대", "reading progress", "scroll indicator"],
  category: "indicator",
  summary: "문서에서 읽은 위치를 위쪽 막대로 표시",
  description:
    "긴 글을 읽는 동안 맨 위의 가는 막대가 읽은 만큼 차오르는 패턴입니다. 남은 분량을 한눈에 알려 줍니다.",
  tags: [...BASE_TAGS, "Scroll", "Decorative"],
  loadGuide: () => import("@/entities/pattern/catalog/scroll-progress/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-progress/ScrollProgressDemo").then(
      (m) => m.ScrollProgressDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scroll-progress/ScrollProgressThumbnail").then(
      (m) => m.ScrollProgressThumbnail,
    ),
  sources: [
    {
      fileName: "ScrollProgress.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scroll-progress/ScrollProgress.tsx?raw"),
    },
    {
      fileName: "ScrollProgressDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scroll-progress/ScrollProgressDemo.tsx?raw"),
    },
  ],
};
