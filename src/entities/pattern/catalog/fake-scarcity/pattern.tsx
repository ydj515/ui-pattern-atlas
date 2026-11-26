import { type Pattern } from "@/entities/pattern/model/pattern";

export const fakeScarcityPattern: Pattern = {
  slug: "fake-scarcity",

  kind: "concept",
  name: "Fake Scarcity",
  nameKo: "가짜 희소성",
  aliases: ["가짜 재고 표시", "거짓 품절 임박", "false scarcity", "fake stock counter"],
  category: "dark-patterns",
  summary: "실제와 다른 재고·조회 수로 구매 압박",
  description:
    "실제 재고나 보는 사람 수와 상관없이 '1개 남음', '37명이 보는 중'처럼 꾸민 숫자로 서두르게 만드는 다크 패턴입니다. 바른 방법은 실제 데이터만, 압박하는 말투 없이 보여 주는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/fake-scarcity/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/fake-scarcity/FakeScarcityDemo").then(
      (m) => m.FakeScarcityDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fake-scarcity/FakeScarcityThumbnail").then(
      (m) => m.FakeScarcityThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/fake-scarcity/FakeScarcityDemo.tsx?raw"),
};
