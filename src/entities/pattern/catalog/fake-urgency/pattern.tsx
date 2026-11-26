import { type Pattern } from "@/entities/pattern/model/pattern";

export const fakeUrgencyPattern: Pattern = {
  slug: "fake-urgency",

  kind: "concept",
  name: "Fake Urgency",
  nameKo: "가짜 긴급함",
  aliases: ["가짜 타이머", "가짜 마감", "fake countdown", "false urgency"],
  category: "dark-patterns",
  summary: "끝난 뒤에도 초기화되는 가짜 마감",
  description:
    "실제 마감이 없는데 카운트다운을 보여 주거나, 시간이 끝나면 다시 처음부터 시작해 서두르게 만드는 다크 패턴입니다. 바른 방법은 실제로 끝나는 날짜와 시간을 그대로 알려 주는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/fake-urgency/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/fake-urgency/FakeUrgencyDemo").then(
      (m) => m.FakeUrgencyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fake-urgency/FakeUrgencyThumbnail").then(
      (m) => m.FakeUrgencyThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/fake-urgency/FakeUrgencyDemo.tsx?raw"),
};
