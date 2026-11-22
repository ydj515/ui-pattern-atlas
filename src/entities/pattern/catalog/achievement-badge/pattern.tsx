import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AchievementBadgeThumbnail } from "@/entities/pattern/catalog/achievement-badge/AchievementBadgeThumbnail";

export const achievementBadgePattern: Pattern = {
  slug: "achievement-badge",
  name: "Achievement Badge",
  nameKo: "업적 배지",
  aliases: ["배지", "도전 과제", "badge collection", "achievements"],
  category: "completion",
  summary: "달성 전 잠금, 획득 순간, 배지 진열",
  description:
    "아직 잠긴 배지는 남은 진행(4/5)을 둥근 막대로 보여 주고, 달성하면 색이 채워지며 획득 날짜가 표시되는 배지입니다. 잠긴 목표를 숨기지 않아 무엇을 하면 되는지 알 수 있습니다.",
  whenToUse: [
    "후기, 주문처럼 쌓이는 활동에 목표를 줄 때",
    "내 정보 화면의 배지 진열",
    "달성 조건을 숫자로 말할 수 있을 때",
  ],
  whenNotToUse: [
    "의미 없는 행동을 부추길 때",
    "조건을 숨긴 깜짝 배지만 있을 때",
    "배지가 너무 많아 진열이 복잡할 때",
  ],
  alternatives: [
    { name: "연속 기록", slug: "streak", reason: "매일 이어 가는 습관" },
    { name: "축하 효과", slug: "confetti", reason: "획득 순간을 크게 축하할 때" },
  ],
  accessibility: [
    "진행은 4/5처럼 글자로 보여 주고 잠김을 화면 읽기에 알립니다.",
    "아이콘과 둥근 막대는 장식이라 aria-hidden입니다.",
    "획득 소식은 role=status 문구로 알립니다.",
    "각 배지는 figure와 figcaption으로 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "figure", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/achievement-badge/AchievementBadgeDemo").then(
      (m) => m.AchievementBadgeDemo,
    ),
  Thumbnail: AchievementBadgeThumbnail,
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
