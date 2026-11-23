import { type Pattern } from "@/entities/pattern/model/pattern";
import { HiddenCostsThumbnail } from "@/entities/pattern/catalog/hidden-costs/HiddenCostsThumbnail";

export const hiddenCostsPattern: Pattern = {
  slug: "hidden-costs",
  kind: "concept",
  name: "Hidden Costs",
  nameKo: "숨은 비용",
  aliases: ["드립 프라이싱", "숨은 수수료", "drip pricing", "junk fees"],
  category: "dark-patterns",
  summary: "마지막 단계에서 붙는 요금 (다크 패턴)",
  description:
    "상품 페이지에는 낮은 가격만 보여 주고, 결제 마지막 단계에서 수수료와 배송비를 더해 처음과 다른 금액을 내게 하는 다크 패턴입니다. 바른 방법은 처음 보는 가격에 피할 수 없는 비용을 모두 포함하는 것입니다.",
  whenToUse: [
    "상품 목록, 상세, 결제의 가격 표시를 맞출 때",
    "수수료와 배송비를 언제 보여 줄지 정할 때",
    "최종 금액이 달라지는 지점을 찾을 때",
  ],
  whenNotToUse: [
    "처음 가격을 낮아 보이게 하려고 필수 비용을 빼 둘 때",
    "마지막 단계에서 비용을 더할 때",
    "비용 이름을 모호하게 쓸 때",
  ],
  alternatives: [
    { name: "영수증 요약", slug: "receipt-summary", reason: "결제 금액 내역을 보여 줄 때" },
    {
      name: "장바구니 몰래 담기",
      slug: "sneak-into-basket",
      reason: "원하지 않은 항목이 더해질 때",
    },
  ],
  accessibility: [
    "가격 옆에 포함된 비용을 글로 적습니다.",
    "총액은 tabular-nums로 정렬합니다.",
    "추가 비용을 색으로만 강조하지 않습니다.",
    "결제 전 최종 금액을 한 번 더 보여 줍니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/hidden-costs/HiddenCostsDemo").then(
      (m) => m.HiddenCostsDemo,
    ),
  Thumbnail: HiddenCostsThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/hidden-costs/HiddenCostsDemo.tsx?raw"),
};
