import { type Pattern } from "@/entities/pattern/model/pattern";

export const cutoutCollagePattern: Pattern = {
  slug: "cutout-collage",

  kind: "concept",
  name: "Cutout Collage",
  nameKo: "콜라주",
  aliases: ["콜라주 글자", "오려 붙인 글자", "ransom note", "cutout type"],
  category: "typography-style",
  summary: "다른 글자 조각과 종이 질감을 한 문구로 조합",
  description:
    "글자마다 다른 서체, 색 종이, 기울기를 섞어 잡지에서 오려 붙인 것처럼 보이게 하는 스타일입니다. 글자를 하나씩 나누므로 화면 읽기에는 문구 전체를 따로 줍니다.",
  tags: ["글자 스타일", "Cutout Collage"],
  loadGuide: () => import("@/entities/pattern/catalog/cutout-collage/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/cutout-collage/CutoutCollageDemo").then(
      (m) => m.CutoutCollageDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/cutout-collage/CutoutCollageThumbnail").then(
      (m) => m.CutoutCollageThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/cutout-collage/CutoutCollageDemo.tsx?raw"),
};
