import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "숙소 소개, 상품 설명, 후기처럼 길이가 제각각인 글",
    "카드나 목록에서 높이를 맞춰야 할 때",
    "대부분 앞부분만 읽어도 충분할 때",
  ],
  whenNotToUse: [
    "꼭 읽어야 하는 약관, 주의 사항(처음부터 다 보여 주기)",
    "몇 줄 안 되는 글",
    "제목 하나에 딸린 긴 답(디스클로저나 아코디언 사용)",
  ],
  alternatives: [
    { name: "디스클로저", slug: "disclosure", reason: "제목을 눌러 내용을 펼칠 때" },
    { name: "아코디언", slug: "accordion", reason: "여러 질문과 답을 접어 둘 때" },
  ],
  accessibility: [
    "버튼은 실제로 넘칠 때만 나타나고 aria-expanded와 aria-controls로 본문과 연결됩니다.",
    "버튼이 글 바로 뒤에 있어 펼친 뒤에도 포커스 위치가 이어집니다.",
    "줄인 글도 DOM에 모두 있어 스크린 리더는 전체를 읽을 수 있습니다.",
    "화면 크기가 바뀌면 다시 재서 버튼을 보여 주거나 숨깁니다.",
  ],
};
