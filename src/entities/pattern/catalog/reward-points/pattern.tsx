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
  tags: [...BASE_TAGS, "aria-live", "Intl.NumberFormat"],
  loadGuide: () => import("@/entities/pattern/catalog/reward-points/guide").then((m) => m.guide),
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
