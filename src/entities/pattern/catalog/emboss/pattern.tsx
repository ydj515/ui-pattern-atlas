import { type Pattern } from "@/entities/pattern/model/pattern";

export const embossPattern: Pattern = {
  slug: "emboss",

  kind: "concept",
  name: "Emboss",
  nameKo: "엠보싱",
  aliases: ["양각 글자", "엠보스", "emboss", "embossed text"],
  category: "typography-style",
  summary: "빛과 그림자로 표면에 글자가 솟아오른 느낌",
  description:
    "배경과 같은 색의 글자에 한쪽은 밝은 빛, 반대쪽은 어두운 그림자를 주어 표면에서 솟아오른 것처럼 보이게 하는 스타일입니다.",
  tags: ["글자 스타일", "Emboss"],
  loadGuide: () => import("@/entities/pattern/catalog/emboss/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/emboss/EmbossDemo").then((m) => m.EmbossDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/emboss/EmbossThumbnail").then((m) => m.EmbossThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/emboss/EmbossDemo.tsx?raw"),
};
