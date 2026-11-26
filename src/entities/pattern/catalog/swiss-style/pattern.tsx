import { type Pattern } from "@/entities/pattern/model/pattern";

export const swissStylePattern: Pattern = {
  slug: "swiss-style",

  kind: "concept",
  name: "Swiss Style",
  nameKo: "스위스 스타일",
  aliases: [
    "스위스 타이포",
    "국제 타이포그래피 양식",
    "Swiss style",
    "International Typographic Style",
  ],
  category: "typography-style",
  summary: "규칙적인 그리드와 정렬로 정보 위계를 구성",
  description:
    "산세리프 글자를 왼쪽 정렬과 엄격한 그리드에 맞춰 놓고, 색 띠 같은 최소한의 요소로 위계를 만드는 스타일입니다. 1950년대 스위스에서 정리된 국제 타이포그래피 양식입니다.",
  tags: ["글자 스타일", "Swiss Style"],
  loadGuide: () => import("@/entities/pattern/catalog/swiss-style/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/swiss-style/SwissStyleDemo").then((m) => m.SwissStyleDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/swiss-style/SwissStyleThumbnail").then(
      (m) => m.SwissStyleThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/swiss-style/SwissStyleDemo.tsx?raw"),
};
