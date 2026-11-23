import { type Pattern } from "@/entities/pattern/model/pattern";
import { FakeUrgencyThumbnail } from "@/entities/pattern/catalog/fake-urgency/FakeUrgencyThumbnail";

export const fakeUrgencyPattern: Pattern = {
  slug: "fake-urgency",
  kind: "concept",
  name: "Fake Urgency",
  nameKo: "가짜 긴급함",
  aliases: ["가짜 타이머", "가짜 마감", "fake countdown", "false urgency"],
  category: "dark-pattern-ux",
  summary: "끝난 뒤에도 초기화되는 가짜 마감 (안티패턴)",
  description:
    "실제 마감이 없는데 카운트다운을 보여 주거나, 시간이 끝나면 다시 처음부터 시작해 서두르게 만드는 다크 패턴입니다. 바른 방법은 실제로 끝나는 날짜와 시간을 그대로 알려 주는 것입니다.",
  whenToUse: [
    "할인, 이벤트 배너의 시간 표시를 검토할 때",
    "타이머가 실제 마감과 맞는지 확인할 때",
    "긴급함을 정직하게 표현하는 방법을 정할 때",
  ],
  whenNotToUse: [
    "마감이 없는데 타이머를 띄울 때",
    "끝난 타이머를 다시 시작할 때",
    "사람마다 다른 가짜 마감을 보여 줄 때",
  ],
  alternatives: [
    { name: "희소성", slug: "scarcity", reason: "실제 제약을 정직하게 알릴 때" },
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "가짜 재고로 압박할 때" },
  ],
  accessibility: [
    "시간은 날짜와 시각을 글로 함께 적습니다.",
    "1초마다 바뀌는 타이머는 aria-live로 계속 읽히지 않게 합니다.",
    "빨간색 깜빡임으로 불안을 키우지 않습니다.",
    "동작 줄이기에서는 움직임을 멈춥니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "안티패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/fake-urgency/FakeUrgencyDemo").then(
      (m) => m.FakeUrgencyDemo,
    ),
  Thumbnail: FakeUrgencyThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/fake-urgency/FakeUrgencyDemo.tsx?raw"),
};
