import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "첫 글자가 나오기까지 기다림이 있을 때",
    "말풍선 자리를 미리 잡아 두고 싶을 때",
    "도구 실행처럼 시간이 걸리는 단계",
  ],
  whenNotToUse: [
    "바로 나오는 답",
    "단계가 여러 개인 작업(에이전트 단계 사용)",
    "진행률을 알 수 있는 작업(진행 바 사용)",
  ],
  alternatives: [
    { name: "스트리밍 응답", slug: "streaming-text", reason: "답이 나오기 시작한 뒤" },
    { name: "에이전트 단계", slug: "agent-steps", reason: "무엇을 하는지 단계별로 알릴 때" },
  ],
  accessibility: [
    "role=status로 생각하는 중이라는 글을 알립니다.",
    "점은 장식이라 aria-hidden이고 동작 줄이기에서 멈춥니다.",
    "오래 걸리면 지난 시간을 글로 덧붙입니다.",
    "기다리는 동안 질문 버튼을 비활성으로 둡니다.",
  ],
};
