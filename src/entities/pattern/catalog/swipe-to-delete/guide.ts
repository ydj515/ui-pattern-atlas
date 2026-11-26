import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메일, 할 일처럼 항목을 자주 정리하는 모바일 목록",
    "행마다 삭제 버튼을 늘 보여 주기엔 자리가 좁을 때",
    "되돌리기를 함께 제공할 수 있을 때",
  ],
  whenNotToUse: [
    "되돌릴 수 없는 삭제(확인 대화상자 사용)",
    "마우스 중심의 데스크톱 표(행 끝의 버튼이나 선택 후 일괄 삭제)",
    "행 안에 가로로 스크롤되는 내용이 있을 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "지운 뒤 바로 되돌릴 기회를 줄 때" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "되돌릴 수 없는 삭제일 때" },
  ],
  accessibility: [
    "삭제 버튼은 실제 button이라 Tab으로 가면 행이 밀리며 드러나 제스처 없이도 지울 수 있습니다.",
    "버튼 이름에 항목 이름을 넣어(회의록 정리 삭제) 화면 읽기 프로그램에서 무엇을 지우는지 알 수 있습니다.",
    "지운 결과와 되돌리기는 role=status로 알립니다.",
    "touch-action: pan-y로 세로 스크롤은 그대로 둡니다.",
  ],
};
