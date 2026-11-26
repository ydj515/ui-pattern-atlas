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
  whenToUse: [
    "운동, 공부, 물 마시기처럼 매일 하는 습관",
    "하루 한 번 할 일이 분명할 때",
    "끊기지 않게 돕고 싶을 때",
  ],
  whenNotToUse: [
    "매일 할 필요가 없는 일",
    "끊기면 벌을 주는 압박으로 쓸 때",
    "하루 빠졌다고 모든 기록을 지우는 설계",
  ],
  alternatives: [
    { name: "업적 배지", slug: "achievement-badge", reason: "누적 목표를 기록할 때" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "정해진 목표까지의 진행" },
  ],
  accessibility: [
    "요일마다 기록함, 기록 없음을 글자로 붙여 색에만 기대지 않습니다.",
    "연속 일수는 aria-live로 바뀌면 읽힙니다.",
    "숫자가 튀는 효과는 동작 줄이기에서 생략합니다.",
    "오늘 기록 버튼은 기록 뒤 비활성과 글자로 상태를 알립니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Habit", "Reduced motion"],
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
