import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const quickDateChipsPattern: Pattern = {
  slug: "quick-date-chips",

  name: "Quick Date Chips",
  nameKo: "빠른 날짜 선택 칩",
  aliases: ["오늘 내일 칩", "날짜 바로가기", "date shortcuts", "relative dates"],
  category: "special-input",
  summary: "오늘, 내일, 이번 주말처럼 자주 쓰는 날짜를 바로 선택",
  description:
    "자주 고르는 날짜를 오늘, 내일, 이번 주말 같은 칩으로 보여 줘 한 번에 고르게 하는 패턴입니다. 다른 날짜가 필요하면 바로 아래에서 직접 고릅니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Mobile"],
  loadGuide: () => import("@/entities/pattern/catalog/quick-date-chips/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/quick-date-chips/QuickDateChipsDemo").then(
      (m) => m.QuickDateChipsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/quick-date-chips/QuickDateChipsThumbnail").then(
      (m) => m.QuickDateChipsThumbnail,
    ),
  sources: [
    {
      fileName: "QuickDateChips.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/quick-date-chips/QuickDateChips.tsx?raw"),
    },
    {
      fileName: "QuickDateChipsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/quick-date-chips/QuickDateChipsDemo.tsx?raw"),
    },
  ],
};
