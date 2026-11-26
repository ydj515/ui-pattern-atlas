import { type Pattern } from "@/entities/pattern/model/pattern";

export const minimalismPattern: Pattern = {
  slug: "minimalism",

  kind: "concept",
  name: "Minimalism",
  nameKo: "미니멀리즘",
  aliases: ["미니멀 디자인", "여백 디자인", "minimal UI"],
  category: "design-style",
  summary: "필요한 것만 남긴 화면",
  description:
    "꼭 필요한 요소만 남기고 넓은 여백, 가는 글자, 얇은 선으로 정돈하는 스타일입니다. 버튼도 테두리 대신 밑줄 정도로 줄여 내용이 먼저 보이게 합니다.",
  tags: ["디자인 스타일", "여백"],
  loadGuide: () => import("@/entities/pattern/catalog/minimalism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/minimalism/MinimalismDemo").then((m) => m.MinimalismDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/minimalism/MinimalismThumbnail").then(
      (m) => m.MinimalismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/minimalism/MinimalismDemo.tsx?raw"),
};
