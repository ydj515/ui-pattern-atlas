import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문, 메일, 파일처럼 여러 개를 함께 처리하는 목록",
    "같은 작업을 반복해야 할 때",
    "모두 선택이 필요할 때",
  ],
  whenNotToUse: [
    "한 번에 하나만 처리할 때(행마다 버튼 두기)",
    "모바일에서 행이 아주 많을 때(길게 눌러 선택 모드 사용)",
    "되돌릴 수 없는 일괄 삭제(확인 대화상자 함께 사용)",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "보기와 정렬만 할 때" },
    {
      name: "확인 다이얼로그",
      slug: "confirmation-dialog",
      reason: "일괄 삭제 전에 한 번 더 묻기",
    },
  ],
  accessibility: [
    '체크박스 이름이 "A-1021 선택"처럼 행을 가리킵니다.',
    "모두 선택은 일부만 골랐을 때 indeterminate 상태가 됩니다.",
    "선택 막대는 aria-live라 개수 변화를 알려 줍니다.",
    "선택한 행은 aria-selected와 배경색으로 표시합니다.",
  ],
};
