import { type Pattern } from "@/entities/pattern/model/pattern";

export const neoBrutalistTypographyPattern: Pattern = {
  slug: "neo-brutalist-typography",

  kind: "concept",
  name: "Neo-brutalist Typography",
  nameKo: "네오 브루털리즘 타이포그래피",
  aliases: ["네오브루탈 타이포", "라벨 타이포", "neo-brutalist type"],
  category: "typography-style",
  summary: "두꺼운 테두리와 강한 대비를 제목과 라벨에 적용",
  description:
    "글자를 두꺼운 검은 테두리 상자에 넣고 흐림 없는 그림자를 더해 스티커 라벨처럼 보이게 하는 스타일입니다. 상자를 조금씩 기울여 손으로 붙인 느낌을 줍니다.",
  tags: ["글자 스타일", "Neo-brutalist Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/neo-brutalist-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/neo-brutalist-typography/NeoBrutalistTypographyDemo").then(
      (m) => m.NeoBrutalistTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/neo-brutalist-typography/NeoBrutalistTypographyThumbnail").then(
      (m) => m.NeoBrutalistTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/neo-brutalist-typography/NeoBrutalistTypographyDemo.tsx?raw"),
};
