import { type Pattern } from "@/entities/pattern/model/pattern";

export const leftDigitEffectPattern: Pattern = {
  slug: "left-digit-effect",

  kind: "concept",
  name: "Left-Digit Effect",
  nameKo: "왼쪽 숫자 효과",
  aliases: ["끝자리 가격", "첫 자리 효과"],
  category: "pricing-psychology",
  summary: "맨 앞 숫자가 달라질 때 같은 금액 차이가 크게 느껴질 수 있는 효과",
  description:
    "5,800원에서 5,900원으로 오를 때와 5,900원에서 6,000원으로 오를 때의 차이는 모두 100원입니다. 첫 자리만 바뀌는 조건의 가격 쌍을 비교할 수 있습니다.",
  tags: ["가격의 심리", "가격 인식"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/left-digit-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/left-digit-effect/LeftDigitEffectDemo").then(
      (m) => m.LeftDigitEffectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/left-digit-effect/LeftDigitEffectThumbnail").then(
      (m) => m.LeftDigitEffectThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/left-digit-effect/LeftDigitEffectDemo.tsx?raw"),
};
