import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["AI 답변마다", "답변 품질을 모아 개선할 때", "답을 다른 곳에 옮겨 쓸 일이 많을 때"],
  whenNotToUse: [
    "사람이 쓴 메시지(이모지 반응 사용)",
    "도구가 많아 줄이 넘칠 때(더 보기 메뉴로 묶기)",
    "평가를 강요하는 팝업",
  ],
  alternatives: [
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "글 끝에서 도움 여부를 물을 때" },
    {
      name: "답변 다시 생성",
      slug: "regenerate-response",
      reason: "새 답변과 이전 답변을 비교할 때",
    },
  ],
  accessibility: [
    "아이콘 버튼마다 이름과 title이 있습니다.",
    "좋음, 아쉬움은 aria-pressed 토글입니다.",
    "복사 결과는 숨겨진 role=status로 알립니다.",
    "묶음에 답변 도구라는 이름을 붙입니다.",
  ],
};
