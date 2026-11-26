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
  whenToUse: ["게임, 레트로, 영화 포스터", "큰 제목에 무게를 줄 때", "로고"],
  whenNotToUse: ["작은 글자", "그림자가 다음 줄과 겹칠 만큼 행간이 좁을 때", "본문"],
  alternatives: [
    { name: "인플레이트 3D", slug: "inflated-three-d", reason: "둥글게 부푼 입체" },
    { name: "엠보싱", slug: "emboss", reason: "표면에서 솟은 느낌" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "3D Extrude"],
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
