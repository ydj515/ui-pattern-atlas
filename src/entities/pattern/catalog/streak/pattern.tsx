import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const streakPattern: Pattern = {
  slug: "streak",

  name: "Streak",
  nameKo: "연속 기록",
  aliases: ["스트릭", "연속 일수", "daily streak", "habit tracker"],
  category: "completion",
  summary: "며칠째 이어 가는 기록",
  description:
    "며칠째 이어 가고 있는지 숫자로 보여 주고, 이번 주의 기록한 날을 표시하는 패턴입니다. 오늘 기록하면 숫자가 한 번 살짝 튀어 늘어난 것을 알립니다.",
  tags: [...BASE_TAGS, "aria-live", "Habit", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/streak/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/streak/StreakDemo").then((m) => m.StreakDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/streak/StreakThumbnail").then((m) => m.StreakThumbnail),
  sources: [
    {
      fileName: "Streak.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/streak/Streak.tsx?raw"),
    },
    {
      fileName: "StreakDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/streak/StreakDemo.tsx?raw"),
    },
  ],
};
