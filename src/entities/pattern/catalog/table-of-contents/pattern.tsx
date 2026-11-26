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
  whenToUse: [
    "문서, 가이드처럼 섹션이 많은 긴 글",
    "넓은 화면에서 옆 공간이 남을 때",
    "읽는 위치를 알려 주면 도움이 될 때",
  ],
  whenNotToUse: [
    "섹션이 두세 개뿐인 짧은 글",
    "작은 화면(접을 수 있는 목차나 맨 위 목록 사용)",
    "글이 아닌 앱 화면",
  ],
  alternatives: [
    { name: "맨 위로", slug: "back-to-top", reason: "긴 페이지에서 처음으로 돌아가기" },
    { name: "탭", slug: "tabs", reason: "섹션을 한 번에 하나씩 보여 줄 때" },
  ],
  accessibility: [
    '지금 섹션은 aria-current="location"과 굵은 선으로 표시합니다.',
    "링크는 실제 앵커라 누르면 그 섹션으로 이동합니다.",
    "마지막 섹션이 짧아 위에 닿지 못해도 끝까지 내리면 표시됩니다.",
    'nav에 "목차" 이름을 붙입니다.',
  ],
  tags: [...BASE_TAGS, "aria-current", "Scroll"],
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
