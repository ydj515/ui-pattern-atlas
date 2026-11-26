import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메일, 파일처럼 같은 작업을 여러 항목에 할 때",
    "고른 개수가 결과를 좌우할 때",
    "처리 뒤 되돌릴 수 있을 때",
  ],
  whenNotToUse: [
    "항목 하나씩만 다루는 목록",
    "되돌릴 수 없는 대량 삭제를 확인 없이 할 때",
    "고른 상태가 화면 밖으로 사라져 보이지 않을 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "처리 직후 되돌릴 때" },
    { name: "스와이프 삭제", slug: "swipe-to-delete", reason: "항목 하나를 밀어서 지울 때" },
    { name: "체크박스", slug: "checkbox", reason: "고르는 칸의 기본 형태" },
  ],
  accessibility: [
    '작업 막대는 role="toolbar"이고 고른 개수를 aria-live로 읽어 줍니다.',
    "고른 항목이 없으면 막대를 숨겨 쓸 수 없는 버튼을 두지 않습니다.",
    '처리 결과와 되돌리기 버튼은 role="status" 안에 둡니다.',
  ],
};
