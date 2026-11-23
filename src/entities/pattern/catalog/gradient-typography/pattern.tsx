import { type Pattern } from "@/entities/pattern/model/pattern";
import { GradientTypographyThumbnail } from "@/entities/pattern/catalog/gradient-typography/GradientTypographyThumbnail";

export const gradientTypographyPattern: Pattern = {
  slug: "gradient-typography",
  kind: "concept",
  name: "Gradient Typography",
  nameKo: "그라데이션",
  aliases: ["그라데이션 글자", "그라디언트 텍스트", "gradient text"],
  category: "typography-style",
  summary: "글자 안에서 색이나 밝기가 점진적으로 변화",
  description:
    "글자 속을 여러 색이 이어지는 그라데이션으로 채우는 스타일입니다. 배경을 글자 모양으로 잘라 내는 background-clip: text로 만듭니다.",
  whenToUse: ["랜딩 페이지의 큰 제목", "밝고 현대적인 브랜드", "한두 단어 강조"],
  whenNotToUse: ["그라데이션의 옅은 부분이 배경과 대비가 낮을 때", "본문", "모든 제목에 반복할 때"],
  alternatives: [
    { name: "Y2K 크롬", slug: "chrome-typography", reason: "금속 그라데이션" },
    { name: "아웃라인", slug: "outline", reason: "속을 비울 때" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Gradient Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/gradient-typography/GradientTypographyDemo").then(
      (m) => m.GradientTypographyDemo,
    ),
  Thumbnail: GradientTypographyThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/gradient-typography/GradientTypographyDemo.tsx?raw"),
};
