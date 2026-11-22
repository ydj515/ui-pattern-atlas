import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { FilterChipThumbnail } from "@/entities/pattern/catalog/filter-chip/FilterChipThumbnail";

export const filterChipPattern: Pattern = {
  slug: "filter-chip",
  name: "Filter Chip",
  nameKo: "필터 칩",
  aliases: ["토글 칩", "필터 버튼", "chips", "toggle chips"],
  category: "selection",
  summary: "눌러서 켜고 끄는 필터",
  description:
    "목록 위에 짧은 조건을 칩으로 늘어놓고 눌러서 켜고 끄는 패턴입니다. 켠 조건이 바로 결과에 반영되어 하나씩 더하거나 빼 보며 원하는 결과를 찾을 수 있습니다.",
  whenToUse: [
    "와이파이, 주차처럼 짧은 조건 여러 개를 겹쳐 걸 때",
    "결과가 바로 바뀌는 목록 위",
    "자주 쓰는 조건 몇 개만 빠르게 보여 줄 때",
  ],
  whenNotToUse: [
    "조건이 많거나 범위를 정해야 할 때(필터 패널 사용)",
    "하나만 골라야 할 때(세그먼트 컨트롤 사용)",
    "폼 입력값(체크박스 사용)",
  ],
  alternatives: [
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "하나만 고르는 보기 전환" },
    { name: "체크박스", slug: "checkbox", reason: "폼 안에서 여러 개 고르기" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "조건이 겹쳐 결과가 없을 때" },
  ],
  accessibility: [
    "칩은 aria-pressed를 가진 토글 버튼이라 켜짐 상태가 읽힙니다.",
    "켜진 칩은 색과 함께 체크 표시로도 구분됩니다.",
    '칩들을 role="group"과 이름으로 묶어 무엇을 거르는지 알립니다.',
    "결과 개수는 aria-live로 알려 줍니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Filters"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/filter-chip/FilterChipDemo").then((m) => m.FilterChipDemo),
  Thumbnail: FilterChipThumbnail,
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
