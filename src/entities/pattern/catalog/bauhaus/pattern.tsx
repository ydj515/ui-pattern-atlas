import { type Pattern } from "@/entities/pattern/model/pattern";

export const bauhausPattern: Pattern = {
  slug: "bauhaus",

  kind: "concept",
  name: "Bauhaus",
  nameKo: "바우하우스",
  aliases: ["바우하우스 타이포", "기하학 타이포", "Bauhaus type"],
  category: "typography-style",
  summary: "원과 직선 등 기하학 형태를 활용한 글자",
  description:
    "원, 사각형, 삼각형 같은 기본 도형과 빨강, 파랑, 노랑 원색을 글자와 함께 배치하는 스타일입니다. 1920년대 독일 디자인 학교 바우하우스의 조형 원리에서 왔습니다.",
  tags: ["글자 스타일", "Bauhaus"],
  loadGuide: () => import("@/entities/pattern/catalog/bauhaus/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bauhaus/BauhausDemo").then((m) => m.BauhausDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bauhaus/BauhausThumbnail").then((m) => m.BauhausThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/bauhaus/BauhausDemo.tsx?raw"),
};
