import { type Pattern } from "@/entities/pattern/model/pattern";

export const neumorphismPattern: Pattern = {
  slug: "neumorphism",

  kind: "concept",
  name: "Neumorphism",
  nameKo: "뉴모피즘",
  aliases: ["뉴 스큐어모피즘", "소프트 UI", "soft UI"],
  category: "design-style",
  summary: "튀어나오고 들어간 부드러운 면",
  description:
    "배경과 같은 색의 면에 밝은 그림자와 어두운 그림자를 함께 주어, 표면이 부드럽게 튀어나오거나 눌린 것처럼 보이게 하는 스타일입니다. 버튼을 누르면 안쪽 그림자로 바뀌어 들어간 모습이 됩니다.",
  tags: ["디자인 스타일", "그림자"],
  loadGuide: () => import("@/entities/pattern/catalog/neumorphism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/neumorphism/NeumorphismDemo").then((m) => m.NeumorphismDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/neumorphism/NeumorphismThumbnail").then(
      (m) => m.NeumorphismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/neumorphism/NeumorphismDemo.tsx?raw"),
};
