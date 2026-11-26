import { type Pattern } from "@/entities/pattern/model/pattern";

export const brutalismPattern: Pattern = {
  slug: "brutalism",

  kind: "concept",
  name: "Brutalism",
  nameKo: "브루털리즘",
  aliases: ["브루탈리즘", "날것 디자인", "brutalist web design"],
  category: "design-style",
  summary: "거칠고 날것인 레이아웃",
  description:
    "꾸밈을 덜어 내고 기본 글꼴, 얇은 선, 날카로운 모서리, 밑줄 그대로의 글자처럼 웹의 날것 상태를 드러내는 스타일입니다. 일부러 어색한 배치와 원색으로 강한 인상을 줍니다.",
  tags: ["디자인 스타일", "날것"],
  loadGuide: () => import("@/entities/pattern/catalog/brutalism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/brutalism/BrutalismDemo").then((m) => m.BrutalismDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/brutalism/BrutalismThumbnail").then(
      (m) => m.BrutalismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/brutalism/BrutalismDemo.tsx?raw"),
};
