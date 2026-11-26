import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "관심 분야, 기술 스택, 받는 사람처럼 여러 값을 받을 때",
    "보기가 정해져 있지 않아 직접 입력해야 할 때",
    "넣은 값을 한눈에 보고 하나씩 지워야 할 때",
  ],
  whenNotToUse: [
    "보기가 정해져 있을 때(체크박스나 다중 선택 사용)",
    "값이 하나뿐일 때(텍스트 필드 사용)",
    "값이 아주 많을 때(목록 편집 화면 사용)",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "정해진 보기 중 여러 개를 고를 때" },
    { name: "텍스트 필드", slug: "text-field", reason: "값이 하나일 때" },
  ],
  accessibility: [
    '칸마다 삭제 버튼이 있고 이름이 "디자인 삭제"처럼 무엇을 지우는지 말합니다.',
    '추가와 삭제 결과("개발 태그를 추가했어요")를 role="status"로 알립니다.',
    "한글 조합 중에는 Enter를 무시해 마지막 글자가 잘리지 않습니다.",
    "빈 칸에서 Backspace를 누르면 마지막 태그를 지우고, 지운 뒤에도 포커스는 입력에 남습니다.",
  ],
};
