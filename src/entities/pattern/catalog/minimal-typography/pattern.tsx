import { type Pattern } from "@/entities/pattern/model/pattern";

export const minimalTypographyPattern: Pattern = {
  slug: "minimal-typography",
  kind: "concept",
  name: "Minimal Typography",
  nameKo: "미니멀 타이포그래피",
  aliases: ["미니멀 타이포", "여백 타이포", "minimal type"],
  category: "typography-style",
  summary: "여백과 글자 대비로 핵심 문구를 드러냄",
  description:
    "장식을 빼고 아주 가는 큰 글자와 넓은 여백만으로 문구를 드러내는 스타일입니다. 작은 보조 글을 넓은 자간으로 두어 크기 대비를 만듭니다.",
  whenToUse: ["고급 브랜드, 갤러리, 포트폴리오", "한 문장에 집중시킬 때", "사진과 함께 쓰는 표지"],
  whenNotToUse: ["가는 글자 대비가 부족할 때", "정보가 많은 화면", "작은 화면에서 여백만 남을 때"],
  alternatives: [
    { name: "에디토리얼", slug: "editorial-typography", reason: "제목과 본문의 위계" },
    { name: "스위스 스타일", slug: "swiss-style", reason: "정돈된 그리드" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Minimal Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyDemo").then(
      (m) => m.MinimalTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyThumbnail").then(
      (m) => m.MinimalTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyDemo.tsx?raw"),
};
