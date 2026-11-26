import { type Pattern } from "@/entities/pattern/model/pattern";

export const outlinePattern: Pattern = {
  slug: "outline",
  kind: "concept",
  name: "Outline",
  nameKo: "아웃라인",
  aliases: ["윤곽선 글자", "외곽선 타이포", "outline text", "stroke text"],
  category: "typography-style",
  summary: "내부보다 글자 외곽선으로 형태를 강조",
  description:
    "글자 속은 비우고 외곽선만 그려 형태를 드러내는 스타일입니다. 굵은 글자에 -webkit-text-stroke를 주어 만들고, 채운 글자와 섞어 강약을 줍니다.",
  whenToUse: ["큰 제목에서 강약을 줄 때", "사진 위에서 가볍게 얹을 때", "채운 글자와 짝을 이룰 때"],
  whenNotToUse: ["작은 크기(선이 얇아 읽기 어려움)", "본문", "복잡한 배경 위"],
  alternatives: [
    { name: "그라데이션", slug: "gradient-typography", reason: "속을 색으로 채울 때" },
    { name: "네온 사인", slug: "neon-sign", reason: "빛나는 외곽" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Outline"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/outline/OutlineTypeDemo").then((m) => m.OutlineTypeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/outline/OutlineTypeThumbnail").then(
      (m) => m.OutlineTypeThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/outline/OutlineTypeDemo.tsx?raw"),
};
