import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SortableListThumbnail } from "@/entities/pattern/catalog/sortable-list/SortableListThumbnail";

export const sortableListPattern: Pattern = {
  slug: "sortable-list",
  name: "Sortable List",
  nameKo: "순서 바꾸기 목록",
  aliases: ["드래그 정렬", "순서 편집", "reorder list", "drag to reorder"],
  category: "list-table",
  summary: "끌어서 순서 바꾸기",
  description:
    "손잡이를 끌어 목록의 순서를 바꾸는 패턴입니다. 키보드로는 손잡이에 포커스를 두고 위아래 화살표로 옮기며, 바뀐 위치를 알려 줍니다.",
  whenToUse: [
    "할 일 우선순위, 메뉴 순서, 재생 목록",
    "사용자가 순서를 직접 정해야 할 때",
    "항목이 수십 개 이하일 때",
  ],
  whenNotToUse: [
    "정렬 기준이 정해져 있을 때(데이터 테이블 정렬 사용)",
    "항목이 아주 많을 때(맨 위로 보내기 같은 버튼 사용)",
    "다른 목록으로 옮길 때(칸반 보드 사용)",
  ],
  alternatives: [
    { name: "칸반 보드", slug: "kanban-board", reason: "상태가 다른 목록으로 옮길 때" },
    { name: "데이터 테이블", slug: "data-table", reason: "기준에 따라 자동 정렬할 때" },
  ],
  accessibility: [
    "손잡이는 이름이 있는 버튼이고 ↑/↓로 한 칸씩 옮깁니다.",
    '옮긴 뒤 "4개 중 1번째"처럼 새 위치를 role="status"로 알립니다.',
    "옮긴 항목의 손잡이에 포커스가 남습니다.",
    "ol 목록이라 순서가 함께 읽힙니다.",
  ],
  tags: [...BASE_TAGS, "Drag and drop", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sortable-list/SortableListDemo").then(
      (m) => m.SortableListDemo,
    ),
  Thumbnail: SortableListThumbnail,
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
