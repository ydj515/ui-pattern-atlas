import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { VirtualizedListThumbnail } from "@/entities/pattern/catalog/virtualized-list/VirtualizedListThumbnail";

export const virtualizedListPattern: Pattern = {
  slug: "virtualized-list",
  name: "Virtualized List",
  nameKo: "가상 스크롤",
  aliases: ["가상화 목록", "윈도잉", "virtual scroll", "windowing"],
  category: "list-table",
  summary: "수천 개 항목을 가볍게 그리기",
  description:
    "수천, 수만 개의 행 중 화면에 보이는 몇 개만 그려 긴 목록도 빠르게 움직이게 하는 패턴입니다. 전체 높이는 유지해 스크롤바가 실제 위치를 보여 줍니다.",
  whenToUse: [
    "로그, 주문 내역처럼 행이 수천 개 이상인 목록",
    "모든 행의 높이가 같을 때",
    "스크롤 성능이 문제일 때",
  ],
  whenNotToUse: [
    "행이 수백 개 이하일 때(그냥 그리는 것이 단순합니다)",
    "페이지 찾기(Ctrl+F)로 내용을 찾아야 할 때",
    "행 높이가 제각각일 때(높이 측정이 필요해 복잡해짐)",
  ],
  alternatives: [
    { name: "더 보기 버튼", slug: "load-more", reason: "필요한 만큼만 불러올 때" },
    { name: "페이지네이션", slug: "pagination", reason: "쪽 단위로 나눌 때" },
  ],
  accessibility: [
    "DOM에 없는 행이 많으므로 각 행에 aria-setsize와 aria-posinset으로 전체 중 위치를 알립니다.",
    "스크롤 영역은 이름이 있는 region이고 포커스를 받아 키보드로 스크롤합니다.",
    "위아래로 몇 행을 더 그려 빠르게 스크롤해도 빈칸이 덜 보입니다.",
    "브라우저 찾기로는 화면 밖 행을 찾을 수 없으니 검색 기능을 함께 둡니다.",
  ],
  tags: [...BASE_TAGS, "Performance", "aria-setsize"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/virtualized-list/VirtualizedListDemo").then(
      (m) => m.VirtualizedListDemo,
    ),
  Thumbnail: VirtualizedListThumbnail,
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
