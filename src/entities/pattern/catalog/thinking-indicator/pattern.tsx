import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const thinkingIndicatorPattern: Pattern = {
  slug: "thinking-indicator",

  name: "Thinking Indicator",
  nameKo: "생각 중 표시",
  aliases: ["답변 준비 중", "타이핑 표시", "typing indicator", "loading dots"],
  category: "ai",
  summary: "답을 만드는 중 표시",
  description:
    "답이 나오기 전 말풍선 자리에 점 세 개가 오르내리며 생각하는 중이라고 알리는 표시입니다. 3초가 넘으면 지난 시간을 함께 보여 멈춘 것처럼 보이지 않게 합니다.",
  tags: [...BASE_TAGS, "role=status", "Loading", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/thinking-indicator/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorDemo").then(
      (m) => m.ThinkingIndicatorDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorThumbnail").then(
      (m) => m.ThinkingIndicatorThumbnail,
    ),
  sources: [
    {
      fileName: "ThinkingIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/thinking-indicator/ThinkingIndicator.tsx?raw"),
    },
    {
      fileName: "ThinkingIndicatorDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorDemo.tsx?raw"),
    },
  ],
};
