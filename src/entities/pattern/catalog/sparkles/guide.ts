import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "AI가 글이나 이미지를 만들어 주는 버튼",
    "자동으로 만든 결과에 표시를 남길 때",
    "기존 기능과 AI 기능을 구분할 때",
  ],
  whenNotToUse: [
    "AI와 관계없는 새 기능 강조",
    "모든 버튼에 붙여 뜻이 흐려질 때",
    "되돌릴 방법 없이 결과를 바꿀 때",
  ],
  alternatives: [
    { name: "스트리밍 응답", slug: "streaming-text", reason: "AI 답이 써지는 모습" },
    { name: "답변 평가", slug: "response-feedback", reason: "AI 결과를 평가할 때" },
  ],
  accessibility: [
    "아이콘 옆에 AI로 다듬기처럼 동작을 글자로 씁니다.",
    "바뀐 뒤에는 되돌리기를 함께 둡니다.",
    "결과는 role=status로 알립니다.",
    "반짝이 그림은 aria-hidden입니다.",
  ],
};
