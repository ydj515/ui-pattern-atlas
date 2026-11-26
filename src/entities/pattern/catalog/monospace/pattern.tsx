import { type Pattern } from "@/entities/pattern/model/pattern";

export const monospacePattern: Pattern = {
  slug: "monospace",

  kind: "concept",
  name: "Monospace",
  nameKo: "모노스페이스",
  aliases: ["고정폭 글꼴", "모노 타이포", "monospace type", "fixed-width"],
  category: "typography-style",
  summary: "글자의 폭을 일정하게 배치",
  description:
    "모든 글자를 같은 폭의 칸에 맞춰 놓는 스타일입니다. 코드, 타자기, 표 같은 느낌을 주며, 이 예시는 칸을 선으로 드러내 고정폭을 보여 줍니다.",
  tags: ["글자 스타일", "Monospace"],
  loadGuide: () => import("@/entities/pattern/catalog/monospace/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/monospace/MonospaceTypeDemo").then(
      (m) => m.MonospaceTypeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/monospace/MonospaceTypeThumbnail").then(
      (m) => m.MonospaceTypeThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/monospace/MonospaceTypeDemo.tsx?raw"),
};
