import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { GroupedListThumbnail } from "@/entities/pattern/catalog/grouped-list/GroupedListThumbnail";

export const groupedListPattern: Pattern = {
  slug: "grouped-list",
  name: "Grouped List",
  nameKo: "그룹 목록",
  aliases: ["섹션 목록", "고정 머리말", "sticky header list", "sectioned list"],
  category: "list-table",
  summary: "머리말이 따라붙는 묶음 목록",
  description:
    "긴 목록을 초성이나 날짜로 묶고, 스크롤해도 지금 묶음의 머리말이 위에 붙어 있게 하는 패턴입니다. 어디쯤을 보고 있는지 늘 알 수 있습니다.",
  whenToUse: [
    "연락처, 날짜별 기록처럼 기준으로 묶을 수 있는 긴 목록",
    "스크롤하며 위치를 확인해야 할 때",
    "묶음마다 항목 수가 다를 때",
  ],
  whenNotToUse: ["묶음이 하나뿐일 때", "짧은 목록", "묶음을 접어야 할 때(아코디언 사용)"],
  alternatives: [
    { name: "리스트", slug: "list", reason: "묶음이 필요 없을 때" },
    { name: "아코디언", slug: "accordion", reason: "묶음을 접었다 펼 때" },
  ],
  accessibility: [
    "묶음마다 제목이 있는 section이라 제목 단위로 이동할 수 있습니다.",
    "각 묶음 목록은 제목으로 이름을 붙여 크기가 함께 읽힙니다.",
    "스크롤 영역은 이름이 있는 region이고 포커스를 받아 키보드로 스크롤합니다.",
    "머리말 고정은 CSS position: sticky만 씁니다.",
  ],
  tags: [...BASE_TAGS, "position: sticky", "Landmark"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/grouped-list/GroupedListDemo").then(
      (m) => m.GroupedListDemo,
    ),
  Thumbnail: GroupedListThumbnail,
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
