import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const rewardPointsPattern: Pattern = {
  slug: "reward-points",
  name: "Reward Points",
  nameKo: "적립금 표시",
  aliases: ["포인트 적립", "적립 예정", "캐시백", "reward points", "cashback"],
  category: "pricing-display",
  summary: "적립 예정 금액과 지급 조건",
  description:
    "결제 금액과 적립률로 계산한 적립 예정 금액을 보여 주는 표시입니다. 결제 수단처럼 적립률이 바뀌는 선택을 하면 금액이 바로 바뀌고, 언제 지급되고 어디에 쓸 수 없는지도 함께 적습니다.",
  whenToUse: [
    "결제 수단, 등급에 따라 적립률이 다를 때",
    "주문 전에 받을 혜택을 알려 줄 때",
    "지급 시점과 사용 조건이 있을 때",
  ],
  whenNotToUse: [
    "적립이 확정되지 않은 금액을 확정처럼 보일 때",
    "적립 조건이 너무 복잡해 한 줄로 설명되지 않을 때",
    "결제와 상관없는 화면",
  ],
  alternatives: [
    { name: "할인율 배지", slug: "discount-badge", reason: "지금 바로 깎이는 혜택일 때" },
    {
      name: "무료배송 진행 바",
      slug: "free-shipping-progress",
      reason: "금액 기준을 채우는 혜택일 때",
    },
  ],
  accessibility: [
    "적립 예정 금액은 aria-live로 바뀔 때마다 읽어 줍니다.",
    "지급 조건은 금액 바로 아래 글자로 둡니다.",
    "퍼센트와 금액을 함께 적어 계산 근거를 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Intl.NumberFormat"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/reward-points/RewardPointsDemo").then(
      (m) => m.RewardPointsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/reward-points/RewardPointsThumbnail").then(
      (m) => m.RewardPointsThumbnail,
    ),
  sources: [
    {
      fileName: "RewardPoints.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/reward-points/RewardPoints.tsx?raw"),
    },
    {
      fileName: "RewardPointsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/reward-points/RewardPointsDemo.tsx?raw"),
    },
  ],
};
