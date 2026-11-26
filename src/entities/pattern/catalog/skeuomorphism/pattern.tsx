import { type Pattern } from "@/entities/pattern/model/pattern";

export const skeuomorphismPattern: Pattern = {
  slug: "skeuomorphism",

  kind: "concept",
  name: "Skeuomorphism",
  nameKo: "스큐어모피즘",
  aliases: ["실물 흉내", "사실적 디자인", "skeuomorphic"],
  category: "design-style",
  summary: "실제 물건을 흉내 낸 질감",
  description:
    "가죽, 금속, 레코드판처럼 실제 물건의 재질과 빛을 그대로 흉내 내는 스타일입니다. 볼록한 광택 버튼과 눌리면 안으로 들어가는 그림자로 물건을 다루는 느낌을 줍니다.",
  tags: ["디자인 스타일", "질감"],
  loadGuide: () => import("@/entities/pattern/catalog/skeuomorphism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/skeuomorphism/SkeuomorphismDemo").then(
      (m) => m.SkeuomorphismDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/skeuomorphism/SkeuomorphismThumbnail").then(
      (m) => m.SkeuomorphismThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/skeuomorphism/SkeuomorphismDemo.tsx?raw"),
};
