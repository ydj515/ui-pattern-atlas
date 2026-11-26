import { type Pattern } from "@/entities/pattern/model/pattern";

export const graffitiPattern: Pattern = {
  slug: "graffiti",
  kind: "concept",
  name: "Graffiti",
  nameKo: "그래피티",
  aliases: ["낙서 글자", "스트리트 타이포", "graffiti type"],
  category: "typography-style",
  summary: "손글씨와 스프레이 벽화의 자유로운 획",
  description:
    "기울이고 비튼 글자에 두꺼운 외곽선과 형광 그라데이션을 넣어 거리 벽화처럼 보이게 하는 스타일입니다. 벽돌 무늬 배경으로 맥락을 더했습니다.",
  whenToUse: ["스트리트 패션, 힙합, 청소년 행사", "자유롭고 반항적인 분위기", "짧은 제목"],
  whenNotToUse: ["공식 문서, 공공 안내", "읽기 어려울 만큼 비틀 때", "복잡한 배경 위 작은 글"],
  alternatives: [
    { name: "핸드레터링", slug: "hand-lettering", reason: "차분한 손글씨" },
    { name: "코믹 팝아트", slug: "comic-pop-art", reason: "만화 같은 굵은 외곽" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Graffiti"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/graffiti/GraffitiDemo").then((m) => m.GraffitiDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/graffiti/GraffitiThumbnail").then(
      (m) => m.GraffitiThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/graffiti/GraffitiDemo.tsx?raw"),
};
