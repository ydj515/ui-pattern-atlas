import { type Pattern } from "@/entities/pattern/model/pattern";

export const claymorphismPattern: Pattern = {
  slug: "claymorphism",

  kind: "concept",
  name: "Claymorphism",
  nameKo: "클레이모피즘",
  aliases: ["클레이 디자인", "점토 질감", "clay UI"],
  category: "design-style",
  summary: "점토처럼 둥근 입체",
  description:
    "크게 둥근 모서리와 안쪽 밝은 빛, 바깥쪽 색 그림자로 말랑한 점토 장난감처럼 보이게 하는 스타일입니다. 뉴모피즘과 달리 면에 색을 넣어 경계가 잘 보입니다.",
  tags: ["디자인 스타일", "입체"],
  loadGuide: () => import("@/entities/pattern/catalog/claymorphism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/claymorphism/ClaymorphismDemo").then(
      (m) => m.ClaymorphismDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/claymorphism/ClaymorphismThumbnail").then(
      (m) => m.ClaymorphismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/claymorphism/ClaymorphismDemo.tsx?raw"),
};
