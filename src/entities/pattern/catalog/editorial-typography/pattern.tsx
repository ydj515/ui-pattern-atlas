import { type Pattern } from "@/entities/pattern/model/pattern";

export const editorialTypographyPattern: Pattern = {
  slug: "editorial-typography",

  kind: "concept",
  name: "Editorial Typography",
  nameKo: "에디토리얼",
  aliases: ["에디토리얼 디자인", "매거진 타이포", "editorial type"],
  category: "typography-style",
  summary: "제목·본문 대비와 여백으로 지면의 읽는 순서 구성",
  description:
    "잡지처럼 세리프 제목, 기울인 소제목, 선과 여백으로 읽는 순서를 이끄는 스타일입니다. 제목과 본문의 크기, 굵기 대비가 핵심입니다.",
  tags: ["글자 스타일", "Editorial Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/editorial-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/editorial-typography/EditorialTypographyDemo").then(
      (m) => m.EditorialTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/editorial-typography/EditorialTypographyThumbnail").then(
      (m) => m.EditorialTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/editorial-typography/EditorialTypographyDemo.tsx?raw"),
};
