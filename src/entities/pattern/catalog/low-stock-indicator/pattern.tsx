import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LowStockIndicatorThumbnail } from "@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorThumbnail";

export const lowStockIndicatorPattern: Pattern = {
  slug: "low-stock-indicator",
  name: "Low Stock Indicator",
  nameKo: "재고 표시",
  aliases: ["남은 수량", "품절 표시", "재고 부족", "low stock", "sold out"],
  category: "pricing-display",
  summary: "실제 남은 재고와 품절을 안내",
  description:
    "선택한 옵션의 실제 재고에 따라 재고 있음, 남은 수량, 품절을 나눠 보여 주는 표시입니다. 수량이 적을 때만 숫자를 보여 주고, 품절이면 구매 대신 재입고 알림처럼 다음에 할 수 있는 일로 바꿉니다.",
  whenToUse: [
    "사이즈, 색상마다 재고가 다를 때",
    "남은 수량이 결정에 영향을 줄 때",
    "품절 옵션을 고르기 전에 알려야 할 때",
  ],
  whenNotToUse: [
    "재고와 상관없이 늘 적게 보일 때(다크 패턴)",
    "디지털 상품처럼 재고가 없을 때",
    "정확한 재고를 알 수 없을 때",
  ],
  alternatives: [
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "거짓 재고 표시가 왜 문제인지 볼 때" },
    { name: "희소성 효과", slug: "scarcity", reason: "실제 제약을 알리는 방법을 볼 때" },
  ],
  accessibility: [
    "상태마다 모양이 다른 아이콘과 글자를 함께 써 색에 기대지 않습니다.",
    "옵션을 바꾸면 aria-live로 새 재고 상태를 읽어 줍니다.",
    "품절 옵션은 고를 수 있되 다음 행동을 버튼 이름으로 알려 줍니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "radio", "SVG"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorDemo").then(
      (m) => m.LowStockIndicatorDemo,
    ),
  Thumbnail: LowStockIndicatorThumbnail,
  sources: [
    {
      fileName: "LowStockIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/low-stock-indicator/LowStockIndicator.tsx?raw"),
    },
    {
      fileName: "LowStockIndicatorDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorDemo.tsx?raw"),
    },
  ],
};
