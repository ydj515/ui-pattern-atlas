import { type Pattern } from "@/entities/pattern/model/pattern";

export const threeDIconPattern: Pattern = {
  slug: "three-d-icon",

  kind: "concept",
  name: "3D Icon",
  nameKo: "3D 아이콘",
  aliases: ["입체 아이콘", "3D 일러스트 아이콘", "3D icons"],
  category: "design-style",
  summary: "부피와 빛으로 재질을 표현한 아이콘",
  description:
    "화면은 평평하게 두고 아이콘에만 부피, 빛, 반사를 넣어 손에 잡힐 듯한 재질을 표현하는 스타일입니다. 안쪽 그림자와 하이라이트, 색이 번진 바닥 그림자로 입체를 만듭니다.",
  tags: ["디자인 스타일", "아이콘"],
  loadGuide: () => import("@/entities/pattern/catalog/three-d-icon/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/three-d-icon/ThreeDIconDemo").then((m) => m.ThreeDIconDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/three-d-icon/ThreeDIconThumbnail").then(
      (m) => m.ThreeDIconThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/three-d-icon/ThreeDIconDemo.tsx?raw"),
};
