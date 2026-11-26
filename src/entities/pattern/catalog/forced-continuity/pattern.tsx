import { type Pattern } from "@/entities/pattern/model/pattern";

export const forcedContinuityPattern: Pattern = {
  slug: "forced-continuity",

  kind: "concept",
  name: "Forced Continuity",
  nameKo: "몰래 자동 결제",
  aliases: ["자동 갱신 함정", "무료 체험 함정", "forced continuity", "silent auto-renewal"],
  category: "dark-patterns",
  summary: "전환 조건을 숨긴 채 체험을 유료 결제로 넘기기",
  description:
    "무료 체험을 시작할 때 결제 조건을 작게 숨기고, 체험이 끝나면 알림 없이 유료 결제로 넘기는 다크 패턴입니다. 바른 방법은 결제 날짜와 금액을 분명히 쓰고 결제 전에 다시 알려 주며 쉽게 해지하게 하는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/forced-continuity/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/forced-continuity/ForcedContinuityDemo").then(
      (m) => m.ForcedContinuityDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/forced-continuity/ForcedContinuityThumbnail").then(
      (m) => m.ForcedContinuityThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/forced-continuity/ForcedContinuityDemo.tsx?raw"),
};
