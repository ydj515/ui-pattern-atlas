import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const progressRingPattern: Pattern = {
  slug: "progress-ring",

  name: "Progress Ring",
  nameKo: "원형 진행률",
  aliases: ["원형 프로그레스", "도넛 진행률", "circular progress", "progress circle"],
  category: "loading",
  summary: "공간이 좁을 때의 진행률",
  description:
    "진행률을 원의 둘레로 보여 주는 패턴입니다. 막대를 놓기 어려운 카드 모서리나 썸네일 위에서도 얼마나 끝났는지 한눈에 보여 줍니다.",
  tags: [...BASE_TAGS, "progressbar", "SVG"],
  loadGuide: () => import("@/entities/pattern/catalog/progress-ring/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-ring/ProgressRingDemo").then(
      (m) => m.ProgressRingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/progress-ring/ProgressRingThumbnail").then(
      (m) => m.ProgressRingThumbnail,
    ),
  sources: [
    {
      fileName: "ProgressRing.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/progress-ring/ProgressRing.tsx?raw"),
    },
    {
      fileName: "ProgressRingDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/progress-ring/ProgressRingDemo.tsx?raw"),
    },
  ],
};
