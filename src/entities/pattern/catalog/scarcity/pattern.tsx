import { type Pattern } from "@/entities/pattern/model/pattern";

export const scarcityPattern: Pattern = {
  slug: "scarcity",
  kind: "concept",
  name: "Scarcity",
  nameKo: "희소성",
  aliases: ["희소성 원리", "한정 효과", "scarcity principle", "limited availability"],
  category: "cognitive-bias",
  summary: "수량이나 시간 제약이 선택에 영향을 준다",
  description:
    "수량이나 시간이 제한되면 더 가치 있게 느끼고 빨리 결정하려는 경향입니다. 실제로 제약이 있을 때 담담하게 알리면 놓치지 않게 돕지만, 꾸민 제약은 가짜 희소성이 됩니다.",
  whenToUse: [
    "좌석, 재고처럼 실제로 한정된 것을 알릴 때",
    "마감이 있는 신청",
    "놓치면 곤란한 정보",
  ],
  whenNotToUse: [
    "제약이 없는데 한정이라고 할 때",
    "숫자를 바꿔 가며 압박할 때",
    "모든 상품에 같은 표시를 붙일 때",
  ],
  alternatives: [
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "꾸민 재고 표시" },
    { name: "가짜 긴급함", slug: "fake-urgency", reason: "가짜 마감" },
  ],
  accessibility: [
    "남은 수는 숫자와 단위로 글에 적습니다.",
    "빨간 경고색은 실제로 급할 때만 씁니다.",
    "자주 바뀌는 숫자는 aria-live로 계속 읽히지 않게 합니다.",
    "날짜와 시각은 글로 적습니다.",
  ],
  tags: ["인지 편향", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/scarcity/ScarcityDemo").then((m) => m.ScarcityDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scarcity/ScarcityThumbnail").then(
      (m) => m.ScarcityThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/scarcity/ScarcityDemo.tsx?raw"),
};
