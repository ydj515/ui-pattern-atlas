import { type Pattern } from "@/entities/pattern/model/pattern";
import { SneakIntoBasketThumbnail } from "@/entities/pattern/catalog/sneak-into-basket/SneakIntoBasketThumbnail";

export const sneakIntoBasketPattern: Pattern = {
  slug: "sneak-into-basket",
  kind: "concept",
  name: "Sneak into Basket",
  nameKo: "장바구니 몰래 담기",
  aliases: ["몰래 담기", "자동 추가 옵션", "sneak into basket", "pre-added items"],
  category: "dark-patterns",
  summary: "동의 없이 상품이나 옵션을 장바구니에 추가 (다크 패턴)",
  description:
    "사용자가 고르지 않은 보험, 기부, 유료 옵션을 장바구니에 미리 담아 두어 알아채지 못하면 함께 결제되게 하는 다크 패턴입니다. 바른 방법은 추가 상품을 체크되지 않은 선택지로 보여 주는 것입니다.",
  whenToUse: [
    "장바구니, 결제 화면의 추가 상품을 검토할 때",
    "부가 상품을 권할 때의 기준을 정할 때",
    "합계 금액이 달라지는 항목을 찾을 때",
  ],
  whenNotToUse: [
    "추가 상품을 미리 담아 둘 때",
    "자동 추가를 작은 글씨로만 알릴 때",
    "빼는 방법을 어렵게 만들 때",
  ],
  alternatives: [
    { name: "숨은 비용", slug: "hidden-costs", reason: "마지막에 붙는 요금" },
    { name: "미리 체크된 동의", slug: "pre-checked-opt-in", reason: "선택 동의를 미리 켜 둘 때" },
  ],
  accessibility: [
    "추가 상품은 체크되지 않은 체크박스로 시작합니다.",
    "합계 금액은 바뀔 때마다 글로 갱신합니다.",
    "자동 추가를 작은 회색 글씨로 숨기지 않습니다.",
    "label로 문구 전체를 눌러 고를 수 있게 합니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sneak-into-basket/SneakIntoBasketDemo").then(
      (m) => m.SneakIntoBasketDemo,
    ),
  Thumbnail: SneakIntoBasketThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/sneak-into-basket/SneakIntoBasketDemo.tsx?raw"),
};
