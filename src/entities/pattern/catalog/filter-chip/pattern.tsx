import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const filterChipPattern: Pattern = {
  slug: "filter-chip",

  name: "Filter Chip",
  nameKo: "필터 칩",
  aliases: ["토글 칩", "필터 버튼", "chips", "toggle chips"],
  category: "selection",
  summary: "눌러서 켜고 끄는 필터",
  description:
    "목록 위에 짧은 조건을 칩으로 늘어놓고 눌러서 켜고 끄는 패턴입니다. 켠 조건이 바로 결과에 반영되어 하나씩 더하거나 빼 보며 원하는 결과를 찾을 수 있습니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Filters"],
  loadGuide: () => import("@/entities/pattern/catalog/filter-chip/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/filter-chip/FilterChipDemo").then((m) => m.FilterChipDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/filter-chip/FilterChipThumbnail").then(
      (m) => m.FilterChipThumbnail,
    ),
  sources: [
    {
      fileName: "FilterChips.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/filter-chip/FilterChips.tsx?raw"),
    },
    {
      fileName: "FilterChipDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/filter-chip/FilterChipDemo.tsx?raw"),
    },
  ],
};
