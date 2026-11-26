import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const cardGridPattern: Pattern = {
  slug: "card-grid",

  name: "Card Grid",
  nameKo: "카드 그리드",
  aliases: ["카드 목록", "상품 그리드", "card list", "product grid"],
  category: "layout",
  summary: "반복되는 카드를 일정한 격자로 배치",
  description:
    "같은 모양의 카드를 일정한 격자에 놓고, 제목 길이가 달라도 버튼 줄이 맞도록 카드 안을 세로로 정렬하는 패턴입니다.",
  tags: [...BASE_TAGS, "CSS grid", "Flexbox"],
  loadGuide: () => import("@/entities/pattern/catalog/card-grid/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/card-grid/CardGridDemo").then((m) => m.CardGridDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/card-grid/CardGridThumbnail").then(
      (m) => m.CardGridThumbnail,
    ),
  sources: [
    {
      fileName: "CardGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/card-grid/CardGrid.tsx?raw"),
    },
    {
      fileName: "CardGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/card-grid/CardGridDemo.tsx?raw"),
    },
  ],
};
