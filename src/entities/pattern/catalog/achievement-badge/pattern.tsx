import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const achievementBadgePattern: Pattern = {
  slug: "achievement-badge",

  name: "Achievement Badge",
  nameKo: "업적 배지",
  aliases: ["배지", "도전 과제", "badge collection", "achievements"],
  category: "completion",
  summary: "달성 전 잠금, 획득 순간, 배지 진열",
  description:
    "아직 잠긴 배지는 남은 진행(4/5)을 둥근 막대로 보여 주고, 달성하면 색이 채워지며 획득 날짜가 표시되는 배지입니다. 잠긴 목표를 숨기지 않아 무엇을 하면 되는지 알 수 있습니다.",
  tags: [...BASE_TAGS, "SVG", "figure", "role=status"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/achievement-badge/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/achievement-badge/AchievementBadgeDemo").then(
      (m) => m.AchievementBadgeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/achievement-badge/AchievementBadgeThumbnail").then(
      (m) => m.AchievementBadgeThumbnail,
    ),
  sources: [
    {
      fileName: "AchievementBadge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/achievement-badge/AchievementBadge.tsx?raw"),
    },
    {
      fileName: "AchievementBadgeDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/achievement-badge/AchievementBadgeDemo.tsx?raw"),
    },
  ],
};
