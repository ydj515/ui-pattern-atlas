import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새 대화의 빈 화면",
    "도우미가 잘하는 일이 정해져 있을 때",
    "처음 쓰는 사람이 많을 때",
  ],
  whenNotToUse: [
    "대화가 이미 진행 중일 때 늘 띄우기",
    "광고나 판매를 질문처럼 꾸밀 때",
    "예시가 너무 많아 고르기 어려울 때",
  ],
  alternatives: [
    { name: "빈 화면", slug: "empty-state", reason: "다음 행동을 안내하는 빈 상태" },
    { name: "프롬프트 입력", slug: "prompt-input", reason: "직접 질문을 쓰게 할 때" },
  ],
  accessibility: [
    "예시는 실제 버튼이라 키보드로 고를 수 있습니다.",
    "묶음에 추천 질문이라는 이름을 붙입니다.",
    "질문 글이 버튼 이름이 됩니다.",
    "누르면 결과가 role=status로 알려집니다.",
  ],
};
