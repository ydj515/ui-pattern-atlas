import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const expandCollapseMotionPattern: Pattern = {
  slug: "expand-collapse-motion",

  name: "Expand/Collapse Motion",
  nameKo: "펼침 동작",
  aliases: ["카드 펼치기", "높이 애니메이션", "expand animation", "grid-template-rows"],
  category: "motion",
  summary: "카드가 제자리에서 커지며 내용을 펼침",
  description:
    "접힌 카드를 누르면 그 자리에서 아래로 커지며 세부 내용을 보여 주는 패턴입니다. 높이를 재지 않고 grid-template-rows를 0fr에서 1fr로 바꿔 실제 내용 높이만큼 자연스럽게 펼칩니다.",
  tags: [...BASE_TAGS, "grid-template-rows", "inert", "aria-expanded"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/expand-collapse-motion/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/expand-collapse-motion/ExpandCardDemo").then(
      (m) => m.ExpandCardDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/expand-collapse-motion/ExpandCardThumbnail").then(
      (m) => m.ExpandCardThumbnail,
    ),
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
