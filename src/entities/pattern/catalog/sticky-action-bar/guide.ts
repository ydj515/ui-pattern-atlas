import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 예약처럼 긴 설명 끝에 행동이 하나 있을 때",
    "모바일 화면",
    "가격 같은 요약을 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "행동이 여러 개일 때",
    "폼 입력 중 키보드가 올라올 때(가리지 않게 숨기기)",
    "데스크톱의 넓은 화면(옆에 붙은 요약 상자 사용)",
  ],
  alternatives: [
    { name: "플로팅 액션 버튼", slug: "fab", reason: "목록 화면의 대표 행동" },
    { name: "고정 헤더", slug: "sticky-header", reason: "위쪽에 고정할 때" },
  ],
  accessibility: [
    "홈 표시줄을 피하도록 safe-area-inset-bottom만큼 여백을 둡니다.",
    "페이지 끝에 같은 높이의 여백을 둬 마지막 내용이 가려지지 않게 합니다.",
    '버튼 결과("담았어요")를 글로 바꿔 보여 줍니다.',
    "막대는 문서 순서상 내용 뒤에 있어 읽는 순서가 자연스럽습니다.",
  ],
};
