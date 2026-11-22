import { type Pattern } from "@/entities/pattern/model/pattern";
import { VeggieBurgerThumbnail } from "@/entities/pattern/catalog/veggie-burger/VeggieBurgerThumbnail";

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
  whenToUse: [
    "가벼운 느낌의 메뉴 아이콘이 필요할 때",
    "메뉴 글자를 옆에 함께 둘 수 있을 때",
    "전체 화면 메뉴를 열 때",
  ],
  whenNotToUse: [
    "아이콘만으로 메뉴를 알려야 할 때(햄버거가 더 익숙)",
    "같은 서비스에서 햄버거와 섞을 때",
    "닫기(×)로 바뀌는 애니메이션이 어색할 때",
  ],
  alternatives: [
    { name: "햄버거", slug: "hamburger", reason: "가로줄 세 개로 된 메뉴" },
    { name: "계단", slug: "stairs", reason: "엇갈린 가로줄 아이콘" },
  ],
  accessibility: [
    "아이콘 옆에 메뉴라는 글자를 두어 버튼 이름이 됩니다.",
    "aria-expanded로 열림을 알립니다.",
    "열린 메뉴는 닫기 버튼과 Esc로 닫힙니다.",
    "현재 페이지는 aria-current로 표시합니다.",
  ],
  tags: ["아이콘 이름", "메뉴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/veggie-burger/VeggieBurgerDemo").then(
      (m) => m.VeggieBurgerDemo,
    ),
  Thumbnail: VeggieBurgerThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/veggie-burger/VeggieBurgerDemo.tsx?raw"),
};
