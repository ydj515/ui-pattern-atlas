import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const stickyHeaderPattern: Pattern = {
  slug: "sticky-header",

  name: "Sticky Header",
  nameKo: "고정 헤더",
  aliases: ["상단 고정", "스티키 헤더", "fixed header", "sticky top bar"],
  category: "layout",
  summary: "스크롤해도 남는 상단",
  description:
    "목록을 내려도 화면 위에 제목과 주요 동작이 남아 있는 패턴입니다. 내용이 아래로 지나가기 시작할 때만 그림자를 넣어 평소에는 가볍게 보입니다.",
  tags: [...BASE_TAGS, "position: sticky", "Scroll"],
  loadGuide: () => import("@/entities/pattern/catalog/sticky-header/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sticky-header/StickyHeaderDemo").then(
      (m) => m.StickyHeaderDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sticky-header/StickyHeaderThumbnail").then(
      (m) => m.StickyHeaderThumbnail,
    ),
  sources: [
    {
      fileName: "StickyHeader.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sticky-header/StickyHeader.tsx?raw"),
    },
    {
      fileName: "StickyHeaderDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/sticky-header/StickyHeaderDemo.tsx?raw"),
    },
  ],
};
