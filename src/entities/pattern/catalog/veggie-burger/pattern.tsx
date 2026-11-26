import { type Pattern } from "@/entities/pattern/model/pattern";

export const veggieBurgerPattern: Pattern = {
  slug: "veggie-burger",

  kind: "concept",
  name: "Veggie Burger",
  nameKo: "베지 버거",
  aliases: ["두 줄 메뉴", "이선 아이콘", "two-line menu", "veggie burger menu"],
  category: "icon-names",
  summary: "가로줄 두 개로 된 메뉴",
  description:
    "햄버거에서 가운데 줄 하나를 뺀 가로줄 두 개 아이콘으로, 고기 패티가 빠진 채식 버거라는 농담에서 온 이름입니다. 뜻은 햄버거와 같아 메뉴를 열며, 덜 익숙하므로 메뉴라는 글자를 함께 둡니다.",
  tags: ["아이콘 이름", "메뉴"],
  loadGuide: () => import("@/entities/pattern/catalog/veggie-burger/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/veggie-burger/VeggieBurgerDemo").then(
      (m) => m.VeggieBurgerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/veggie-burger/VeggieBurgerThumbnail").then(
      (m) => m.VeggieBurgerThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/veggie-burger/VeggieBurgerDemo.tsx?raw"),
};
