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
  whenToUse: [
    "배송일, 마감일처럼 대부분 가까운 날짜를 고를 때",
    "달력을 여는 것이 번거로운 모바일 화면",
    "사람들이 날짜를 말로 떠올릴 때(이번 주말)",
  ],
  whenNotToUse: [
    "날짜가 고르게 흩어져 있을 때(날짜 선택 사용)",
    "먼 날짜(날짜 직접 입력 사용)",
    "칩이 가리키는 날짜가 헷갈릴 때(실제 날짜를 함께 보여 주기)",
  ],
  alternatives: [
    { name: "날짜 선택", slug: "date-picker", reason: "달력에서 아무 날이나 고를 때" },
  ],
  accessibility: [
    "칩은 aria-pressed 버튼이라 고른 칩이 읽힙니다.",
    '고른 결과를 "11월 28일 (토)에 받아요"처럼 실제 날짜로 다시 보여 줘 "이번 주말"의 뜻을 확인할 수 있습니다.',
    "다른 날짜는 기본 date 입력으로 고릅니다.",
    '칩들을 role="group"과 이름으로 묶습니다.',
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Mobile"],
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
