import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const masonryGridPattern: Pattern = {
  slug: "masonry-grid",

  name: "Masonry Grid",
  nameKo: "메이슨리",
  aliases: ["벽돌 레이아웃", "핀터레스트 그리드", "masonry", "waterfall layout"],
  category: "card-gallery",
  summary: "높이가 다른 카드를 벽돌처럼",
  description:
    "높이가 제각각인 카드를 빈틈없이 쌓아 벽돌처럼 채우는 패턴입니다. 사진 비율이 달라도 잘리지 않고, 화면 폭에 맞춰 열 수를 바꿉니다.",
  tags: [...BASE_TAGS, "CSS columns", "Layout"],
  loadGuide: () => import("@/entities/pattern/catalog/masonry-grid/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/masonry-grid/MasonryGridDemo").then(
      (m) => m.MasonryGridDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/masonry-grid/MasonryGridThumbnail").then(
      (m) => m.MasonryGridThumbnail,
    ),
  sources: [
    {
      fileName: "MasonryGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/masonry-grid/MasonryGrid.tsx?raw"),
    },
    {
      fileName: "MasonryGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/masonry-grid/MasonryGridDemo.tsx?raw"),
    },
  ],
};
