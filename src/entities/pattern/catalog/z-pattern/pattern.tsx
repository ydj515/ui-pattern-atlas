import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const zPatternPattern: Pattern = {
  slug: "z-pattern",

  name: "Z-pattern",
  nameKo: "Z 패턴",
  aliases: ["Z 레이아웃", "시선 흐름", "z layout", "scanning pattern"],
  category: "layout",
  summary: "단순한 화면에서 시선이 좌우로 이어지도록 정보 배치",
  description:
    "정보가 적은 화면에서 시선이 왼쪽 위 → 오른쪽 위 → 왼쪽 아래 → 오른쪽 아래로 흐르는 Z 모양을 따라 요소를 놓는 패턴입니다. 마지막 지점에 주요 행동을 둡니다.",
  tags: [...BASE_TAGS, "Visual hierarchy", "CSS grid"],
  loadGuide: () => import("@/entities/pattern/catalog/z-pattern/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/z-pattern/ZPatternDemo").then((m) => m.ZPatternDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/z-pattern/ZPatternThumbnail").then(
      (m) => m.ZPatternThumbnail,
    ),
  sources: [
    {
      fileName: "ZPattern.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/z-pattern/ZPattern.tsx?raw"),
    },
    {
      fileName: "ZPatternDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/z-pattern/ZPatternDemo.tsx?raw"),
    },
  ],
};
