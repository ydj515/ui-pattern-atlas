import { type Pattern } from "@/entities/pattern/model/pattern";

export const threeDExtrudePattern: Pattern = {
  slug: "three-d-extrude",

  kind: "concept",
  name: "3D Extrude",
  nameKo: "3D 돌출",
  aliases: ["입체 글자", "돌출 글자", "3D extrude", "extruded text"],
  category: "typography-style",
  summary: "글자를 뒤로 연장해 깊이와 옆면 표시",
  description:
    "글자를 비스듬히 뒤로 밀어낸 것처럼 옆면을 여러 겹 쌓아 깊이를 표현하는 스타일입니다. 같은 방향으로 조금씩 어두워지는 그림자를 겹칩니다.",
  tags: ["글자 스타일", "3D Extrude"],
  loadGuide: () => import("@/entities/pattern/catalog/three-d-extrude/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/three-d-extrude/ThreeDExtrudeDemo").then(
      (m) => m.ThreeDExtrudeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/three-d-extrude/ThreeDExtrudeThumbnail").then(
      (m) => m.ThreeDExtrudeThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/three-d-extrude/ThreeDExtrudeDemo.tsx?raw"),
};
