import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const paginationPattern: Pattern = {
  slug: "pagination",

  name: "Pagination",
  nameKo: "페이지네이션",
  aliases: ["페이지 번호", "페이징", "쪽 번호", "pager", "paging"],
  category: "navigation",
  summary: "긴 목록을 페이지 단위로 나누어 이동하는 번호 버튼",
  description:
    "많은 결과를 일정한 개수로 나누고, 페이지 번호와 이전/다음 버튼으로 이동하게 하는 패턴입니다. 사용자가 특정 위치를 기억하고 다시 찾아오기 쉽습니다.",
  tags: [...BASE_TAGS, "aria-current"],
  loadGuide: () => import("@/entities/pattern/catalog/pagination/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pagination/PaginationDemo").then((m) => m.PaginationDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pagination/PaginationThumbnail").then(
      (m) => m.PaginationThumbnail,
    ),
  sources: [
    {
      fileName: "Pagination.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/pagination/Pagination.tsx?raw"),
    },
    {
      fileName: "PaginationDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/pagination/PaginationDemo.tsx?raw"),
    },
  ],
};
