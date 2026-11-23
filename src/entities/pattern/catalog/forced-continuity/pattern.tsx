import { type Pattern } from "@/entities/pattern/model/pattern";
import { ForcedContinuityThumbnail } from "@/entities/pattern/catalog/forced-continuity/ForcedContinuityThumbnail";

export const forcedContinuityPattern: Pattern = {
  slug: "forced-continuity",
  kind: "concept",
  name: "Forced Continuity",
  nameKo: "몰래 자동 결제",
  aliases: ["자동 갱신 함정", "무료 체험 함정", "forced continuity", "silent auto-renewal"],
  category: "dark-pattern-ux",
  summary: "전환 조건을 숨긴 채 체험을 유료 결제로 넘기기 (안티패턴)",
  description:
    "무료 체험을 시작할 때 결제 조건을 작게 숨기고, 체험이 끝나면 알림 없이 유료 결제로 넘기는 다크 패턴입니다. 바른 방법은 결제 날짜와 금액을 분명히 쓰고 결제 전에 다시 알려 주며 쉽게 해지하게 하는 것입니다.",
  whenToUse: [
    "무료 체험, 자동 갱신 구독을 설계할 때",
    "결제 전 알림 시점을 정할 때",
    "체험 시작 화면의 문구를 검토할 때",
  ],
  whenNotToUse: [
    "결제 조건을 작은 회색 글씨로만 둘 때",
    "결제 전 알림 없이 바로 청구할 때",
    "해지를 어렵게 만들 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "해지를 어렵게 만들 때" },
    { name: "숨은 비용", slug: "hidden-costs", reason: "나중에 드러나는 요금" },
  ],
  accessibility: [
    "결제 날짜와 금액을 버튼 가까이에 같은 크기의 글로 둡니다.",
    "옅은 작은 글씨로 조건을 숨기지 않습니다.",
    "알림 설정 상태를 글로 보여 줍니다.",
    "해지 방법을 같은 화면에서 안내합니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "안티패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/forced-continuity/ForcedContinuityDemo").then(
      (m) => m.ForcedContinuityDemo,
    ),
  Thumbnail: ForcedContinuityThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/forced-continuity/ForcedContinuityDemo.tsx?raw"),
};
