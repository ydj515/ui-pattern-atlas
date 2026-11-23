import { type Pattern } from "@/entities/pattern/model/pattern";
import { AnchoringThumbnail } from "@/entities/pattern/catalog/anchoring/AnchoringThumbnail";

export const anchoringPattern: Pattern = {
  slug: "anchoring",
  kind: "concept",
  name: "Anchoring",
  nameKo: "앵커링",
  aliases: ["앵커 효과", "닻 내림 효과", "anchoring bias", "reference price"],
  category: "dark-pattern-ux",
  summary: "처음 본 숫자가 이후 판단 기준이 된다",
  description:
    "처음 제시된 숫자가 닻처럼 기준이 되어 이후 판단에 영향을 준다는 원리입니다. 정가를 먼저 보여 주면 할인가가 더 싸게 느껴지므로, 실제로 판매된 적 있는 가격만 기준으로 써야 합니다.",
  whenToUse: [
    "할인 전 가격, 비교 가격을 보여 줄 때",
    "요금제 순서를 정할 때",
    "가격 표시의 정직성을 검토할 때",
  ],
  whenNotToUse: [
    "판매한 적 없는 부풀린 정가를 보여 줄 때",
    "기준 가격의 출처를 숨길 때",
    "비교 대상이 다른 상품일 때",
  ],
  alternatives: [
    { name: "취소선 가격", slug: "strikethrough-price", reason: "할인 전후 가격 표시" },
    { name: "미끼 효과", slug: "decoy-effect", reason: "선택지 구성으로 판단이 달라질 때" },
  ],
  accessibility: [
    "취소선 가격은 정가라는 글자를 함께 둬 화면 읽기에서도 뜻이 전해지게 합니다.",
    "할인 금액을 글로 적습니다.",
    "색과 취소선만으로 의미를 전하지 않습니다.",
    "가격은 tabular-nums로 정렬합니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/anchoring/AnchoringDemo").then((m) => m.AnchoringDemo),
  Thumbnail: AnchoringThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/anchoring/AnchoringDemo.tsx?raw"),
};
