import { type Pattern } from "@/entities/pattern/model/pattern";

export const choiceOverloadPattern: Pattern = {
  slug: "choice-overload",

  kind: "concept",
  name: "Choice Overload",
  nameKo: "선택 과부하",
  aliases: ["선택의 역설", "선택 마비", "choice overload", "paradox of choice"],
  category: "ux-laws",
  summary: "대안이 많고 비교가 어려우면 결정을 미룬다",
  description:
    "선택지가 너무 많고 서로 비교하기 어려우면 오히려 고르지 못하고 결정을 미루는 경향입니다. 처음 보여 줄 선택지를 줄이고 추천이나 필터로 좁혀 주면 결정하기 쉬워집니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/choice-overload/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/choice-overload/ChoiceOverloadDemo").then(
      (m) => m.ChoiceOverloadDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/choice-overload/ChoiceOverloadThumbnail").then(
      (m) => m.ChoiceOverloadThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/choice-overload/ChoiceOverloadDemo.tsx?raw"),
};
