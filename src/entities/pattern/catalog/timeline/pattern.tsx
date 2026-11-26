import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const timelinePattern: Pattern = {
  slug: "timeline",

  name: "Timeline",
  nameKo: "타임라인",
  aliases: ["배송 조회", "진행 기록", "activity log", "history"],
  category: "list-table",
  summary: "시간순 기록",
  description:
    "일어난 일을 시간 순서대로 세로선 위에 늘어놓는 패턴입니다. 지난 일과 지금 상태, 앞으로 남은 단계를 한 줄로 보여 줍니다.",
  tags: [...BASE_TAGS, "Ordered list", "aria-current"],
  loadGuide: () => import("@/entities/pattern/catalog/timeline/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/timeline/TimelineDemo").then((m) => m.TimelineDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/timeline/TimelineThumbnail").then(
      (m) => m.TimelineThumbnail,
    ),
  sources: [
    {
      fileName: "Timeline.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/timeline/Timeline.tsx?raw"),
    },
    {
      fileName: "TimelineDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/timeline/TimelineDemo.tsx?raw"),
    },
  ],
};
