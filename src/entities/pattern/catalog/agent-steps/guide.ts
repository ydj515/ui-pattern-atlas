import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "찾기, 정리, 쓰기처럼 여러 단계를 거치는 AI 작업",
    "몇십 초 이상 걸리는 일",
    "중간 결과를 보여 주면 믿음이 생길 때",
  ],
  whenNotToUse: [
    "한 번에 끝나는 짧은 답(생각 중 표시 사용)",
    "단계가 수십 개라 목록이 길어질 때(요약해서 보여 주기)",
    "내부 처리 과정을 그대로 노출할 필요가 없을 때",
  ],
  alternatives: [
    { name: "생각 중 표시", slug: "thinking-indicator", reason: "단계 없이 기다릴 때" },
    { name: "스테퍼", slug: "stepper", reason: "사용자가 직접 진행하는 단계" },
  ],
  accessibility: [
    "ol 목록이 aria-live라 단계가 바뀌면 알립니다.",
    "단계마다 완료, 진행 중, 대기를 글자로 덧붙입니다.",
    "아이콘과 연결선은 장식이라 aria-hidden입니다.",
    "도는 표시는 동작 줄이기에서 멈춥니다.",
  ],
};
