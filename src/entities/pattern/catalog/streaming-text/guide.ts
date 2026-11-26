import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "답이 완성되기까지 몇 초 걸리는 AI 응답",
    "첫 글자를 빨리 보여 기다림을 줄이고 싶을 때",
    "도중에 멈출 수 있어야 할 때",
  ],
  whenNotToUse: [
    "결과가 바로 나오는 짧은 응답",
    "표, 코드처럼 다 나온 뒤 봐야 하는 형식",
    "일부러 천천히 보여 주는 연출",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "정해진 문장을 연출로 써 보일 때" },
    { name: "생각 중 표시", slug: "thinking-indicator", reason: "첫 글자가 나오기 전 기다림" },
  ],
  accessibility: [
    "쓰는 동안 aria-busy를 켜 완성된 답을 한 번에 읽게 합니다.",
    "커서는 장식이라 aria-hidden이고 동작 줄이기에서는 깜빡이지 않습니다.",
    "멈추기 버튼은 답변 받기와 같은 자리에 둡니다.",
    "줄바꿈을 지키도록 white-space: pre-wrap을 씁니다.",
  ],
};
