import { type Pattern } from "@/entities/pattern/model/pattern";

export const neoBrutalismPattern: Pattern = {
  slug: "neo-brutalism",

  kind: "concept",
  name: "Neo-brutalism",
  nameKo: "네오 브루털리즘",
  aliases: ["네오브루탈리즘", "뉴 브루털리즘", "neubrutalism"],
  category: "design-style",
  summary: "두꺼운 외곽선과 강한 대비, 단단한 그림자",
  description:
    "두꺼운 검은 외곽선, 흐림 없이 옆으로 밀린 단단한 그림자, 선명한 원색을 쓰는 스타일입니다. 누르면 버튼이 그림자 자리로 내려앉아 실제로 눌린 것처럼 보입니다.",
  tags: ["디자인 스타일", "외곽선"],
  loadGuide: () => import("@/entities/pattern/catalog/neo-brutalism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/neo-brutalism/NeoBrutalismDemo").then(
      (m) => m.NeoBrutalismDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/neo-brutalism/NeoBrutalismThumbnail").then(
      (m) => m.NeoBrutalismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/neo-brutalism/NeoBrutalismDemo.tsx?raw"),
};
