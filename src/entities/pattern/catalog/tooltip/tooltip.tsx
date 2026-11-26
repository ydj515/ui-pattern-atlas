import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tooltipPattern: Pattern = {
  slug: "tooltip",

  name: "Tooltip",
  nameKo: "툴팁",
  aliases: ["말풍선", "도움말", "hint", "info icon"],
  category: "overlay",
  summary: "마우스를 올리거나 포커스하면 나타나는 짧은 설명",
  description:
    "아이콘이나 용어에 마우스를 올리거나 키보드로 포커스했을 때 짧은 보충 설명을 보여주는 패턴입니다. 툴팁 안의 내용은 클릭할 수 없는 텍스트여야 합니다.",
  tags: [...BASE_TAGS, "WCAG 1.4.13"],
  loadGuide: () => import("@/entities/pattern/catalog/tooltip/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/tooltip/TooltipDemo").then((m) => m.TooltipDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tooltip/TooltipThumbnail").then((m) => m.TooltipThumbnail),
  sources: [
    {
      fileName: "Tooltip.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tooltip/Tooltip.tsx?raw"),
    },
    {
      fileName: "TooltipDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tooltip/TooltipDemo.tsx?raw"),
    },
  ],
};
