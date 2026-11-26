import { type Pattern } from "@/entities/pattern/model/pattern";

export const materialDesignPattern: Pattern = {
  slug: "material-design",

  kind: "concept",
  name: "Material Design",
  nameKo: "머티리얼",
  aliases: ["머티리얼 디자인", "종이 층", "elevation"],
  category: "design-style",
  summary: "종이 층과 그림자",
  description:
    "화면 요소를 높이가 다른 종이 층으로 보고, 그림자의 크기로 위아래 관계를 표현하는 스타일입니다. 누르면 버튼이 살짝 떠오르듯 그림자가 커지고, 대문자와 넓은 자간의 버튼 글자가 특징입니다.",
  tags: ["디자인 스타일", "그림자"],
  loadGuide: () => import("@/entities/pattern/catalog/material-design/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/material-design/MaterialDesignDemo").then(
      (m) => m.MaterialDesignDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/material-design/MaterialDesignThumbnail").then(
      (m) => m.MaterialDesignThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/material-design/MaterialDesignDemo.tsx?raw"),
};
