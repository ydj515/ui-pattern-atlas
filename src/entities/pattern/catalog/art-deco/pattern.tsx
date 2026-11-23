import { type Pattern } from "@/entities/pattern/model/pattern";
import { ArtDecoThumbnail } from "@/entities/pattern/catalog/art-deco/ArtDecoThumbnail";

export const artDecoPattern: Pattern = {
  slug: "art-deco",
  kind: "concept",
  name: "Art Deco",
  nameKo: "아르데코",
  aliases: ["아르 데코", "데코 타이포", "Art Deco type"],
  category: "typography-style",
  summary: "대칭과 장식적인 기하학 선을 강조",
  description:
    "가늘고 높은 글자, 넓은 자간, 금색과 겹선 장식으로 1920년대 아르데코의 화려함을 표현하는 스타일입니다. 대칭과 반복되는 선이 특징입니다.",
  whenToUse: ["호텔, 바, 공연 같은 고급스러운 분위기", "초대장, 기념 행사", "짧은 제목"],
  whenNotToUse: [
    "작은 글자(가는 획이 사라짐)",
    "빠르게 읽어야 하는 안내",
    "가벼운 분위기의 서비스",
  ],
  alternatives: [
    { name: "바우하우스", slug: "bauhaus", reason: "원색과 기본 도형" },
    { name: "에디토리얼", slug: "editorial-typography", reason: "지면 같은 정돈" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Art Deco"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/art-deco/ArtDecoDemo").then((m) => m.ArtDecoDemo),
  Thumbnail: ArtDecoThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/art-deco/ArtDecoDemo.tsx?raw"),
};
