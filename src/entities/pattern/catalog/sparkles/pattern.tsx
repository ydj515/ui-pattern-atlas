import { type Pattern } from "@/entities/pattern/model/pattern";

export const sparklesPattern: Pattern = {
  slug: "sparkles",

  kind: "concept",
  name: "Sparkles ✦",
  nameKo: "반짝이",
  aliases: ["AI 아이콘", "별 반짝임", "sparkle icon", "magic icon"],
  category: "icon-names",
  summary: "AI 기능 표시",
  description:
    "크고 작은 네 갈래 별이 반짝이는 아이콘으로, 요즘은 AI가 대신 해 주는 기능을 표시하는 데 널리 씁니다. 글을 다듬거나 요약하는 버튼 앞에 붙여 결과가 자동으로 만들어진다는 것을 알립니다.",
  tags: ["아이콘 이름", "AI"],
  loadGuide: () => import("@/entities/pattern/catalog/sparkles/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sparkles/SparklesDemo").then((m) => m.SparklesDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sparkles/SparklesThumbnail").then(
      (m) => m.SparklesThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/sparkles/SparklesDemo.tsx?raw"),
};
