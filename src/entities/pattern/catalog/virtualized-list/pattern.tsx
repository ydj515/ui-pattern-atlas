import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const virtualizedListPattern: Pattern = {
  slug: "virtualized-list",

  name: "Virtualized List",
  nameKo: "가상 스크롤",
  aliases: ["가상화 목록", "윈도잉", "virtual scroll", "windowing"],
  category: "list-table",
  summary: "수천 개 항목을 가볍게 그리기",
  description:
    "수천, 수만 개의 행 중 화면에 보이는 몇 개만 그려 긴 목록도 빠르게 움직이게 하는 패턴입니다. 전체 높이는 유지해 스크롤바가 실제 위치를 보여 줍니다.",
  tags: [...BASE_TAGS, "Performance", "aria-setsize"],
  loadGuide: () => import("@/entities/pattern/catalog/virtualized-list/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/virtualized-list/VirtualizedListDemo").then(
      (m) => m.VirtualizedListDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/virtualized-list/VirtualizedListThumbnail").then(
      (m) => m.VirtualizedListThumbnail,
    ),
  sources: [
    {
      fileName: "VirtualizedList.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/virtualized-list/VirtualizedList.tsx?raw"),
    },
    {
      fileName: "VirtualizedListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/virtualized-list/VirtualizedListDemo.tsx?raw"),
    },
  ],
};
