import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const vennDiagramPattern: Pattern = {
  slug: "venn-diagram",

  name: "Venn Diagram",
  nameKo: "벤 다이어그램",
  aliases: ["겹친 원", "집합 다이어그램", "교집합 차트", "venn diagram", "set overlap"],
  category: "data-viz",
  summary: "두세 집합이 겹치는 부분과 각 영역의 수",
  description:
    "두세 개의 원을 겹쳐 그리고, 겹침에 따라 나뉜 영역마다 해당하는 수를 적습니다. 원 크기는 같게 두고 숫자가 크기를 말하게 하며, 범례에서 집합을 고르면 그 원을 강조하고 전체 수를 읽어 줍니다.",
  tags: [...BASE_TAGS, "SVG", "aria-pressed", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/venn-diagram/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/venn-diagram/VennDiagramDemo").then(
      (m) => m.VennDiagramDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/venn-diagram/VennDiagramThumbnail").then(
      (m) => m.VennDiagramThumbnail,
    ),
  sources: [
    {
      fileName: "VennDiagram.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/venn-diagram/VennDiagram.tsx?raw"),
    },
    {
      fileName: "VennDiagramDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/venn-diagram/VennDiagramDemo.tsx?raw"),
    },
  ],
};
