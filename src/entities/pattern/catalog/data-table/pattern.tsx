import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DataTableThumbnail } from "@/entities/pattern/catalog/data-table/DataTableThumbnail";

export const dataTablePattern: Pattern = {
  slug: "data-table",
  name: "Data Table",
  nameKo: "데이터 테이블",
  aliases: ["표", "정렬 표", "table", "sortable table"],
  category: "list-table",
  summary: "열 기준으로 데이터를 비교하고 정렬",
  description:
    "행과 열로 된 표에서 열 머리글을 눌러 정렬하며 값을 비교하는 패턴입니다. 숫자는 오른쪽 정렬과 같은 폭 숫자로 자릿수를 맞추고, 스크롤해도 머리글이 남습니다.",
  whenToUse: [
    "지점별 매출처럼 같은 항목을 여러 기준으로 비교할 때",
    "정렬해서 순위를 봐야 할 때",
    "넓은 화면의 관리 도구",
  ],
  whenNotToUse: [
    "열이 하나둘뿐일 때(리스트 사용)",
    "작은 화면에서 열이 많을 때(카드형 목록으로 바꾸기)",
    "레이아웃을 잡기 위한 표(CSS 그리드 사용)",
  ],
  alternatives: [
    { name: "리스트", slug: "list", reason: "값이 적고 훑어보기만 할 때" },
    { name: "선택 테이블", slug: "selectable-table", reason: "여러 행을 골라 처리할 때" },
  ],
  accessibility: [
    "실제 table, caption, th scope를 써서 셀마다 머리글이 함께 읽힙니다.",
    "정렬 버튼은 머리글 안에 있고, 정렬 중인 열은 aria-sort로 방향을 알립니다.",
    '행의 첫 칸은 th scope="row"라 행 이름이 됩니다.',
    "숫자는 tabular-nums로 자릿수가 맞습니다.",
  ],
  tags: [...BASE_TAGS, "aria-sort", "table"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/data-table/DataTableDemo").then((m) => m.DataTableDemo),
  Thumbnail: DataTableThumbnail,
  sources: [
    {
      fileName: "DataTable.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/data-table/DataTable.tsx?raw"),
    },
    {
      fileName: "DataTableDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/data-table/DataTableDemo.tsx?raw"),
    },
  ],
};
