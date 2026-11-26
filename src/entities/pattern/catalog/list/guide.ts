import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
