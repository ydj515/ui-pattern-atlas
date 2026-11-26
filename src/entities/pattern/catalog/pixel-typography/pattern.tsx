import { type Pattern } from "@/entities/pattern/model/pattern";

export const pixelTypographyPattern: Pattern = {
  slug: "pixel-typography",
  kind: "concept",
  name: "Pixel Typography",
  nameKo: "픽셀",
  aliases: ["도트 글자", "비트맵 글자", "pixel font", "8-bit type"],
  category: "typography-style",
  summary: "픽셀 격자에 맞춘 계단 모양의 획",
  description:
    "작은 격자의 점을 하나하나 켜서 글자를 만드는 스타일로, 오래된 게임과 전광판 느낌을 줍니다. 이 예시는 문구를 비트맵으로 그려 SVG 사각형으로 키웠습니다.",
  whenToUse: ["게임, 레트로 이벤트", "전광판, 시계 같은 연출", "짧은 제목"],
  whenNotToUse: ["긴 한글 문장(획이 뭉개짐)", "작은 크기", "읽기가 중요한 안내"],
  alternatives: [
    { name: "모노스페이스", slug: "monospace", reason: "같은 폭의 칸" },
    { name: "글리치", slug: "glitch", reason: "디지털 오류 느낌" },
  ],
  accessibility: [
    "SVG로 그린 글자는 role=img와 aria-label(주말 마켓)로 읽힙니다.",
    "픽셀 글자는 작게 쓰면 읽기 어려우니 크게 씁니다.",
    "같은 문구를 글로도 둘 수 있게 합니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Pixel Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyDemo").then(
      (m) => m.PixelTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyThumbnail").then(
      (m) => m.PixelTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyDemo.tsx?raw"),
};
