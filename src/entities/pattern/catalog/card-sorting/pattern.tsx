import { type Pattern } from "@/entities/pattern/model/pattern";

export const cardSortingPattern: Pattern = {
  slug: "card-sorting",

  kind: "concept",
  name: "Card Sorting",
  nameKo: "카드 소팅",
  aliases: ["카드 분류", "메뉴 분류 조사", "정보 구조 조사", "card sort", "open card sorting"],
  category: "ux-research",
  summary: "사용자가 항목을 묶는 방식을 관찰",
  description:
    "메뉴 항목을 카드에 적어 참가자가 직접 묶고 이름 붙이게 하는 방법입니다. 여러 사람이 어떤 카드를 같은 묶음에 넣었는지 비율로 보면 사용자가 기대하는 메뉴 구조가 보입니다.",
  tags: ["UX 리서치", "정보 구조"],
  loadGuide: () => import("@/entities/pattern/catalog/card-sorting/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/card-sorting/CardSortingDemo").then(
      (m) => m.CardSortingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/card-sorting/CardSortingThumbnail").then(
      (m) => m.CardSortingThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/card-sorting/CardSortingDemo.tsx?raw"),
};
