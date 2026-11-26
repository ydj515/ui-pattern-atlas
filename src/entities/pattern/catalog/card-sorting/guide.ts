import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메뉴나 카테고리를 새로 짤 때",
    "항목이 많아 어디에 둘지 정하기 어려울 때",
    "팀 안에서 분류 기준이 갈릴 때",
  ],
  whenNotToUse: [
    "이미 만든 구조에서 찾을 수 있는지 볼 때(트리 테스트 사용)",
    "항목이 열 개도 안 될 때",
    "화면 디자인의 문제를 찾을 때",
  ],
  alternatives: [
    { name: "트리 테스트", slug: "tree-testing", reason: "만든 구조를 검증할 때" },
    { name: "사용자 인터뷰", slug: "user-interview", reason: "분류한 이유를 들을 때" },
  ],
  accessibility: [
    "끌어서 놓기 대신 선택 목록으로도 분류할 수 있는 도구를 씁니다.",
    "카드 문구는 짧고 뜻이 분명하게 씁니다.",
    "원격 도구가 화면 낭독기로 쓸 수 있는지 미리 확인합니다.",
  ],
};
