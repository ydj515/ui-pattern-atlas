import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const unreadIndicatorPattern: Pattern = {
  slug: "unread-indicator",

  name: "Unread Indicator",
  nameKo: "안 읽음 표시",
  aliases: ["새 글 표시", "읽지 않음 점", "unread dot", "new item marker"],
  category: "indicator",
  summary: "새로 온 항목 표시",
  description:
    "목록에서 아직 열어 보지 않은 항목 앞에 파란 점을 붙이고 제목을 굵게 하는 패턴입니다. 열면 점과 굵기가 사라집니다.",
  tags: [...BASE_TAGS, "Visually hidden text", "List"],
  loadGuide: () => import("@/entities/pattern/catalog/unread-indicator/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/unread-indicator/UnreadIndicatorDemo").then(
      (m) => m.UnreadIndicatorDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/unread-indicator/UnreadIndicatorThumbnail").then(
      (m) => m.UnreadIndicatorThumbnail,
    ),
  sources: [
    {
      fileName: "UnreadIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/unread-indicator/UnreadIndicator.tsx?raw"),
    },
    {
      fileName: "UnreadIndicatorDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/unread-indicator/UnreadIndicatorDemo.tsx?raw"),
    },
  ],
};
