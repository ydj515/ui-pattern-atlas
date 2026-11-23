import { type Pattern } from "@/entities/pattern/model/pattern";
import { SwissStyleThumbnail } from "@/entities/pattern/catalog/swiss-style/SwissStyleThumbnail";

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
  whenToUse: ["정보가 많은 포스터, 리포트", "깔끔하고 객관적인 브랜드", "그리드 레이아웃"],
  whenNotToUse: ["감성적인 분위기가 필요할 때", "그리드 없이 흉내만 낼 때", "장식이 중요한 행사"],
  alternatives: [
    { name: "바우하우스", slug: "bauhaus", reason: "기본 도형과 원색" },
    { name: "에디토리얼", slug: "editorial-typography", reason: "세리프 지면" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Swiss Style"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/swiss-style/SwissStyleDemo").then((m) => m.SwissStyleDemo),
  Thumbnail: SwissStyleThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/swiss-style/SwissStyleDemo.tsx?raw"),
};
