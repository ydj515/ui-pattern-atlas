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
  tags: ["글자 스타일", "Graffiti"],
  loadGuide: () => import("@/entities/pattern/catalog/graffiti/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/graffiti/GraffitiDemo").then((m) => m.GraffitiDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/graffiti/GraffitiThumbnail").then(
      (m) => m.GraffitiThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/graffiti/GraffitiDemo.tsx?raw"),
};
