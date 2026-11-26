import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const infiniteScrollPattern: Pattern = {
  slug: "infinite-scroll",

  name: "Infinite Scroll",
  nameKo: "무한 스크롤",
  aliases: ["자동 불러오기", "끝없는 스크롤", "endless scroll", "lazy list"],
  category: "navigation",
  summary: "끝에 닿으면 이어서 불러오기",
  description:
    "목록 끝에 가까워지면 다음 묶음을 자동으로 불러와 이어 붙이는 패턴입니다. 피드처럼 계속 훑어보는 화면에서 페이지를 넘기는 수고를 없앱니다.",
  tags: [...BASE_TAGS, "role=status", "Scroll"],
  loadGuide: () => import("@/entities/pattern/catalog/infinite-scroll/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/infinite-scroll/InfiniteScrollDemo").then(
      (m) => m.InfiniteScrollDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/infinite-scroll/InfiniteScrollThumbnail").then(
      (m) => m.InfiniteScrollThumbnail,
    ),
  sources: [
    {
      fileName: "InfiniteScroll.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/infinite-scroll/InfiniteScroll.tsx?raw"),
    },
    {
      fileName: "InfiniteScrollDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/infinite-scroll/InfiniteScrollDemo.tsx?raw"),
    },
  ],
};
