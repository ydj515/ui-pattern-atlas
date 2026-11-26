import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const storiesPattern: Pattern = {
  slug: "stories",

  name: "Stories",
  nameKo: "스토리",
  aliases: ["인스타 스토리", "풀스크린 콘텐츠", "story viewer", "tap through"],
  category: "card-gallery",
  summary: "눌러 넘기는 전체 화면 콘텐츠",
  description:
    "짧은 콘텐츠를 화면 가득 하나씩 보여 주고, 시간이 지나거나 옆을 누르면 넘어가는 패턴입니다. 위쪽 막대로 몇 개 중 어디를 보는지 알려 줍니다.",
  tags: [...BASE_TAGS, "Mobile", "WCAG 2.2.2"],
  loadGuide: () => import("@/entities/pattern/catalog/stories/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stories/StoriesDemo").then((m) => m.StoriesDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stories/StoriesThumbnail").then((m) => m.StoriesThumbnail),
  sources: [
    {
      fileName: "Stories.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stories/Stories.tsx?raw"),
    },
    {
      fileName: "StoriesDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/stories/StoriesDemo.tsx?raw"),
    },
  ],
};
