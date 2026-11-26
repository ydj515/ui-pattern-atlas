import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
