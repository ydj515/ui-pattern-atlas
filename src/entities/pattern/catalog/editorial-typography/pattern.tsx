import { type Pattern } from "@/entities/pattern/model/pattern";
import { EditorialTypographyThumbnail } from "@/entities/pattern/catalog/editorial-typography/EditorialTypographyThumbnail";

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
  whenToUse: ["기사, 블로그, 뉴스레터", "읽을거리가 중심인 화면", "제목과 소제목 위계"],
  whenNotToUse: ["버튼과 조작이 많은 앱 화면", "세리프가 작은 화면에서 흐릿할 때", "짧은 라벨"],
  alternatives: [
    { name: "미니멀 타이포그래피", slug: "minimal-typography", reason: "여백만으로 강조" },
    { name: "스위스 스타일", slug: "swiss-style", reason: "산세리프 그리드" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Editorial Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/editorial-typography/EditorialTypographyDemo").then(
      (m) => m.EditorialTypographyDemo,
    ),
  Thumbnail: EditorialTypographyThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/editorial-typography/EditorialTypographyDemo.tsx?raw"),
};
