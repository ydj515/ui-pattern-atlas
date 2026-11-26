import { type Pattern } from "@/entities/pattern/model/pattern";

export const framingEffectPattern: Pattern = {
  slug: "framing-effect",

  kind: "concept",
  name: "Framing Effect",
  nameKo: "프레이밍 효과",
  aliases: ["프레이밍", "틀 효과", "framing effect", "positive vs negative framing"],
  category: "cognitive-bias",
  summary: "같은 정보도 표현 방식에 따라 판단이 달라진다",
  description:
    "같은 사실이라도 긍정적인 틀(무지방 80%)과 부정적인 틀(지방 20%)로 말하면 다르게 받아들인다는 원리입니다. 중요한 결정에는 두 틀을 함께 보여 주거나 숫자 자체를 분명히 써야 합니다.",
  tags: ["인지 편향", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/framing-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/framing-effect/FramingEffectDemo").then(
      (m) => m.FramingEffectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/framing-effect/FramingEffectThumbnail").then(
      (m) => m.FramingEffectThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/framing-effect/FramingEffectDemo.tsx?raw"),
};
