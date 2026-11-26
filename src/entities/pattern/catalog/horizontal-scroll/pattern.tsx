import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const horizontalScrollPattern: Pattern = {
  slug: "horizontal-scroll",

  name: "Horizontal Scroll",
  nameKo: "가로 스크롤",
  aliases: ["가로 목록", "카드 슬라이드", "carousel row", "horizontal list"],
  category: "navigation",
  summary: "넓은 콘텐츠를 좌우로 탐색",
  description:
    "카드 여러 장을 한 줄에 놓고 좌우로 넘겨 보는 패턴입니다. 손으로 밀어 넘기고, 넓은 화면에서는 이전, 다음 버튼으로 한 화면씩 넘깁니다.",
  tags: [...BASE_TAGS, "Scroll snap", "Keyboard"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/horizontal-scroll/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/horizontal-scroll/HorizontalScrollDemo").then(
      (m) => m.HorizontalScrollDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/horizontal-scroll/HorizontalScrollThumbnail").then(
      (m) => m.HorizontalScrollThumbnail,
    ),
  sources: [
    {
      fileName: "HorizontalScroll.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/horizontal-scroll/HorizontalScroll.tsx?raw"),
    },
    {
      fileName: "HorizontalScrollDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/horizontal-scroll/HorizontalScrollDemo.tsx?raw"),
    },
  ],
};
