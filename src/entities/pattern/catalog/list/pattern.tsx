import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ListThumbnail } from "@/entities/pattern/catalog/list/ListThumbnail";

export const listPattern: Pattern = {
  slug: "list",
  name: "List",
  nameKo: "리스트",
  aliases: ["목록", "리스트 행", "list item", "row list"],
  category: "list-table",
  summary: "아이콘, 제목, 부가 정보가 있는 행",
  description:
    "아이콘, 제목, 두 번째 줄, 오른쪽 값을 한 줄에 모아 여러 항목을 훑어보게 하는 기본 목록입니다. 행 전체가 하나의 버튼이라 어디를 눌러도 열립니다.",
  whenToUse: [
    "파일, 연락처, 설정처럼 같은 모양의 항목을 나열할 때",
    "항목마다 짧은 부가 정보가 있을 때",
    "눌러서 상세로 들어가는 목록",
  ],
  whenNotToUse: [
    "여러 값을 열 기준으로 비교할 때(데이터 테이블 사용)",
    "이미지가 중심일 때(카드나 갤러리 사용)",
    "항목마다 조작 버튼이 여러 개일 때(행 안에 버튼을 따로 두기)",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "열 기준으로 비교할 때" },
    { name: "그룹 목록", slug: "grouped-list", reason: "묶음 머리말이 필요할 때" },
  ],
  accessibility: [
    "ul 목록이라 항목 수가 함께 읽힙니다.",
    "행 전체가 하나의 button이고 이름이 제목부터 읽힙니다.",
    "아이콘과 화살표는 장식이라 aria-hidden입니다.",
    "긴 제목은 말줄임하되 전체 글은 DOM에 남습니다.",
  ],
  tags: [...BASE_TAGS, "List", "Button"],
  loadPreview: () => import("@/entities/pattern/catalog/list/ListDemo").then((m) => m.ListDemo),
  Thumbnail: ListThumbnail,
  sources: [
    {
      fileName: "List.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/list/List.tsx?raw"),
    },
    {
      fileName: "ListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/list/ListDemo.tsx?raw"),
    },
  ],
};
