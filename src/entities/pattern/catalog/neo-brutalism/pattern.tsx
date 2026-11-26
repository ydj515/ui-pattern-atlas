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
  origin:
    "브루탈리즘을 다시(neo) 가져와 굵은 테두리, 진한 그림자, 원색으로 다듬은 흐름이라 붙은 이름이에요.",
  whenToUse: [
    "개성 있는 스타트업, 크리에이터 도구",
    "젊고 장난스러운 인상",
    "조작 요소를 또렷하게 보여 줄 때",
  ],
  whenNotToUse: [
    "차분해야 하는 의료, 공공 서비스",
    "정보가 많아 선이 너무 많아질 때",
    "원색 조합이 브랜드와 맞지 않을 때",
  ],
  alternatives: [
    { name: "브루털리즘", slug: "brutalism", reason: "꾸밈을 더 덜어 낸 원형" },
    { name: "클레이모피즘", slug: "claymorphism", reason: "부드러운 입체" },
  ],
  accessibility: [
    "외곽선과 대비가 강해 경계가 분명합니다.",
    "눌림 이동은 동작 줄이기에서 생략합니다.",
    "원색 위 검은 글자 대비를 확인합니다.",
    "상태를 글자와 aria-pressed로 함께 알립니다.",
  ],
  tags: ["디자인 스타일", "외곽선"],
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
