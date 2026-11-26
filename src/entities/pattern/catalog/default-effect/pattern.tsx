import { type Pattern } from "@/entities/pattern/model/pattern";

export const defaultEffectPattern: Pattern = {
  slug: "default-effect",

  kind: "concept",
  name: "Default Effect",
  nameKo: "기본값 효과",
  aliases: ["디폴트 효과", "기본 설정 효과", "default effect", "status quo bias"],
  category: "cognitive-bias",
  summary: "미리 정해 둔 옵션을 그대로 선택하는 경향",
  description:
    "사람들은 미리 정해 둔 값을 바꾸지 않고 그대로 고르는 경향이 있습니다. 기본값은 결정을 대신하는 것과 같으므로, 사용자에게 이롭고 되돌리기 쉬운 값을 기본으로 둬야 합니다.",
  tags: ["인지 편향", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/default-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/default-effect/DefaultEffectDemo").then(
      (m) => m.DefaultEffectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/default-effect/DefaultEffectThumbnail").then(
      (m) => m.DefaultEffectThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/default-effect/DefaultEffectDemo.tsx?raw"),
};
