import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ExpandCardThumbnail } from "@/entities/pattern/catalog/expand-collapse-motion/ExpandCardThumbnail";

export const expandCollapseMotionPattern: Pattern = {
  slug: "expand-collapse-motion",
  name: "Expand/Collapse Motion",
  nameKo: "펼침 동작",
  aliases: ["카드 펼치기", "높이 애니메이션", "expand animation", "grid-template-rows"],
  category: "motion",
  summary: "카드가 제자리에서 커지며 내용을 펼침",
  description:
    "접힌 카드를 누르면 그 자리에서 아래로 커지며 세부 내용을 보여 주는 패턴입니다. 높이를 재지 않고 grid-template-rows를 0fr에서 1fr로 바꿔 실제 내용 높이만큼 자연스럽게 펼칩니다.",
  whenToUse: [
    "주문, 알림처럼 요약 아래 세부 정보가 있는 카드",
    "목록 안에서 화면 이동 없이 더 보여 줄 때",
    "펼친 내용의 높이가 항목마다 다를 때",
  ],
  whenNotToUse: [
    "세부 내용이 길어 화면을 다 덮을 때(상세 화면으로 이동)",
    "여러 개를 동시에 비교해야 할 때(표 사용)",
    "펼치는 동안 주변 레이아웃이 크게 흔들릴 때",
  ],
  alternatives: [
    { name: "아코디언", slug: "accordion", reason: "여러 섹션을 접고 펼칠 때" },
    { name: "페이지 전환", slug: "page-transition", reason: "내용이 길어 새 화면이 필요할 때" },
  ],
  accessibility: [
    "버튼에 aria-expanded와 aria-controls를 둬 펼침 상태를 알립니다.",
    "접힌 내용은 inert라 Tab과 화면 읽기에서 빠집니다.",
    "펼침 표시 화살표는 장식이라 aria-hidden입니다.",
    "동작 줄이기에서는 높이 변화를 즉시 적용합니다.",
  ],
  tags: [...BASE_TAGS, "grid-template-rows", "inert", "aria-expanded"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/expand-collapse-motion/ExpandCardDemo").then(
      (m) => m.ExpandCardDemo,
    ),
  Thumbnail: ExpandCardThumbnail,
  sources: [
    {
      fileName: "ExpandCard.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/expand-collapse-motion/ExpandCard.tsx?raw"),
    },
    {
      fileName: "ExpandCardDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/expand-collapse-motion/ExpandCardDemo.tsx?raw"),
    },
  ],
};
