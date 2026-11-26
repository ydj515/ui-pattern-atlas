import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const magazineLayoutPattern: Pattern = {
  slug: "magazine-layout",

  name: "Magazine Layout",
  nameKo: "매거진 레이아웃",
  aliases: ["에디토리얼 레이아웃", "뉴스 레이아웃", "editorial layout", "lead story"],
  category: "layout",
  summary: "대표 콘텐츠와 보조 콘텐츠를 크기와 위치로 구분",
  description:
    "대표 기사 하나를 크게, 나머지를 작게 옆에 쌓아 크기와 위치로 중요도를 보여 주는 편집형 레이아웃입니다. 좁아지면 대표 기사부터 한 줄로 쌓입니다.",
  tags: [...BASE_TAGS, "Editorial", "Container queries"],
  loadGuide: () => import("@/entities/pattern/catalog/magazine-layout/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutDemo").then(
      (m) => m.MagazineLayoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutThumbnail").then(
      (m) => m.MagazineLayoutThumbnail,
    ),
  sources: [
    {
      fileName: "MagazineLayout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/magazine-layout/MagazineLayout.tsx?raw"),
    },
    {
      fileName: "MagazineLayoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutDemo.tsx?raw"),
    },
  ],
};
