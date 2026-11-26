import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const statusDotPattern: Pattern = {
  slug: "status-dot",

  name: "Status Dot",
  nameKo: "상태 점",
  aliases: ["상태 표시", "신호등 점", "status indicator", "health dot"],
  category: "indicator",
  summary: "성공, 경고, 오류를 색 점으로",
  description:
    "초록, 노랑, 빨강 점과 짧은 낱말로 서비스나 작업의 상태를 보여 주는 패턴입니다. 색만으로 알리지 않고 낱말을 늘 함께 씁니다.",
  tags: [...BASE_TAGS, "Color independence", "Dashboard"],
  loadGuide: () => import("@/entities/pattern/catalog/status-dot/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/status-dot/StatusDotDemo").then((m) => m.StatusDotDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/status-dot/StatusDotThumbnail").then(
      (m) => m.StatusDotThumbnail,
    ),
  sources: [
    {
      fileName: "StatusDot.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/status-dot/StatusDot.tsx?raw"),
    },
    {
      fileName: "StatusDotDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/status-dot/StatusDotDemo.tsx?raw"),
    },
  ],
};
