import { type Pattern } from "@/entities/pattern/model/pattern";

export const acidGraphicPattern: Pattern = {
  slug: "acid-graphic",

  kind: "concept",
  name: "Acid Graphic",
  nameKo: "애시드 그래픽",
  aliases: ["애시드", "애시드 타이포", "acid design"],
  category: "typography-style",
  summary: "형광에 가까운 색과 거칠게 변형한 형태",
  description:
    "형광에 가까운 라임, 마젠타 색과 늘이고 기울인 형태로 1990년대 레이브 포스터 같은 강렬함을 주는 스타일입니다. 이 예시는 세로로 늘이고 기울인 글자에 번지는 빛과 어긋난 색 그림자를 더했습니다.",
  tags: ["글자 스타일", "Acid Graphic"],
  loadGuide: () => import("@/entities/pattern/catalog/acid-graphic/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/acid-graphic/AcidGraphicDemo").then(
      (m) => m.AcidGraphicDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/acid-graphic/AcidGraphicThumbnail").then(
      (m) => m.AcidGraphicThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/acid-graphic/AcidGraphicDemo.tsx?raw"),
};
