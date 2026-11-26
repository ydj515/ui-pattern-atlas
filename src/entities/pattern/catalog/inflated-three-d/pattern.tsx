import { type Pattern } from "@/entities/pattern/model/pattern";

export const inflatedThreeDPattern: Pattern = {
  slug: "inflated-three-d",

  kind: "concept",
  name: "Inflated 3D",
  nameKo: "인플레이트 3D",
  aliases: ["풍선 글자", "부푼 3D", "inflated type", "puffy letters"],
  category: "typography-style",
  summary: "공기를 넣은 듯 부풀고 둥근 입체 글자",
  description:
    "글자에 공기를 넣은 듯 둥글고 통통한 입체감을 주는 스타일입니다. 흰 외곽선과 아래로 쌓은 그림자로 부푼 두께를 표현합니다.",
  tags: ["글자 스타일", "Inflated 3D"],
  loadGuide: () => import("@/entities/pattern/catalog/inflated-three-d/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/inflated-three-d/Inflated3DDemo").then(
      (m) => m.Inflated3DDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/inflated-three-d/Inflated3DThumbnail").then(
      (m) => m.Inflated3DThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/inflated-three-d/Inflated3DDemo.tsx?raw"),
};
