import { type Pattern } from "@/entities/pattern/model/pattern";
import { FakeScarcityThumbnail } from "@/entities/pattern/catalog/fake-scarcity/FakeScarcityThumbnail";

export const fakeScarcityPattern: Pattern = {
  slug: "fake-scarcity",
  kind: "concept",
  name: "Fake Scarcity",
  nameKo: "가짜 희소성",
  aliases: ["가짜 재고 표시", "거짓 품절 임박", "false scarcity", "fake stock counter"],
  category: "dark-patterns",
  summary: "실제와 다른 재고·조회 수로 구매 압박 (다크 패턴)",
  description:
    "실제 재고나 보는 사람 수와 상관없이 '1개 남음', '37명이 보는 중'처럼 꾸민 숫자로 서두르게 만드는 다크 패턴입니다. 바른 방법은 실제 데이터만, 압박하는 말투 없이 보여 주는 것입니다.",
  whenToUse: [
    "재고, 조회 수 표시를 검토할 때",
    "희소성 표시에 쓰는 데이터 출처를 확인할 때",
    "구매 압박 문구의 선을 정할 때",
  ],
  whenNotToUse: [
    "무작위나 고정된 숫자를 재고처럼 보여 줄 때",
    "모든 상품에 같은 경고를 붙일 때",
    "빨간 느낌표로 불안을 키울 때",
  ],
  alternatives: [
    { name: "희소성", slug: "scarcity", reason: "실제 제약을 정직하게 알릴 때" },
    { name: "가짜 긴급함", slug: "fake-urgency", reason: "가짜 마감 타이머" },
  ],
  accessibility: [
    "재고는 숫자와 글로 담담하게 적습니다.",
    "색과 느낌표로 압박하지 않습니다.",
    "바뀌는 숫자를 aria-live로 계속 읽히지 않게 합니다.",
    "실제 데이터의 갱신 시각을 함께 둡니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/fake-scarcity/FakeScarcityDemo").then(
      (m) => m.FakeScarcityDemo,
    ),
  Thumbnail: FakeScarcityThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/fake-scarcity/FakeScarcityDemo.tsx?raw"),
};
