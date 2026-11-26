import { type Pattern } from "@/entities/pattern/model/pattern";

export const stencilPattern: Pattern = {
  slug: "stencil",

  kind: "concept",
  name: "Stencil",
  nameKo: "스텐실",
  aliases: ["스텐실 글자", "군용 글자", "stencil type"],
  category: "typography-style",
  summary: "판으로 찍어 낸 듯 획을 일부 끊어서 표현",
  description:
    "판을 대고 페인트를 뿌린 것처럼 획 중간이 일정하게 끊겨 있는 스타일입니다. 이 예시는 가로줄 마스크로 획을 끊어 연결부를 만들었습니다.",
  tags: ["글자 스타일", "Stencil"],
  loadGuide: () => import("@/entities/pattern/catalog/stencil/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stencil/StencilDemo").then((m) => m.StencilDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stencil/StencilThumbnail").then((m) => m.StencilThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/stencil/StencilDemo.tsx?raw"),
};
