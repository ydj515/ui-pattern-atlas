import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sortableListPattern: Pattern = {
  slug: "sortable-list",

  name: "Sortable List",
  nameKo: "순서 바꾸기 목록",
  aliases: ["드래그 정렬", "순서 편집", "reorder list", "drag to reorder"],
  category: "list-table",
  summary: "끌어서 순서 바꾸기",
  description:
    "손잡이를 끌어 목록의 순서를 바꾸는 패턴입니다. 키보드로는 손잡이에 포커스를 두고 위아래 화살표로 옮기며, 바뀐 위치를 알려 줍니다.",
  tags: [...BASE_TAGS, "Drag and drop", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/sortable-list/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sortable-list/SortableListDemo").then(
      (m) => m.SortableListDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sortable-list/SortableListThumbnail").then(
      (m) => m.SortableListThumbnail,
    ),
  sources: [
    {
      fileName: "SortableList.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sortable-list/SortableList.tsx?raw"),
    },
    {
      fileName: "SortableListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/sortable-list/SortableListDemo.tsx?raw"),
    },
  ],
};
