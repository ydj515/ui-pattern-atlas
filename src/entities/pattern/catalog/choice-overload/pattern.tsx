import { type Pattern } from "@/entities/pattern/model/pattern";
import { ChoiceOverloadThumbnail } from "@/entities/pattern/catalog/choice-overload/ChoiceOverloadThumbnail";

export const choiceOverloadPattern: Pattern = {
  slug: "choice-overload",
  kind: "concept",
  name: "Choice Overload",
  nameKo: "선택 과부하",
  aliases: ["선택의 역설", "선택 마비", "choice overload", "paradox of choice"],
  category: "dark-pattern-ux",
  summary: "대안이 많고 비교가 어려우면 결정을 미룬다",
  description:
    "선택지가 너무 많고 서로 비교하기 어려우면 오히려 고르지 못하고 결정을 미루는 경향입니다. 처음 보여 줄 선택지를 줄이고 추천이나 필터로 좁혀 주면 결정하기 쉬워집니다.",
  whenToUse: [
    "상품 진열, 요금제, 템플릿 고르기 화면",
    "처음 쓰는 사람에게 시작점을 줄 때",
    "비교 기준이 많은 목록",
  ],
  whenNotToUse: [
    "원하는 것을 정확히 아는 사람에게 선택지를 숨길 때",
    "추천을 회사에 유리한 것으로만 채울 때",
    "전체 목록으로 가는 길을 막을 때",
  ],
  alternatives: [
    { name: "힉의 법칙", slug: "hicks-law", reason: "선택지 수와 결정 시간" },
    { name: "필터 칩", slug: "filter-chip", reason: "목록을 좁혀 보여 줄 때" },
  ],
  accessibility: [
    "색 견본마다 맛 이름을 글로 둡니다.",
    "추천 이유를 글로 적습니다.",
    "전체 목록으로 가는 링크를 남깁니다.",
    "선택지는 키보드로 고를 수 있게 합니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/choice-overload/ChoiceOverloadDemo").then(
      (m) => m.ChoiceOverloadDemo,
    ),
  Thumbnail: ChoiceOverloadThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/choice-overload/ChoiceOverloadDemo.tsx?raw"),
};
