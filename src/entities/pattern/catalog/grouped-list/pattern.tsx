import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const groupedListPattern: Pattern = {
  slug: "grouped-list",

  name: "Grouped List",
  nameKo: "그룹 목록",
  aliases: ["섹션 목록", "고정 머리말", "sticky header list", "sectioned list"],
  category: "list-table",
  summary: "머리말이 따라붙는 묶음 목록",
  description:
    "긴 목록을 초성이나 날짜로 묶고, 스크롤해도 지금 묶음의 머리말이 위에 붙어 있게 하는 패턴입니다. 어디쯤을 보고 있는지 늘 알 수 있습니다.",
  tags: [...BASE_TAGS, "position: sticky", "Landmark"],
  loadGuide: () => import("@/entities/pattern/catalog/grouped-list/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/grouped-list/GroupedListDemo").then(
      (m) => m.GroupedListDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/grouped-list/GroupedListThumbnail").then(
      (m) => m.GroupedListThumbnail,
    ),
  sources: [
    {
      fileName: "GroupedList.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/grouped-list/GroupedList.tsx?raw"),
    },
    {
      fileName: "GroupedListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/grouped-list/GroupedListDemo.tsx?raw"),
    },
  ],
};
