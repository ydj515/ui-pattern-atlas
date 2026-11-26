import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bentoGridPattern: Pattern = {
  slug: "bento-grid",

  name: "Bento Grid",
  nameKo: "벤토 그리드",
  aliases: ["벤토 레이아웃", "타일 그리드", "bento layout", "feature tiles"],
  category: "layout",
  summary: "크기가 다른 칸을 맞춰 채우기",
  description:
    "크기가 다른 타일을 도시락처럼 빈틈없이 채워 기능이나 특징을 소개하는 패턴입니다. 가장 큰 칸이 핵심을, 작은 칸이 보조 내용을 맡습니다.",
  tags: [...BASE_TAGS, "CSS grid", "Marketing"],
  loadGuide: () => import("@/entities/pattern/catalog/bento-grid/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bento-grid/BentoGridDemo").then((m) => m.BentoGridDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bento-grid/BentoGridThumbnail").then(
      (m) => m.BentoGridThumbnail,
    ),
  sources: [
    {
      fileName: "BentoGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bento-grid/BentoGrid.tsx?raw"),
    },
    {
      fileName: "BentoGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bento-grid/BentoGridDemo.tsx?raw"),
    },
  ],
};
