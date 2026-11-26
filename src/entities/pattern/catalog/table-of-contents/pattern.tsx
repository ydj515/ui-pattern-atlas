import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tableOfContentsPattern: Pattern = {
  slug: "table-of-contents",

  name: "Table of Contents",
  nameKo: "목차",
  aliases: ["스크롤 스파이", "페이지 목차", "TOC", "scrollspy", "on this page"],
  category: "navigation",
  summary: "스크롤 위치를 따라가는 목차",
  description:
    "긴 문서의 섹션 목록을 옆에 두고, 지금 읽고 있는 섹션을 표시해 주는 패턴입니다. 위치를 확인하고 원하는 섹션으로 바로 이동할 수 있습니다.",
  tags: [...BASE_TAGS, "aria-current", "Scroll"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/table-of-contents/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/table-of-contents/TableOfContentsDemo").then(
      (m) => m.TableOfContentsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/table-of-contents/TableOfContentsThumbnail").then(
      (m) => m.TableOfContentsThumbnail,
    ),
  sources: [
    {
      fileName: "TableOfContents.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/table-of-contents/TableOfContents.tsx?raw"),
    },
    {
      fileName: "TableOfContentsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/table-of-contents/TableOfContentsDemo.tsx?raw"),
    },
  ],
};
