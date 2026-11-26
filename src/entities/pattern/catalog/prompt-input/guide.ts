import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "채팅형 AI 화면의 아래쪽",
    "파일을 함께 보낼 수 있을 때",
    "답변 생성을 중간에 멈출 수 있어야 할 때",
  ],
  whenNotToUse: [
    "한 줄 검색어(검색 필드 사용)",
    "긴 글 작성(여러 줄 입력이나 편집기 사용)",
    "보내기와 멈추기를 다른 곳에 따로 둘 때",
  ],
  alternatives: [
    { name: "검색창", slug: "search-field", reason: "한 줄 검색어를 받을 때" },
    { name: "텍스트 영역", slug: "textarea", reason: "긴 글을 쓸 때" },
  ],
  accessibility: [
    "입력창은 숨겨진 label로 이름을 붙입니다.",
    "아이콘 버튼마다 보내기, 멈추기처럼 이름이 있습니다.",
    "한글 조합 중 Enter는 보내지 않습니다.",
    "빈 입력에서는 보내기 버튼이 비활성입니다.",
  ],
};
