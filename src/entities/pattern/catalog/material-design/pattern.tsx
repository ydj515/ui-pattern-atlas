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
  origin:
    "2014년 6월 구글 I/O에서 구글이 발표한 디자인 시스템이에요. 종이와 잉크 같은 실제 재료(material)처럼 화면 요소에도 층과 그림자가 있다는 생각에서 이름을 지었고, 2021년 Material You(머티리얼 3)로 이어졌어요.",
  whenToUse: [
    "겹친 카드, 떠 있는 버튼처럼 층위가 중요한 화면",
    "안드로이드 앱과 비슷한 경험을 줄 때",
    "누름 상태를 그림자 변화로 보여 줄 때",
  ],
  whenNotToUse: [
    "그림자를 모든 요소에 넣어 층위가 흐려질 때",
    "한글 버튼에 대문자 규칙을 그대로 적용할 때",
    "브랜드 고유의 인상이 더 중요한 서비스",
  ],
  alternatives: [
    { name: "플랫", slug: "flat-design", reason: "그림자 없이 면으로만" },
    { name: "뉴모피즘", slug: "neumorphism", reason: "부드러운 돌출과 함몰" },
  ],
  accessibility: [
    "그림자 외에도 색과 글자로 누름 상태를 알립니다.",
    "aria-pressed로 재생 상태를 전달합니다.",
    "글자와 배경 대비를 4.5:1 이상으로 둡니다.",
    "그림자 변화는 짧게 두어 움직임 부담을 줄입니다.",
  ],
  tags: ["디자인 스타일", "그림자"],
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
