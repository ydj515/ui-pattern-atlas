import { type Pattern } from "@/entities/pattern/model/pattern";
import { DecoyEffectThumbnail } from "@/entities/pattern/catalog/decoy-effect/DecoyEffectThumbnail";

export const decoyEffectPattern: Pattern = {
  slug: "decoy-effect",
  kind: "concept",
  name: "Decoy Effect",
  nameKo: "미끼 효과",
  aliases: ["유인 효과", "Attraction Effect"],
  category: "pricing-psychology",
  summary: "한 선택지에 밀리는 대안이 추가되면 상대적 선호가 달라질 수 있는 경향",
  description:
    "한 선택지가 가격이 같으면서 혜택이 적은 대안보다 우위에 있으면 그 선택지가 더 좋아 보일 수 있습니다. 정기 구독에서 비교 옵션을 추가해 구성을 직접 확인합니다.",
  whenToUse: ["선택지를 더했을 때 기존 옵션의 상대적 매력이 어떻게 달라 보이는지 설명할 때"],
  whenNotToUse: ["구매자가 이용할 수 없는 허위 옵션을 노출하거나 특정 요금제를 고르도록 오도할 때"],
  alternatives: [
    {
      name: "타협 효과",
      slug: "compromise-effect",
      reason: "중간 옵션이 보이는 위치에 초점을 맞출 때",
    },
  ],
  accessibility: ["가격과 포함 혜택을 각 옵션에 동일한 구조의 텍스트로 표시합니다."],
  tags: ["가격의 심리", "비대칭 지배"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/decoy-effect/DecoyEffectDemo").then(
      (m) => m.DecoyEffectDemo,
    ),
  Thumbnail: DecoyEffectThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/decoy-effect/DecoyEffectDemo.tsx?raw"),
};
